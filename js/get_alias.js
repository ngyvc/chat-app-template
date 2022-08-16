/* This function lets you get the alias of a user from their id and dump it in an element
 */

var get_alias = function (id, e) {
  //Here id is the id of the user you want to get
  // and e is the id of the HTML you want to put the alias in

  //This is the backend file connecting to the DB
  const php = "php/get_alias.php";

  //Handles the server call to the PHP file and the data we get back

  let formData = new FormData();
  formData.append("id", id);

  //Connect to the PHP
  // Set the alias to the element
  // document.getElementById(e).innerHTML = "?";
};
