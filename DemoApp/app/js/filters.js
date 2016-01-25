'use strict';

eventsApp.filter('durations', function(){
    return function(duration){
        switch(duration){
            case 1: return "Half Hour";
            case 2: return "1 Hour";
            case 3: return "Half Day";
            case 4: return "Full Day";
        }
    }
})

eventsApp.filter('levels', function(){
    return function(level){
        switch(level){
            case "Introductory": return "https://rogueamoeba.com/fission/images/featureicons/easy.png";
            case "Intermediate": return "http://www.summertown.co.uk/media/t/step2.gif";
            case "Advanced": return "https://pilatesology-pilatesologyinc.netdna-ssl.com/wp-content/themes/pilatesology/images/fast.gif";
        }
    }
})