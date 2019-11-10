function validateEmail() {
  var email = document.getElementById("email").value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var test = re.test(String(email).toLowerCase());

  if (!test) {
    alert('Please enter a valid email address.');

    return false;
  }

  return true;
}

function validateEmailNoRegex() {
  var email = document.getElementById("email").value;

  if (email == '') {
    alert("Empty email address.");
    document.getElementById("email").focus();

    return false;
  }

  return true;
}


function validateCountry() {
  var country = document.getElementById("country").value;

  if (country == "") {
    alert("Please select a country.");

    document.getElementById("country").focus();

    return false;
  }


  return true;
}

function validateImage() {
  var avatarImage = document.getElementById("avatarImage").value;

  if (avatarImage == '') {
    alert("Empty file.");

    document.getElementById("avatarImage").focus();

    return false;
  }

  return true;
}

function validateDescription() {
  var description = document.getElementById("description").value;

  if (description == '') {
    alert("Empty description.");

    document.getElementById("country").focus();
    return false;
  }

  return true;
}

function validateForm() {

  if (!validateCountry()) {
    return false;
  }

  if (!validateEmail()) {
    return false;
  }


  if (!validateDescription()) {
    return false;
  }

  return true;
}
