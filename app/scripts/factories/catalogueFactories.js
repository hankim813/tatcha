'use strict';


angular
	.module('tatchaApp')

	.factory('catalogueFactory', ['$http', '$q', 'catalogueService', function ($http, $q, catalogueService) {

		function fetchAll () {
			var d = $q.defer();

			$http.get('http://api.tatcha.com/shop/api/rest/products').success(function (response) {
				d.resolve(response);
				catalogueService.products = response;
			}).error(function (error) {
				d.reject(error);
			});

			return d.promise;
		}

		return {
			fetchAll: fetchAll
		}
	}]);