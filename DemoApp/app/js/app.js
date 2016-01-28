'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource', 'ngCookies', 'ngRoute'])

    .config(function($routeProvider,$locationProvider){
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller: 'EditEventController'
            }
                 
        )
        $routeProvider.when('/events',
            {
                templateUrl:'templates/EventList.html',
                controller: 'EventListController',
                resolve: {
                    events: function(eventData){
                        return eventData.getAllEvents().$promise;
                    }
                }
            }
                 
        )
        $routeProvider.when('/event/:eventId',
            {
                templateUrl:'templates/EventDetails.html',
                controller: 'EventController',
                resolve: {
                    event: function($route, eventData){
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            }
                 
        )
         $routeProvider.when('/editProfile',
            {
                templateUrl:'templates/EditProfile.html',
                controller: 'EditProfileController'
            }
                 
        )
          $routeProvider.when('/About',
            {
                template:'This is just a great example of routing'
            }
                 
        )
        
        
      
        $locationProvider.html5Mode(true);
    });
   
   

