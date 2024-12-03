// Hover buttons
function mOver(obj) {
    obj.innerHTML = "Thank You!!  We are grateful for the donation of whatever you can afford to give."
  }
  
  function mOut(obj) {
    obj.innerHTML = "Hey Here!!!!"
  }
  let mybutton = document.getElementById("myBtn");

// scroll button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Div Navigation
function showDiv() {
  var x = document.getElementsByClassName("img3");
      if ( x.click === true ){
        document.getElementsByClassName("video").style.display = "block";
      }
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
}

document.getElementById("registerButton").addEventListener("click", function () {
  alert("Thank you for considering organ donation! Visit your local registry to sign up.");
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


// Validation form
function validateForm() {
  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;
  let bloodGroup = document.getElementById('blood-group').value;
  let weight = document.getElementById('weight').value;
  let medicalHistory = document.getElementById('medical-history').value;
  let allergies = document.getElementById('allergies').value;
  let errorMessage = document.getElementById('error-message');

  // For limits
  errorMessage.textContent = '';

  
  if (name.length < 3) {
    alert('Name must be at least 3 characters long!');
    return false;
  }
  

  if (age < 1 || isNaN(age)) {
    alert('"Please enter a valid age!"');
    return false;
  }
}
