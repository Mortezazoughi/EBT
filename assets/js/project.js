function passwordFunction() {
  document.getElementById('forgotPassLink').innerHTML =
    'Thank you. A link has been sent to your email to reset your username.';
}

function userFunction() {
  document.getElementById('forgotUserLink').innerHTML =
    'Thank you. A link has been sent to your email to reset your password.';
}

function regFunction() {
  document.getElementById('regisConfirmation').innerHTML =
    'Thank You. Registration is complete and added to database.';
}

function loginFunction() {
  var input = document.getElementById('email').value;
  document.getElementById('demo').innerHTML = `the value is ${input}`;
  console.log(input);
}
