(function(){

  var brand = angular.module('brand',[]);

  //directive for amazon ses status details
  brand.directive('amazonStatus',function(){
    return{
      restrict:'E',
      templateUrl:'../templates/amazonses.html'
    }

  });
  //Controller for pulling in Amazon SES status details
  brand.controller('BrandController',['$http',function($http){
    var amazon = this;
    amazon.ses = [ ];//initialize before page load;

    $http.get('common/ses.json').success(function(data){
      amazon.ses = data;
      //console.dir(data);
    });
  }]);

  brand.config(function($stateProvider){
    $stateProvider.state('brand',{
      url:'/',
      views: {
        'brand@':{
          controller:'BrandController as brandCtrl',
          templateUrl:'brand/brand.html'
        },
      controllerAs: 'brandCtrl'
      }
    });
  });


})();
