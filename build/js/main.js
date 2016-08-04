(function() {
    'use strict';

    angular.module('shop', []);

})();

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

    function InventoryController(LocalStorService) {
        var that = this;

        this.tax = tax;
        this.getPrice = getPrice;

        this.inventory = LocalStorService.getAll();

        this.newItem = {};
        this.addItem = function addItem (item) {
            that.newItem = LocalStorService.saveItem(item);
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

(function() {
    'use strict';

    angular.module('shop')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['user'];

    // window.addEventListener('load', function findLoggedInUser(){
    //     localStorage.removeItem('inventory');
    // });

    function LoginController(UserService) {
        var that = this;

        this.username = null;

        this.user = {};

        this.logUser = function logUser(username) {
            that.user = UserService.login(username);
            that.username = ''; 
        };


    }

})();

(function() {
    'use strict';

    angular.module('shop')
        .factory('localStor', LocalStorService);

    function LocalStorService() {
        return {
            getAll: getAll,
            saveItem: saveItem,
            // updateAll: updateAll
        };
    }

    var inventory;
    var newItemId = 89275;

    function getAll() {
        inventory = JSON.parse(localStorage.getItem('inventory'));
        return inventory;
    }

    function saveItem(item) {
        if (!item || !item.name) {
            return null;
        }
        if (!item.quantity) {
            item.quantity = 0;
        }
        if (!item.price) {
            item.price = 0;
        }
        if (!item.discount) {
            item.discount = 0;
        }
        if(!item.color) {
            item.color = 'n/a';
        }

        var data = {
            id: newItemId,
            name: item.name,
            price: item.price || 0,
            quantity: item.quantity || 0,
            color: item.color || 'n/a',
            discount: item.discount || 0
        };

        inventory.push(data);

        localStorage.setItem('inventory', angular.toJson(inventory));

        newItemId++;

        return data;
    }

})();

// [
//     { 'id': 2957, 'name': 'widget', 'price': 32, 'quantity': 203, 'color': 'red', 'discount': 31 },
//     { 'id': 89274, 'name': 'golf club', 'price': 98, 'quantity': 10, 'color': 'black', 'discount': 0 },
//     { 'id': 64, 'name': 'iPhone', 'price': 499, 'quantity': 2, 'color': 'white', 'discount': 0 },
//     { 'id': 87363, 'name': 'bonzai tree', 'price': 76, 'quantity': 2, 'color': 'green', 'discount': 0 },
//     { 'id': 1736, 'name': 'towel', 'price': 55, 'quantity': 30, 'color': 'brown', 'discount': 10 },
//     { 'id': 4836, 'name': 'dog bed', 'price': 99, 'quantity': 10, 'color': 'beige', 'discount': 50 },
//     { 'id': 829, 'name': 'waste basket', 'price': 15, 'quantity': 40, 'color': 'silver', 'discount': 0 },
//     { 'id': 46, 'name': 'guitar', 'price': 899, 'quantity': 3, 'color': 'blue', 'discount': 150 },
//     { 'id': 17456, 'name': 'matcha tea', 'price': 42, 'quantity': 4, 'color': 'green', 'discount': 11 },
//     { 'id': 3292, 'name': 'enlightenment', 'price': 99999, 'quantity': 1, 'color': 'red', 'discount': 0 },
//     { 'id': 533, 'name': 'eggs', 'price': 5, 'quantity': 12, 'color': 'brown', 'discount': 1 },
//     { 'id': 683, 'name': 'pillow', 'price': 27, 'quantity': 10, 'color': 'black', 'discount': 12 }
// ]

(function() {

    'use strict';

    angular.module('shop')
        .factory('user', UserService);

    function UserService() {
        return {
            login: login,
            loggedIn: loggedIn
        };
    }

    var users = JSON.parse(localStorage.getItem('users'));

    function login(username) {
        var foundUser = null;

        if (!username || typeof(username) !== 'string') {
            return foundUser;
        }

        users.forEach(function getUser(user) {
            if (user.username === username) {
                foundUser = user;
            }
        });

        foundUser.loggedIn = true;
        foundUser.loginTime = new Date().getTime();

        console.log(foundUser);
        return foundUser;
    }

    function loggedIn(username) {
        var loggedUser = null;

        if (!username) {
            return null;
        }

        users.forEach(function findLoggedUser(user) {
            if (user.loggedIn === true) {
                loggedUser = user;
            }
        });

        return loggedUser;
    }

})();

// [{username: 'sm873x', name: 'stella', loginTime: '', loggedIn: false }]

//# sourceMappingURL=main.js.map