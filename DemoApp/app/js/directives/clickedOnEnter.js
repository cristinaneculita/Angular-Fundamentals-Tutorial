'use strict'

eventsApp.directive('clickedOnEnter', function(){
   return {
       restrict:'A',
       link: function(scope, element, attrs, controller){
            element.keyup(function(event){
                if(event.keyCode == 13){
                angular.element("#saveButton").click();
            }
         })
       }
   }
});