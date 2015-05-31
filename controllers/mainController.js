var app = angular.module('parseQ');

app.controller('mainCtrl', function($scope, parseService){

	$scope.test = 'Works';

	$scope.postData = function(newQuestion){
		parseService.postQuestion(newQuestion).then(function(){
			$scope.getParseData();
		});
		// $scope.newQuestion = ''
	};

	$scope.getParseData = function(){
		parseService.getData().then(function(results){
			$scope.questions = results.data.results
			console.log(results.data.results)
		});
	};

	$scope.getParseData();

	$scope.changeStatus = function(object){
		console.log(object)
		object.status = 'yellow'
		parseService.updateData(object)
	};

});