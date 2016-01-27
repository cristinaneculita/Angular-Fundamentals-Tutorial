'use strict';

eventsApp.controller('EventController', 
    function EventController($scope, eventData, $log,$anchorScroll, $cookieStore){
        $scope.snippet='<span style="color:red"> hi there </span>';
        $scope.boolValue = true;
        $scope.mystyle={color:'red'};
        $scope.myclass="blue";
        $scope.buttonDisabled =true;
        eventData.getEvent()
            .$promise
            .then(function(event){
                  populateVotes(event.sessions);
                  $scope.event=event;
                })
            .catch(function(response){});
            
        
        $scope.upVoteSession = function(session){
           modifyCookie(session, 1);
        }
        
    
        function modifyCookie(session, plus){
            var currentUser = $cookieStore.get('currentUser');
            var exists= false;
            if(currentUser==undefined){
                if($cookieStore.get('session'+session.id)==undefined){
                    session.upVoteCount = session.upVoteCount+plus;
                    storeNewVotes(session);
                    $cookieStore.put('session'+session.id,true);
                }
            }
            else{
                currentUser.upvotes.forEach(function(element) {
                    if(element.sessionId==session.id){
                      exists=true;
                    }
                }, this);
                if(exists===false)
                {
                    currentUser.upvotes.push({sessionId: session.id, vote: plus});
                    session.upVoteCount= session.upVoteCount+plus;
                    storeNewVotes(session);
                    $cookieStore.remove('currentUser');
                    $cookieStore.put('currentUser', currentUser);
                }
            }
        }
        
        function storeNewVotes(session){
             var upvotes =  $cookieStore.get('upvotes');
             var exists = false;
             if(upvotes===undefined){
                 upvotes=[];
                 upvotes.push({sessionId: session.id, vote: session.upVoteCount })
             }
             else{
                  upvotes.forEach(function(element) {
                    if(element.sessionId==session.id){
                      exists=true;
                      element.vote = session.upVoteCount;
                    }
                }, this);
                  if(exists===false){
                      upvotes.push({sessionId: session.id, vote: session.upVoteCount })
                  }  
                 
             }
              $cookieStore.remove('upvotes');
              $cookieStore.put('upvotes', upvotes);
             
        }
        
        function populateVotes(sessions){
            sessions.forEach(function(session){
                var currentSessionId = session.id;
                var upvotes =  $cookieStore.get('upvotes');
                
                if(upvotes===undefined){
                   
                }
                else{
                    upvotes.forEach(function(element) {
                        if(element.sessionId==currentSessionId){
                        session.upVoteCount = element.vote;
                        }
                    }, this);
             }
            },this);
        }
        
        $scope.downVoteSession = function(session){
            modifyCookie(session, -1);
        }
        
        $scope.scrollToSession = function(){
            $anchorScroll();
        }
        
    });