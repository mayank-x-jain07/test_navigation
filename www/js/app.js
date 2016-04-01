var app = angular.module('ionicApp', ['ionic','ngAutocomplete','ngCordova'])

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')



 $stateProvider.state('home', {
  url: '/home',
  views: {
    home: {
      templateUrl: 'templates/hello.html'
    }
  }
})

   $stateProvider.state('maps', {
  url: '/maps',
  views: {
    maps: {
      templateUrl: 'templates/rider_settings.html'
    }
  }
})

$stateProvider.state('help', {
  url: '/help',
  views: {
    help: {
      templateUrl: 'templates/help.html'
    }
  }
})

})

