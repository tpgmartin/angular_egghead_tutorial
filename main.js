var myApp = angular.module('myApp', []);
myApp.factory('Data', function() { // Name service 'Data'
    return {message: "Hello World!"}
})

myApp.filter('reverse', function (Data) {
  return function (text) {
    return text.split("").reverse().join("") + Data.message;
  }
})

function FirstCtrl($scope, Data){
  $scope.data = Data;
}

function SecondCtrl($scope, Data){
  $scope.data = Data;

  $scope.reversedMessage = function (message) {
    return message.split("").reverse().join("");
  }
}