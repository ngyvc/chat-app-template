/* Handler for log in
	Checks with the DB through login.php
	Sets the localstorage values for alias and id
*/

const login = function () {
  //The form in the HTML
  const loginForm = document.getElementById("loginForm");

  //When the user submits the form (clicks the button)
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //This is the backend file inserting in the DB
    const php = "php/login.php";

    //This is what we send to the server for the PHP file
    let formData = new FormData(loginForm);

    //Connect to the PHP

    //Set the local storage
    // window.localStorage.setItem("user_current", itemRaw[0].id);

    //Navigate to the list of users
    // window.location.href = "list.html";
  });
};
if (window.localStorage.getItem("user_current") == null) {
  login();
} else {
  window.location.href = "list.html";
}
