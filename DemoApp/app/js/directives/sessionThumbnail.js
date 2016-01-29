'use strict'

eventsApp.directive('sessionThumbnail', function(){
   return {
       restrict:'E',
       replace: true,
       templateUrl:'templates/directives/sessionThumbnail.html',
       scope:{
           session:"=mySession"
       },
       controller: "EventController"
            
   }
});