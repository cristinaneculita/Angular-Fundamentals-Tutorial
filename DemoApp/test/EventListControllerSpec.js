'use strict';

describe('EventListController', function(){
    var $controllerContructor, scope, mockEventData;
    beforeEach(module("eventsApp"));
    beforeEach(inject(function($controller, $rootScope){
        $controllerContructor =$controller;
        scope = $rootScope.$new();
        mockEventData = sinon.stub({getAllEvents: function(){}})
    }));
    it('schould set the scope events to the result of eventData.getAllEvents', function(){
         var mockEvents ={};
         mockeEventData.getAllEvents.returns(mockEvents);
         var ctrl = $controllerContructor("EventListController", {'$scope': scope, 'eventData': mockEventData} )
         expect(scope.events).toBe(mockEvents);
        })
   
});