var aplicacion = angular.module('angular', ['ngAnimate'], '[ui.router]'); 



//ui-router

aplicacion.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  //$urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('ruta1', {
      url: "/estamosRuta1",
      templateUrl: "Rutas/Ruta1.html"
    })
    .state('ruta2', {
      url: "/estamosRuta2",
      templateUrl: "Rutas/Ruta2.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    });
});