(function(){
  //app is the global variable for the entire application.
  var app = angular.module('news', ['ui.router','brand']);

  //application level controller for initializing the application.
  app.controller('AppController',['$state','$log', function($state,$log){
    $log.info('Initializing Application...');//logging initialization.
    $state.go('home');//initialize the application and load the 'home' abstract state.
  }]);

  //temporary controller for pulling json data.
  app.controller('NavController',['$http', function($http){
    var globals = this;
    globals.navigation = [];

    $http.get('common/globals.json').success(function(data){
      globals.navigation = data;//assign fetched data
    });
  }]);

  //application run for $state and $stateParams
  app.run(
      [          '$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {

          // It's very handy to add references to $state and $stateParams to the $rootScope
          // so that you can access them from any scope within your applications.For example,
          // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
          // to active whenever 'contacts.list' or one of its decendents is active.
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
        }
      ]
  )

  //application routes and states definition
  app.config(function($stateProvider,$urlRouterProvider){


    //'home' abstract state for application layout.
    $stateProvider.state('home',{
        abstract: true,
        controller: 'NavController'
    });
    //route state for the brand module
    $stateProvider.state('brand',{
      url:'/brand',
      templateUrl:'brand/brand.html',
      controller:'BrandController as brandCtrl'
    });
    $stateProvider.state('brand.list',{
      url:'/list',
      parent:'brand',
      templateUrl:'brand/brand.list.html',
      controller: 'BrandListController as brandListCtrl'
    });
    $stateProvider.state('brand.create',{
      url:'/create',
      parent:'brand',
      templateUrl:'brand/brand.create.html',
      controller: 'BrandCreateController as brandCreateCtrl'
    });
    $stateProvider.state('brand.edit',{
      url:'/edit',
      parent:'brand',
      templateUrl:'brand/brand.edit.html',
      controller: 'BrandEditController as brandEditCtrl'
    });
    // route state for campaign module
    $stateProvider.state('campaign',{
      url:'/campaign',
      templateUrl:'campaign/campaign.html'
    });
    $stateProvider.state('campaign.list',{
      url:'/list',
      parent: 'campaign',
      templateUrl:'campaign/campaign.list.html',
      controller: 'CampaignListController as campaignListCtrl'
    });
    $stateProvider.state('campaign.create',{
      url:'/create',
      parent: 'campaign',
      templateUrl:'campaign/campaign.create.html',
      controller: 'CampaignCreateController as campaignCreateCtrl'
    });
    $stateProvider.state('campaign.edit',{
      url:'/edit',
      parent: 'campaign',
      templateUrl:'campaign/campaign.edit.html',
      controller: 'CampaignEditController as campaignEditCtrl'
    });
    //$urlRouterProvider.otherwise('/');Brand Create and Edit forms loaded through respective states
  });


})();
