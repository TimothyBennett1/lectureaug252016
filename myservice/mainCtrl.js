angular.module('myApp')
.controller('mainController', function($scope, mainService) {
  $scope.username = getUsername();

})
