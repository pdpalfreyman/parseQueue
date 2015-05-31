var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
	return {
		request: function (config) {
			config.headers = {'X-Parse-Application-Id': 'B061dyd3iEOBVdl0VbZRo8cCAMpIbC4bloaX9bKZ', 'X-Parse-REST-API-Key': 'MftckWHd8ytsUCzTF4bZX12Zghz5uC4iZQgQYGXK'};
			return config;
		}
	};
});