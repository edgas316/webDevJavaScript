app.controller('MainCtrl', function($scope){
	$scope.title = 'Some Title'
});

app.controller('MainCtrl', function(){
	this.title = 'Some Title'
})


// Controllers as Classes
// JS "Classes"
var myClass = function(){
	this.title = 'Class Title'
}

var myInstance = new myClass()

// Usage of controller as

// <div ng-controller="MainCtrl as main">
// 		Main Controller doesn't exist, we get the 'main' instance only
// 		{{main.title}}
// </div>

// Nested Scope
// <div ng-controller="MainCtrl as main">
//   {{ main.title }}
//   <div ng-controller="AnotherCtrl as another">
//     Scope title: {{ another.title }}
//     Parent title: {{ main.title }}
//     <div ng-controller="YetAnotherCtrl as yet">
//       Scope title: {{ yet.title }}
//       Parent title: {{ another.title }}
//       Parent parent title: {{ main.title }}
//     </div>
//   </div>
// </div>

// you can use $scope for all other spesial things 
app.controller('MainCtrl', function($scope){
	this.title = 'Some Title'
	this.user = {
		name:"",
		lastname:"",
		age:0,
		address:""
	}
	$scope.$on('someEvent', function(e, data){
		console.log(data)
	})

	//using $watch and pointing to the right "this"
	$scope.$watch(angular.bind(this, function(){
		return this.title; // 'this' is the 'this' above!!
	}),function(newVal, oldVal){
		// here we will pickup changes to newVal and oldVal
	})	
})

// using in dirrective 
app.dirrective('myDirrective', function(){
	return{
		rstrict:'EA',
		replace:true,
		scope:true,
		template:[].join(''),
		controllerAs:'',
		controller:function(){},
		link:function(){}
	}
})

// $routProvider
app.config(function($routProvider){
	$routProvider
	.when('/', {
		templateUrl:'view/main.html',
		controllerAs:'',
		controller:''
	})
	.otherwhise({
		redirectTo:'/'
	})
})

