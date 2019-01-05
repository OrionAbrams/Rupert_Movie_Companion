
// var whatAsking = "filmsComingSoon/?n=10"
// var queryURL = "https://cors-anywhere.herokuapp.com/https://api-gate2.movieglu.com/" + whatAsking

// var userPosition
// navigator.geolocation.getCurrentPosition(function(position) {

//     userPosition = position.coords.latitude.toFixed(3) + "; " + position.coords.longitude.toFixed(3)
//     console.log(position.coords.latitude)
//     console.log(position.coords.longitude)
//     console.log(userPosition)
//     movieCall(userPosition)
//   });

//   function movieCall(userPosition){
// $.ajax({
//     url: queryURL,
//     method: "GET",
//     dataType: "json",
//     headers: {
//         'api-version': "v200",
//         'authorization': "Basic QlVTSTpyVzRYWG9UWE1rRUk=",
//         'x-api-key': "f3qzMeA36w6Saoxh90qaC8eIGX0kjJCgyysC3Uph",
//         'device-datetime': "2018-11-27T13:26:30.147Z",
//         'geolocation': "" + userPosition + "",
//         'territory': "US",
//         'client': "BUSI"
//     }
// }).then(function(response) {
//     console.log(response)
// });

// }
