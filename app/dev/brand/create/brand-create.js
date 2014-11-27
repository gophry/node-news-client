(function(){

  var brandCreate = angular.module('brandCreate',[]);

  brandcreate.config(function($stateProvider){
    $stateProvider.state('brandCreate',{
      url:'/',
      views: {
        'create@':{
          controller:'BrandCreateController as brandCreateCtrl',
          templateUrl:'brand.create.html'
        },
        controllerAs: 'brandCreateCtrl'
      }
    });
  });
})();
