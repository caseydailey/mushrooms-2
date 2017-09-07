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
            // bind the data to $scope as the property 'shrooms'
            // we can now refer to 'shrooms' in our template and angular knows it's this array of objects
            // so we can ng-repeat over it.
            .then(data => $scope.shrooms = data)
            .catch(error => console.log(error));
    };

    showMushrooms();

});