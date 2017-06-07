app.factory('dataService', function($http){
	var getWeatherData = function(data,success,err){
		$http({
			method:'GET',
			url:'https://www.google.com/'
		}).
		then(function successCallback(response){
			success(response)
		},
		function errorCallback(err){
			if(err)
				err()
		})
	},

	postSomeData = function(data, success, err){
		console.log('income data', data)
		$http({
			method:'POST',
			url:'https://www.google.com/',
			data:{
				values:{
					'value one':data.name1,
					'value two':data.name2,
					'value three':data.name3
				}
			}
		}).
		then(function successCallback(response){
			success(response)
		},
		function errorCallback(err) {
			if(err)
				err()
		})
	}

})

// usage
app.controller('someController', ['$scope','dataService', function($scope, dataService){
	$scope.data = {
		nameOne:"Edwin", 
		nameTwo:"Marine", 
		nameThree:"David"
	}

	dataService.getWeatherData({
		//data to send if any
	},function(data){
		console.log(data)
	})

	dataService.postSomeData({
		values:{
			name1:$scope.data.nameOne,
			name2:$scope.data.nameTwo,
			name3:$scope.data.nameThree
		}
	},function(data){
		console.log(data)
	})
}])
// GET/POST Responce object
// 
// config:Object
// data:"http://vacuremqa31v:8008/api/arsys/v1/entry/OS3:SYS:SHR:Filter/FLT000000000805"
// headers:(d)
// status:201
// statusText:"Created"
