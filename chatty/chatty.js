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

var clearButton = document.getElementById("clear-button");
var messageBoard = document.getElementById("messages");


var messageField = document.getElementById("message-field");
messageField.addEventListener("keydown", function whenEnter  (keypress) {
  if (keypress.keyCode === 13) {
    var message = messageField.value;
    printMessage(message);

    function printMessage (message) {
      if (message === "") {
        messageBoard.innerHTML = "<div class='user-message'><span id='utc-date'>" + displayCurrentDay +"</span><span id='null-message'>You entered no message.<button id='delete'>Delete</button><hr></div>" + messageBoard.innerHTML;
      } else {messageBoard.innerHTML = "<div class='user-message'><span id='utc-date'>" + displayCurrentDay +"</span>" + message + "<button id='delete'>Delete</button><hr></div>" + messageBoard.innerHTML;} 
      limitPosts();
    }


    clearInput();

    function clearInput() {
      messageField.value = "";
    } 
  
  }


});

// CLEAR WHOLE MESSAGE BOX

clearButton.addEventListener("click", function () {
  messageBoard.innerHTML = "<p class='initial-message'>End of messages.</p>";
});

// DISABLED CLEAR MESSAGE BOARD BUTTON 



clearButton.setAttribute("disabled", true);

messageField.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    document.getElementById("clear-button").removeAttribute("disabled");
  }

});

clearButton.addEventListener("click", function (o) {
  document.getElementById("clear-button").setAttribute("disabled", true);
  console.log("event for clear", o);
});



// NOW TO DELETE MESSAGE

document.querySelector("body").addEventListener("click", function (event) {
  if (event.target.id === "delete") {
    deletePost(event);

  }
});

var deletePost = function(localPost) {
  localPost.target.parentNode.remove(localPost);
}


// KEEPING MESSAGE LIST UNDER A CERTAIN NUM OF POSTS

function limitPosts () {
var numberOfMessages = document.getElementsByClassName("user-message").length;
 if (document.getElementsByClassName("user-message").length > 21) {
   console.log("length of messages", numberOfMessages);
   messageBoard.childNodes.item(21).remove();
 }
};
console.log("limitPosts", limitPosts);

// STYLING CHANGES


var webpage = document.getElementById("everything");


// TO MAKE LARGE TEXT TOGGLE


var largeTextCheck = document.getElementById("large-text");
largeTextCheck.addEventListener("click", largify);

function largify () {
  webpage.classList.toggle("large-text");
}

// TO MAKE DARK THEME TOGGLE

var darkThemeCheck = document.getElementById("dark-theme");
darkThemeCheck.addEventListener("click", darkify);

function darkify () {
  webpage.classList.toggle("dark-theme");
}

