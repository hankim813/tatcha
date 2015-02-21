'use strict';

/**
 * @ngdoc overview
 * @name tatchaApp
 * @description
 * # tatchaApp
 *
 * Main module of the application.
 */
angular
  .module('tatchaApp', [
    'ngAnimate',
    'ngTouch',
    'ui.router',
    'ngStorage'
  ])

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  	$urlRouterProvider.otherwise('');

  	$stateProvider

  	.state('home', {
  		url: '',
  		resolve: {
  			products: function (catalogueService, catalogueFactory) {
  				return catalogueService.products || catalogueFactory.fetchAll();
  			}
  		},
  		templateUrl: 'views/home.html',
  		controller: 'CatalogueController',
  		controllerAs: 'ctlg'
  	});

  }]);
