(function(){

  var campaign = angular.module('campaign',[]);

  // Module BRAND Create Controller.
  campaign.controller('CampaignCreateController', function(){

  });

  // Module BRAND Read Controller.
  campaign.controller('CampaignListController',['$http', function($http){
    var settings = this;
    settings.campaign = [  ];

    //temporary get request TODO: CampaignModel: create a service factory/model
    $http.get('campaign/campaignModel.json').success(function(data){
      settings.campaign = data;//assign fetched data
    });
  }]);

  // Module CAMPAIGN Edit Controller.
  campaign.controller('CampaignUpdate', function(){

  });
  // Module CAMPAIGN Delete(archive) Controller.
  campaign.controller('CampaignDelete', function(){

  });



})();
