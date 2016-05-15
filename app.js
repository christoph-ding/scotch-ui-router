var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    // Home state
      .state('home', {
        url: '/home',
        template: 'partial-home.html'
      });
    // About page and multiple named views
      .state('about', 
      // {
      //   url: '',
      //   template: ''
      // }
      );
});
