'use strict';

angular.module('wwwApp')
  .controller('MainCtrl', function ($scope, $resource, $http) {

  	//var awesomeThingResource = $resource('/api/awesomeThing/:awesomeThingId');
  	$http.get('/api/awesomeThings').success(function (awesomeThing) {
  		$scope.awesomeThings.push(awesomeThing);
  	});

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
