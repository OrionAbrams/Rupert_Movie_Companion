// Goal is to get Rupert's response and the user's response up on the screen in bubbles

// Capture each response by pulling HTML vals
// Hold in local var
// Push to firebase
// on child added append each to screen aligned left or right


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDwS2hEPeK4F_tSxyopsXhO3zkdIqemHgM",
    authDomain: "rupert-5dbf9.firebaseapp.com",
    databaseURL: "https://rupert-5dbf9.firebaseio.com",
    projectId: "rupert-5dbf9",
    storageBucket: "rupert-5dbf9.appspot.com",
    messagingSenderId: "177869694757"
  };
  firebase.initializeApp(config);

// Variable to reference the database
var database = firebase.database();

// Everytime user enters anything, store it in an obj and put in Firebase
("#rupert-button").on("click", function (event) {
    event.preventDefault();

    // Grab the user input
    var userMessage = $("rupert-input").val().trim();

    // Put it in local variable
    var message = {
        text: userMessage,
        speaker: "user",
    };

    // push to firebase
    database.ref().push(message);

    // test
    console.log(userMessage.text);
    console.log(userMessage.speaker);

    // Do we need to clear?
    $("#rupert-input").val("")
    // or
    $("#rupert-input").empty();
});

// Everytime Rupert responds, store it in an obj and push to firebase
("#rupert-answer").on("click", function (event) {
    event.preventDefault();
// if rupert didnt say anthing, exit out
// if he did, grab ruperts response
    if ($("#rupert-input").val().trim() === ""){
        return
      }
      else {
        var rupMessage = $("rupert-input").val().trim();

        $('#ruAnswer').empty();

    // put it in local variable
    var message = {
        text: rupMessage,
        speaker: "rupert",
    };

    // push to firebase
    database.ref().push(message);

    // test
    console.log(rupMessage.text);
    console.log(rupMessage.speaker);
}
});

//child added will show html with message everytime an obj is added to firebase
//we need to get Ruperts aligned left and user's aligned right
database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());
    // debugger;
    // Store everything into a variable.
     if (childSnapshot.val().message.speaker === "user"){
        //append message to bubble on left side
     }
     if (childSnapshot.val().message.speaker === "rupert"){
        //  append message to bubble on right side
     }

}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});