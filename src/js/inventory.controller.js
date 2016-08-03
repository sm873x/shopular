(function() {
    'use strict';

    angular.module('shop')
        .controller('InventoryController', InventoryController);

    // window.addEventListener('load', function remPrevInventory(){
    //     localStorage.removeItem('inventory');
    // });

    var tax = 0.0575;

    InventoryController.$inject = ['localStor'];

    function getPrice(item) {
        return (item.price - item.discount) * (1 + tax);
    }

    function InventoryController(theLocalStorService) {
        var that = this;

        this.tax = tax;
        this.getPrice = getPrice;

        this.inventory = theLocalStorService.getAll();

        this.newItem = {};
        this.addItem = function addItem (item) {
            that.newItem = theLocalStorService.saveItem(item);
            that.newItem = {};
        };

        this.orderByField = 'price - discount';
        this.reverseSort = false;
        this.sorting = function sorting(orderByField) {
            that.orderByField = orderByField;
            that.reverseSort = !that.reverseSort;
            return that.reverseSort;
        };

    }


})();
