/**
 * 入口
 */
'use strict';

angular.module('sixRealmsApp', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('config-manage', {
                url: '/config-manage',
                templateUrl: 'views/main/config-manage.html',
                controller: 'configCtrl'
            })
            .state('black-white-list', {
                url: '/black-white-list',
                templateUrl: 'views/main/black-white-list.html',
                controller: 'blackWhiteListCtrl'
            })
            .state('engine-rules', {
                url: '/engine-rules',
                templateUrl: 'views/main/engine-rules.html',
                controller: 'engineRulesCtrl'
            })
            .state('user-manage', {
                url: '/user-manage',
                templateUrl: 'views/main/user-manage.html',
                controller: 'userManageCtrl'
            })
    });
/*
angular.bootstrap(document, ['sixRealmsApp']);*/
