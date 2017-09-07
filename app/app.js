"use strict";

// registering the app
// first parameter is the name of the app
// second parameter array for projects dependencies;
const app = angular.module("mushrooms", ["ngRoute"]);

app.config($routeProvider => {

    // .when is a method on routeProvider
    // that take's the current url (in the browser)
    // as a string and a second parameter, which is a object
    // specifying which template to display and which controller to instantiate
    // this needs to be name we gave the controller when we registered it.
    $routeProvider
        .when('/', {
            templateUrl: 'partials/mushrooms.html',
            controller: 'mushroomCtrl'
      })
        // whenever the url does not correspond to any of these preconfigure paths
        // default to the home page
        .otherwise('/');

});

