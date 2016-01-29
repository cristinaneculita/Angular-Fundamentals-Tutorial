'use strict'

eventsApp.directive('repeatX', function(){
   return {
        // link: function(scope, element, attrs, controller){
        //     for(var i=0;i<Number(attrs.repeatX)-1;i++){
        //         element.after($compile(element.clone().attr('repeat-x',0)))(scope);
        //     }
        // } doesn't work for me
        
        compile:function(element, attrs){
              for(var i=0;i<Number(attrs.repeatX)-1;i++){
                 element.after(element.clone().attr('repeat-x',0));
              }
                //this works
              return function(scope, element, attrs, controller){
                  attrs.$observe('text', function(newValue){
                      if(newValue==='000'){
                        element.css('color','red');
                   }
              });
              //this works, too
        }
      }
   }
});