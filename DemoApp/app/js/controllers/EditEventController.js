'use strict';

eventsApp.controller('EditEventController', 
    function EditEventController($scope,eventData){
        $scope.saveEvent=function(event,newEventForm){
            if(newEventForm.$valid){
                 eventData.save(event);  
                 alert("saved"+event.date);
            }
        };
        $scope.cancelEdit=function(){
            window.location  = "/EventDetails.html";
        }
    });