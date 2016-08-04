(function() {

    'use strict';

    angular.module('shop')
        .factory('user', UserService);

    function UserService() {
        return {
            login: login,
            // getUser: getUser
        };
    }

    var users = [{id: 1, username: 'sm873x', name: 'stella', loginTime: '' }];

    // var nextId = 1;
    //id: 1, username: sm873x, name: 'stella', loginTime: ''

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

        return foundUser;
    }


})();

// ]
