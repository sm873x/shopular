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
