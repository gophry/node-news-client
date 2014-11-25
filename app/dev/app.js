(function(){

  // @companyName,@loggeduser === fetched from global json object name.
  var loggedUser,companyName;

  var app = angular.module('news', []);

  //define a controller for navigation contents.
  app.controller('NavController',['$http', function($http){
    var globals = this;
    globals.navigation = [ ];//initialize before page load;

    $http.get('common/globals.json').success(function(data){
      globals.navigation = data;//assign fetched data
    });

  }]);

  //
})();
