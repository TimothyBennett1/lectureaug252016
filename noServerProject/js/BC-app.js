angular.module("bcApp", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: 'js/views/home/home-tmpl.html',
        controller: "mainCtrl"
      })
      .state('stories', {
        url: "/stories",
        templateUrl: "./js/views/stories/stories-tmpl.html",
        controller: "bcCtrl"
      })
      .state('info', {
        url: "/info",
        templateUrl: "js/views/info/info-tmpl.html",
        controller: "infoCtrl"
      });
});
