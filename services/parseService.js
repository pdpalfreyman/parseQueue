var app = angular.module('parseQ');

app.service('parseService', function($http){

	this.postQuestion = function(newQuestion){
		return $http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/question',
			data: {text: newQuestion, status: 'red'}
		});
	}

	this.getData = function(){
		return $http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/question?order=-createdAt'

		});
	}

	this.updateData = function(object){
		return $http({
			method: 'PUT',
			url: 'https://api.parse.com/1/classes/question/' + object.objectId,
			data: object

		});
	}

});