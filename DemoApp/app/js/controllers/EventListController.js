'use strict';

eventsApp.controller('EventListController', 
    function EventListController($scope, eventData){
        $scope.events = eventData.getAllEvents();
        //$scope.events = $route.current.locals.events;
    });
    