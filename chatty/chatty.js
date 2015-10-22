$(document).ready(function() {


// TIME STAMP

var timeStamp = Math.floor(Date.now() / 1000);
var dt = new Date();
var utcDate = dt.toUTCString();
console.log(utcDate);

var date = new Date;
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hour = date.getHours();

var year = date.getFullYear();
var month = date.getMonth(); // beware: January = 0; February = 1, etc.
var day = date.getDate();

var dayOfWeek = date.getDay(); // Sunday = 0, Monday = 1, etc.
var milliSeconds = date.getMilliseconds();

var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];

var delineatorHour;
if (hour < 12) {
  delineatorHour = "a.m.";
} else {
  hour = hour - 12;
  delineatorHour = "p.m.";
}


var displayCurrentDay = nameOfToday + " " + hour + ":" + minutes + " " + delineatorHour;

console.log(displayCurrentDay);



// GETS USER MESSAGE INTO MESSAGE BOX

var clearButton = $("#clear-button");
var messageBoard = $("#messages");


var messageField = $("#message-field");
messageField.keydown (function whenEnter  (keypress) {
  if (keypress.keyCode === 13) {
    var message = messageField.val();
    printMessage(message);

    function printMessage (message) {
      if (message === "") {
        messageBoard.html("<div class='user-message'><span id='utc-date'>" + displayCurrentDay +"</span><span id='null-message'>You entered no message.<button id='delete'>Delete</button><hr></div>"+ messageBoard.html());
      } else {messageBoard.html("<div class='user-message'><span id='utc-date'>" + displayCurrentDay +"</span>" + message + "<button id='delete'>Delete</button><hr></div>" + messageBoard.html());
    } 
      limitPosts();
    }


    clearInput();

    function clearInput() {
      messageField.val("");
    } 
  
  }


});

// CLEAR WHOLE MESSAGE BOX

// ?? $
clearButton.click(function () {
  messageBoard.html("<p class='initial-message'>End of messages.</p>");
});

// DISABLED CLEAR MESSAGE BOARD BUTTON 



clearButton.attr("disabled", true);

messageField.keyup(function (e) {
  if (e.keyCode === 13) {
    clearButton.removeAttr("disabled");
  }

});

clearButton.click(function (o) {
  clearButton.attr("disabled", true);
  console.log("event for clear", o);
});



// NOW TO DELETE MESSAGE
// ??$
$("body").click(function (event) {
  if (event.target.id === "delete") {
    deletePost(event);

  }
});

var deletePost = function(localPost) {
  localPost.target.parentNode.remove(localPost);
}


// KEEPING MESSAGE LIST UNDER A CERTAIN NUM OF POSTS

function limitPosts () {
var numberOfMessages = $(".user-message").length;
 if (numberOfMessages > 21) {
   console.log("length of messages", numberOfMessages);
//?? $
   messageBoard.childNodes.item(21).remove();
 }
};
console.log("limitPosts", limitPosts);

// STYLING CHANGES


var webpage = $("#everything");


// TO MAKE LARGE TEXT TOGGLE


var largeTextCheck = $("#large-text");
largeTextCheck.click(largify);

function largify () {
  // ??$
  webpage.toggleClass("make-large");
}

// TO MAKE DARK THEME TOGGLE

var darkThemeCheck = $("#dark-theme");
darkThemeCheck.click(darkify);

function darkify () {
  // ??$
  webpage.toggleClass("make-dark");
}

});