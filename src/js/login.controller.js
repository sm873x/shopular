(function() {
    'use strict';

    angular.module('shop')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['user'];

    function LoginController(UserService) {
        var that = this;

        this.username = null;

        this.user = {};

        this.logUser = function logUser(username) {
            that.user = UserService.login(username);
        };



    }

})();
