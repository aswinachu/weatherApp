'use strict';

/* Controllers */

angular.module('openWeatherApp.controllers', [])

  .controller('OpenWeatherCtrl',
    ['$scope','openWeatherMap','exampleLocations','ISO3166',
      function($scope,openWeatherMap,exampleLocations,ISO3166) {

    $scope.message = '';
    $scope.hasState = '';
    $scope.exampleLocations = exampleLocations;
    $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

    $scope.forecast = openWeatherMap.queryForecastDaily({
      location: exampleLocations[ 0 ]
    });

    $scope.getForecastByLocation = function() {

      if ($scope.location == '' || $scope.location == undefined) {
        $scope.hasState = 'has-warning';
        $scope.message = 'Please provide a location';
        return;
      }

      $scope.hasState = 'has-success';

      $scope.forecast = openWeatherMap.queryForecastDaily({
        location: $scope.location
      });
    };

    $scope.setLocation = function(loc) {
      $scope.location = loc;
      $scope.getForecastByLocation();
    };



  }])
