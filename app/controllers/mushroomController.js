"use strict";

// register the controller
// first param is the name of the controller
// we'll use this name in app.js to bind this controller to a particular view
// 
// second parameter is an anonymous function whose arguments are this modules dependencies
// this is called 'injection' and it's what we were doing with 'require' in browserify
// here we're injecting the factory by the name we give it when we register it. not the file name.
app.controller("mushroomCtrl", function($scope, mushroomFactory){

    // using mushroomFactory, gets the mushroom data
    // and binds it to $scope
    const showMushrooms = function(){
        mushroomFactory.getMushrooms()
            .then(data => console.log("got the data:", data))
            .catch(error => console.log(error));
    };

    showMushrooms();

});