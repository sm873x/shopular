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
