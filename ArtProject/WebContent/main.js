/**
 *  Main Angular controller 
 */

var app = angular.module('myApp',[]);

app.controller('HomeController',function($scope){
	$scope.message = 'My Art';
});