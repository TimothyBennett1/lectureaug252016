angular.module("bcApp")
.controller("bcCtrl", function($scope, bcSvc, $stateParams) {
  $scope.getData = bcSvc.bcData;
})
.directive("bcDirective", function(bcSvc) {
  return {
    scope: {
      img: "=",
      name: "=",
      story: "=",
      data: "="
    },
    restrict: "E",
    templateUrl: "js/views/stories-dir-tmpl/stories-dir-tmpl.html",
    link: function(scope) {
      // scope.getData = bcSvc.bcData;
      // console.log("name");
      // return scope.getData;
    }
  };
});
