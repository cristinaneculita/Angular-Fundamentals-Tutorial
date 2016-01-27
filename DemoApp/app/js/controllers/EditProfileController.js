'use strict';

eventsApp.controller('EditProfileController', 
    function EditProfileController($scope,gravatarUrlBuilder, userData,$cookieStore){
       $scope.user={};
       
       $scope.getGravatarUrl = function(email) {
           return gravatarUrlBuilder.buildGravatarUrl(email);
       }
       $scope.cancelEdit = function(){
            window.location  = "/EventDetails.html";
       }
       
       $scope.saveProfile=function(user,profileForm){
           if(profileForm.$valid){
                 user.upvotes =[];
                 userData.save(user);  
                 $cookieStore.remove('currentUser');
                 $cookieStore.put('currentUser', user);
            }
       }
    });