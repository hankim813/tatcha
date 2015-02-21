'use strict';

angular
	.module('tatchaApp')

  .controller('CatalogueController', ['catalogueService', function (catalogueService) {
  	var vm = this;

  	// Show short description initially
  	vm.toggleDesc = true;

  	// Fetch products & images
  	var products = catalogueService.products;

  	// Store product IDs for easier pagination
  	var productIds = Object.keys(products);
  	var currentId = productIds[0];
  	var maxIndex = productIds.length - 1;
  	

  	// Set the first product
  	var currentIndex = 0;
  	vm.product = products[currentId];
  	pruneHtmlTags();

  	// Pagination functions
  	vm.nextProduct = nextProduct;
  	vm.prevProduct = prevProduct;

  	// Show next product
  	function nextProduct () {
  		if (currentIndex + 1 <= maxIndex) {
  			currentIndex ++;
  		} else {
  			currentIndex = 0;
  		}
			updateProduct();
  		pruneHtmlTags();
  	};

  	// Show previous
  	function prevProduct () {
  		if (currentIndex - 1 >= 0) {
  			currentIndex --;
  		} else {
  			currentIndex = productIds.length - 1;
  		}
			updateProduct();
  		pruneHtmlTags();
  	};

  	// Replace image on product #25 with cropped version
  	function checkWeirdImage (id) {
  		if (id === '25') {
  			vm.product.image_url = 'http://i.imgur.com/n4bDW1u.png';
  		}
  	};

  	// Remove all html tags
  	function pruneHtmlTags () {
  		var pattern = /(<a.*?>)|(<\/?\w+ ?\/?>|(&nbsp;))/g;
  		var colon = /:/g;
  		vm.product.short_description = vm.product.short_description.replace(pattern, "");
  		vm.product.description = vm.product.description.replace(pattern, "");
  		vm.product.short_description = vm.product.short_description.replace(colon, ": ");
  		vm.product.description = vm.product.description.replace(colon, ": ");
  	};

  	// Update all the index and id of current product
  	function updateProduct () {
			currentId = productIds[currentIndex];
  		vm.product = products[currentId];
  		checkWeirdImage(vm.product.entity_id);
  	};

  }]);

