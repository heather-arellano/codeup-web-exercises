
'use strict';


// //wait
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


//personal token
var url = 'https://api.github.com/users/misomighty/events/public';

var myData = fetch(url, {headers: {'Authorization': 'token 2bf529fd7d01040e43dd3f7c123a418dfbf4ddb8'}});
console.log(myData);

// var myPromise= new Promise( function(resolve, reject){
//     resolve( 'hello');
//     });
myData
    .then(data => data.json())
    .then(jsonData => console.log(jsonData));




