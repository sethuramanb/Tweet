var myApp = angular.module('myApp',['ngRoute'])

.controller('NavigationCtrl', ['$scope', function($scope) {
	
	$scope.menus = [{name:'User', template:'/user'},
	                  {name:'Account', template:'/account'},
	                  {name:'Loan', template:'/loan'},
	                  {name:'Logout', template:'/logout'},
	                ];
}])

.controller('UserController', ['$scope', function($scope) {
	$scope.firstName ="sethu";
	$scope.lastName ="bose";
}])

.controller('AccountController', ['$scope', function($scope) {
	$scope.accountName ="HDFC";
	$scope.accountId ="01249873471233";
}])

.config(function($routeProvider, $locationProvider) {
	  $routeProvider
	   .when('/user', {
	    templateUrl: 'views/user.html',
	    controller: 'UserController'
	  })
	  .when('/account', {
	    templateUrl: 'views/account.html',
	    controller: 'AccountController'
	  })
	   .when('/loan', {
	    templateUrl: 'views/loan.html',
	    controller: 'UserController'
	  })
	   .when('/logout', {
	    templateUrl: 'views/logout.html',
	    controller: 'UserController'
	  });
	  $locationProvider.html5Mode(true);
});