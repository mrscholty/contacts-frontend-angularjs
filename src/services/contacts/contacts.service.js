'use strict';
angular.module('contacts-service')
    .factory('ContactsService', ['$http', function ($http) {

        var apiURL = 'http://localhost:3000/api/contacts';

        var foo = function () {
            return 'foo';
        };

        var getAll = function () {
            return $http({
                method: 'GET',
                url: apiURL
            }).then(function (result) {
                return result.data
            });
        };

        return {
            foo: foo,
            getAll: getAll
        }
    }

    ]);