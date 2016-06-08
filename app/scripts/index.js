/**
 * Created by wy33082 on 2016/6/6.
 */
/*
 var sixRealmsApp = angular.module('sixRealmsApp', ['ngRoute']);
 function menu_route($routeProvider) {
 $routeProvider.
 when('blank-page', {templateUrl:'views/main/blank-page.html',controller:'blankController'});
 };
 sixRealmsApp.config(menu_route);

 sixRealmsApp.controller('blankController',function($scope){

 });
 sixRealmsApp.controller('menuController',function($scope){

 });*/
/*
 var sixRealmsApp = angular.module('sixRealmsApp', ['ngRoute'])
 .controller('menuController', function($scope) {
 })
 .config(function($routeProvider, $locationProvider) {
 $routeProvider
 .when('/blank-page', {
 templateUrl: 'views/main/blank-page.html',
 controller: 'blankController'
 });
 // configure html5
 //$locationProvider.html5Mode(true);
 });

 sixRealmsApp.controller('blankController',function($scope){

 });*/

$(function(){
    $("#logout").click(function(){
        $("#logoutModal").modal("show");
    });
});

angular.module('sixRealmsApp', ['ui.router'])
    .controller('menuController',function($scope){

    })
    .config(function($stateProvider) {
        $stateProvider
            .state('config-manage', {
                url: '/config-manage',
                templateUrl: 'views/main/config-manage.html',
                controller: function($scope){

                }
            })
            .state('black-white-list', {
            url: '/black-white-list',
            templateUrl: 'views/main/black-white-list.html',
            controller: function($scope){

            }
        })
    });