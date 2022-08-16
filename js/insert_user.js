/* Handler to add a new account, or sign up
	Calls insert_user.php to dump user in DB
*/

var insert_user = function () {
  //The form in the HTML
  const addForm = document.getElementById("signupForm");

  //When the user submits the form (clicks the button)
  addForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //This is the backend file inserting in the DB
    const php = "php/insert_user.php";

    //This is what we send to the server for the PHP file
    let formData = new FormData(addForm);

    /* Here you can set it up like you did for the To Do app 
    where creating an account automatically logs in the new user
    by the DB returning the ID of the new user
    See in the PHP

    Otherwise, this will replace the form with a message */
    // addForm.innerHTML = "Account created";
  });
};
insert_user();
