


module.factory('myInterseptor',['$log',function($log){
    $log.debug("$log is here to show you that this is a regular factory with injection")
    var myInterseptor = {}
    return myInterseptor
}])

module.config(['$httpProvider',function($httpProvider) {
    $httpProvider.interceptors.push('myInterseptor')
}])
module.factory('myInterseptor', ['$q', 'someAsincService', function($q,someAsincService){
    var responseInterceptor = {
        response:function(response){
            var deffered = $q.defer()
            someAsincService.doAsyncOperation().then(function(){
                //Asyncronous operation succeded, modify responce accordingly
                deffer.resolve(response)
            }, function(){
                // Asinc operation failed 
                deffered.resolve(response)
            })
            return deffered.promise
        }
    }
    return responseInterceptor
}])

// Session Injector

module.factory('sessionInjector', ['SessionService', function(SessionService){
    var sessionInjector = {
        request:function(config){
            if(!SessionService.isAanonymus){
                config.headers['x-session-token'] = SessionService.token
            }
            return config
        }
    }
    return sessionInjector
}])

module.config(['$httpProvider', function($httpProvider){
    $httpProvider.interceptors.push('sessionInjector')
}])

// creating a request

$http.get('https://api.github.com/users/naorye/repos')
// before interseptor
// 
// {
//     "transformRequest": [
//         null
//     ],
//     "transformResponse": [
//         null
//     ],
//     "method": "GET",
//     "url": "https://api.github.com/users/naorye/repos",
//     "headers": {
//         "Accept": "application/json, text/plain, */*"
//     }
// }
// 
// after interseptor
// 
// {
//     "transformRequest": [
//         null
//     ],
//     "transformResponse": [
//         null
//     ],
//     "method": "GET",
//     "url": "https://api.github.com/users/naorye/repos",
//     "headers": {
//         "Accept": "application/json, text/plain, */*",
//         "x-session-token": 415954427904
//     }
// }


//timestamp maker

module.factory('timestampMaker', [function(){
    var timestampMaker = {
        request:function(config){
            config.requestTimestamp = new Date().getTime()
            return config
        },
        response:function(responce){
            response.config.responseTimestamp = new Date().getTime()
            return response
        }
    }
    return timestampMaker
}])

module.config(['$httpProvider', function($httpProvider){
    $httpProvider.interceptors.push('timestampMaker')
}])

// TimestampMaker Usage

$http.get('https://api.github.com/users/naorye/repos').then(function(response){
    var time = response.config.responseTimestamp - response.config.requestTimestamp
    console.log('The request took ' + (time/1000)+' seconds.')
})

// Request Recover 

module.factory('requestRejector', ['$q', function($q){
    var requestRejector = {
        request:function(config){
            return $q.reject('requestRejector')
        }
    }
    return requestRejector
}])

module.factory('requestRecoverer',['$q', function($q){
    var requestRecoverer = {
        requestError:function(rejectReason){
            if(rejectReason === 'requestRejector'){
                return {
                    transformRequest:[],
                    transformResponse:[],
                    method:'GET',
                    url:'https://api.github.com/users/naorye/repos',
                    headers:{
                        Accept:'application/json, text/plain, */*'
                    }
                }
            }else{
                return $q.reject(rejectReason)
            }
        }
    }
    return requestRecoverer
}])

module.config(['$httpProvider', function($httpProvider){
    $httpProvider.interceptors.push('requestRejector')
    $httpProvider.interceptors.push('requestRecoverer')
}])

$http.get('https://api.github.com/users/naorye/repos').then(function(){
    console.log('success')
},function(rejectReason){
    console.log('failure')
})


// Session Recoverer

module.factory('sessionRecoverer', ['$q', '$injector', function($q,$injector){
    var sessionRecoverer = {
        responseError:function(response){
            // session has expired
            if(response.status == 419){
                var SessionService = $injector.get('SessionService'),
                    $http = $injector.get('$http'),
                    deferred = $q.defer()
                    // Create a new session (recover the session)
                    // We use login method that logs the user in using the current credentials and
                    // returns a promise
                    SessionService.login().then(deferred.resolve, deferred.reject)

                    // When the session recovered, make same backend call again and chain the request
                    return deferred.promise.then(function(){
                        return $http(response.config)
                    })
            }
            return $q.reject(response)
        }
    }
    return sessionRecoverer
}])

module.config(['$httpProvider', function($httpProvider){
    $httpProvider.interceptors.push('sessionRecoverer')
}])