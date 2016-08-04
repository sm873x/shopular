(function() {

    'use strict';

    angular.module('shop')
        .factory('user', UserService);

    function UserService() {
        return {
            login: login,
            // loggedIn: loggedIn
        };
    }

    var users = [{id: 1, username: 'sm873x', name: 'stella', loginTime: '', loggedIn: false }];

    var nextId = 1;

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

        foundUser.id = nextId;
        foundUser.loggedIn = true;
        foundUser.loginTime = new Date().getTime();

        nextId++;
        console.log(foundUser);
        return foundUser;
    }


})();

// ]
