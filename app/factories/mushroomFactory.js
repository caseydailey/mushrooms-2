"use strict";

// again, registering this with app
// giving it a name. this must be consistent with what we inject to the controller
// and passing a function, whose parameters are its dependencies
app.factory("mushroomFactory", function($q, $http){

    // use $http to make and xhr to get mushrooms.json
    // because this is aync, we'll use $q to wrap the call in a promise 
    // that we can chain on
    const getMushrooms = function(){
        console.log("you called?");
        return $q((resolve, reject)=>{
            $http.get('mushrooms.json')
                .then(data => resolve(data))
                .catch(error => reject(error));

        });
    };




    // return here is like module.exports in browserify
    // if you want to use a method from here in your controller,
    // you must return it
    return {getMushrooms};

});