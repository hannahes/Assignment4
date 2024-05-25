// Function to display the alert when the page first loads
function testscript() {
  alert("WELCOME TO GREEN THUMB MINING COMPANY  - Newsletter Signup.");
}

// function to make sure all the fields are populated
function validateFields() {
  var firstName = document.getElementById("firstNameInput").value.trim();
  var lastName = document.getElementById("lastNameInput").value.trim();
  var email = document.getElementById("emailInput").value.trim();

  // check to see if any fields are empty
  if (firstName === "" || lastName === "" || email === "") {
    alert("First Name, Last Name and Email fields cannot be blank.");
    return false;
  }
  return true;
}

//  submit the form data
function submitForm() {
  if (validateFields()) {
    document.getElementById("signupForm").submit();
  }
}

// event listener for submitting the form data with the signup button
document.getElementById("signupButton").addEventListener("click", submitForm);
console.log("form has been submitted");

//  open a new tab when signup is clicked
function openNewTab() {
  // Open a new tab
  var newTab = window.open("https://theuselessweb.com/", "_blank");
  console.log("A break in your marking, for a bit of fun. Not my design");

  // TEST - Check if new tab was successfully opened
  if (newTab) {
    console.log("New tab opened successfully");
  } else {
    console.error(
      "Failed to open new tab. Please check your browser settings."
    );
  }
}

// Add an event listener to the signup button to open a new tab when clicked
document.getElementById("signupButton").addEventListener("click", openNewTab);

// clear all data with the reset button
document.getElementById("resetButton").addEventListener("click", function () {
  console.log("reset button clicked");
  // text area clear
  document.getElementById("textarea").value = "";
  // clear input fields data
  document.getElementById("firstNameInput").value = "";
  document.getElementById("lastNameInput").value = "";
  document.getElementById("emailInput").value = "";

  // uncheck radio buttons
  document.getElementById("age15-25").checked = false;
  document.getElementById("age26-35").checked = false;
  document.getElementById("age36-45").checked = false;
  document.getElementById("age46-55").checked = false;
  document.getElementById("ageOver56").checked = false;

  //uncheck the checkboxes
  document.getElementById("checkbox1").checked = false;
  document.getElementById("checkbox2").checked = false;
  document.getElementById("checkbox3").checked = false;
  document.getElementById("checkbox4").checked = false;
  document.getElementById("checkbox5").checked = false;
});
