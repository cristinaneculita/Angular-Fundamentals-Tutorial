eventsApp.factory('eventData', function($resource){
    var resource = $resource('/data/event/:id', {id: '@id'});
    
    function getEvents(cid, callback){
         resource.get({id:cid})
                .$promise
                    .then(function(event){
                       getEvents(cid+1,callback);
                        })
                    .catch(function(response){
                        callback(cid);
                        });
    }
    
    
    
    return {
        getEvent: function(){
            //return $http({method:'GET', url:'/data/event/1'});
            return resource.get({id:2});
        },
        save: function(event){
  
            getEvents(1, function(returnValue){
                event.id = returnValue;
                return resource.save(event);
            });
            
        }
    }
});