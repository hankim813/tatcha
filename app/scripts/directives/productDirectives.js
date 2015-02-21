angular
	.module('tatchaApp')

	.directive('product', [function () {
		return {
			restrict: 'E',
			controller: 'CatalogueController',
			controllerAs: 'ctlg',
			scope: {
				image_url: '=image',
				name: '=name',
				short_description: '=summary',
				description: '=description'
			},
			bindToController: true,
			templateUrl: 'views/product.html',
			link: function (scope, ele, attrs, ctrl) {
				ele.find('#next').on('click', function () {
					ctrl.nextProduct();
					scope.$apply();
				});

				ele.find('#prev').on('click', function () {
					ctrl.prevProduct();
					scope.$apply();
				})
			}
		}
	}]);