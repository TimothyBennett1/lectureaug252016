angular.module("bcApp")
.controller("bcCtrl", function($scope, bcSvc, $stateParams) {
  $scope.survivors = bcSvc.bcData;
})
.directive("bcDirective", function() {

});
