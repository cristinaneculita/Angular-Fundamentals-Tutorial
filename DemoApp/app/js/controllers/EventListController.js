'use strict';

eventsApp.controller('EventListController', 
    function EventListController($scope, $location, eventData, $route){
       // $scope.events = eventData.getAllEvents();
        $scope.events = $route.current.locals.events;
    });
    