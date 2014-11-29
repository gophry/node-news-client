(function(){

  var brand = angular.module('brand',[]);

  // Module BRAND Create Controller.
  brand.controller('BrandCreateController', function(){

  });

  // Module BRAND Read Controller.
  brand.controller('BrandListController',['$http', function($http){
    var settings = this;
    settings.brands = [  ];
    settings.ses = [ ];

    //temporary get request TODO: BrandModel: create a service factory/model
    $http.get('brand/brandModel.json').success(function(data){
      settings.brands = data;//assign fetched data
    });
    //temporary get request TODO: AmazonStatusModel: create a service factory/model
    $http.get('common/ses.json').success(function(data){
      settings.ses = data;//assign fetched data
    });

  }]);

  // Module BRAND Edit Controller.
  brand.controller('BrandUpdate', function(){

  });
  // Module BRAND Delete(archive) Controller.
  brand.controller('BrandDelete', function(){

  });



})();
