angular.module('myApp')
.service('mainService', function() {
  this.username = "Timothy";

  this.getUsername = function() {
    return this.username;
  };
})
