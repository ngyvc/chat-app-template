/* Handler for the display of names entered in the DB
	Uses the var itemRaw which comes json-encoded from the DB through select_names.php
*/

var select_users = function () {
  //This is the backend file connecting to the DB
  const php = "php/select_users.php";

  //EXCLUDE CURRENT USER FROM LIST
  let formData = new FormData();
  formData.append("user_current", window.localStorage.getItem("user_current"));

  //Connect to the PHP

  //The HTML container for the list of names
  // let container = document.getElementById('listContainer');
  //Clean up the html
  // container.innerHTML = "";

  /* HERE Setup your own code for the list of users
	The list must include the user’s aliases
	When you click one alias, you need to do two things:
	1. Set the id of the partner user in the local storage
	2. Navigate to the convo.html file
  */
};
if (window.localStorage.getItem("user_current") == null) {
  window.location.href = "index.html";
} else {
  select_users();
}
