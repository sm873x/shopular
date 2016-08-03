(function() {
    'use strict';

    angular.module('shop')
        .controller('InventoryController', InventoryController);

    var tax = 0.0575;

    InventoryController.$inject = ['localStor'];

    function getPrice(item) {
        return (item.price - item.discount) * (1 + tax);
    }

    function InventoryController(theLocalStorService) {
        var that = this;

        this.orderByField = 'price';
        this.reverseSort = false;

        this.tax = tax;
        this.getPrice = getPrice;

        this.inventory = theLocalStorService.getAll();

        this.newItem = {};

        this.addItem = function addItem (item) {
            console.log(item);
            that.newItem = theLocalStorService.saveItem(item);
            console.log(that.newItem);
        };

        // that.newItem = {};

    }


})();
