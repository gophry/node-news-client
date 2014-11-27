(function(){

  var brand = angular.module('brand',[]);

  brand.controller('BrandController',['$http',function($http){
    var amazon = this;
    amazon.ses = [ ];//initialize before page load;

    $http.get('common/ses.json').success(function(data){
      amazon.ses = data;
      console.dir(data);
      angular.forEach(data, function(value,key){

        var a = key.split('_');
        a.charAt(0).toUpperCase;
        console.log(a);
      });

      });

  }]);

  brand.config(function($stateProvider){
    $stateProvider.state('brand',{
      url:'/',
      views: {
        'brand@':{
          controller:'BrandController',
          templateUrl:'brand/brand.html'
        }
      }
    });
  });


})();
