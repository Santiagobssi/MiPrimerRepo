var app = angular.module('Usuarios',[]);

app.controller('Usuario',['$scope','$http',function($scope,$http){
               $scope.saludo='hola';
               $scope.nombre='Santiago';
                $scope.saludo=function(){
                return "Saludos"+$scope.nombre;
                }
$http({
  method: 'GET',
  url: 'http://localhost:1337/Usuarios'
}).then(function successCallback(DATOS) {
    console.log(DATOS);
        $scope.usuarios=DATOS.data;
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(ERROR) {
    console.log(ERROR);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

}]);