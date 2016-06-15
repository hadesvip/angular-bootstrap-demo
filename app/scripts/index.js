'use strict';

angular.module('sixRealmsApp', ['ui.router'])
    .controller('menuController', function ($scope) {

    })
    .config(function ($stateProvider) {
        $stateProvider
            .state('config-manage', {
                url: '/config-manage',
                templateUrl: 'views/main/config-manage.html',
                controller: function ($scope) {

                }
            })
            .state('black-white-list', {
                url: '/black-white-list',
                templateUrl: 'views/main/black-white-list.html',
                controller: function ($scope) {

                }
            })
            .state('engine-rules', {
                url: '/engine-rules',
                templateUrl: 'views/main/engine-rules.html',
                controller: function ($scope) {

                }
            })
            .state('user-roles', {
                url: '/user-roles',
                templateUrl: 'views/main/user-manage.html',
                controller: function ($scope) {

                }
            })
    });