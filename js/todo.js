var app = angular.module('todoList',[]);

app.controller('todoCtrl',['$scope', function($scope) {
	
	$scope.targets = ['sethu','bose','soman'];
	
	$scope.addTask = function() {
		
		$scope.targets.push($scope.task);
		$scope.task ='';
	};
}]);
