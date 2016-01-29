'use strict'

eventsApp.directive('upvote', function($compile){
   return {
       restrict:'E',
       templateUrl:'templates/directives/upvote.html',
       scope:{
           upvote: "&",
           downvote: "&",
           count: "="
       }
      
   }
});