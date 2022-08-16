/* Handler for the display of the conversation
	Uses the var itemRaw which comes json-encoded from the DB through select_messages.php
*/

var select_messages = function () {
  //This is the backend file connecting to the DB
  const php = "php/select_messages.php";

  //Send the users for the conversation to the PHP
  let formData = new FormData();
  formData.append("user_current", window.localStorage.getItem("user_current"));
  formData.append("user_partner", window.localStorage.getItem("user_partner"));

  //Connect to the PHP
  //The HTML container for the list of names
  // let container = document.getElementById('messagesContainer');
  //Clean up the html
  // container.innerHTML = "";

  /* I’ve left the code here because there are many elements to it
	But you need to customize this, and make it work the way you want
	Especially, you need to design the way each message looks: content, timestamp, etc.
	*/
  //Container for each message, for content and for timestamp
  // let messageDIV = document.createElement("div");

  //If the message is from user_current, add a class to it so we can make it look different

  //Insert the values from the DB in the HTML elements

  //Dump the message in the container
  // container.appendChild(messageDIV);
};
if (window.localStorage.getItem("user_current") == null) {
  window.location.href = "index.html";
} else if (window.localStorage.getItem("user_partner") == null) {
  window.location.href = "list.html";
} else {
  select_messages();
}

//Optional automatic refresh of messages, just un comment the block below
/*
let refresh = setInterval(function() {
	select_messages();
},10000); //10 seconds
*/
