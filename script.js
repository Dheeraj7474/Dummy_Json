// Step 1: Retrieving HTML Elements
const btn = document.getElementById('btn');
const input = document.getElementById('Number');
const firstNameCell = document.getElementById('First name');
const lastNameCell = document.getElementById('Last name');
const educationCell = document.getElementById('Education');
const emailCell = document.getElementById('Email');
const phoneNumberCell = document.getElementById('Phone Number');
const cityCell = document.getElementById('City');
// Step 2: Define Function to Update Table
function fetchAndDisplayUserData(userNumber) {
  fetch(`https://dummyjson.com/users/${userNumber}`)
    .then(response =>response.json())
    .then(data => {
      firstNameCell.innerText = data.firstName;
      lastNameCell.innerText = data.lastName;
      educationCell.innerText = data.university;
      emailCell.innerText = data.email;
      phoneNumberCell.innerText = data.phone ;
      cityCell.innerText = data.address.city ;
    })
}
// Step 3: Add Event Listener to the Button
btn.addEventListener('click', () => {
    let userNumber = input.value.trim();
    if(userNumber<101 && userNumber>0){
        document.getElementById("valid").innerHTML=" "
        fetchAndDisplayUserData(userNumber);
    }
    else{
        document.getElementById("valid").innerHTML="Please enter a valid user number bw 1 to 100" ;
        document.getElementById("valid").style.color="red"
        firstNameCell.innerText = "NA";
        lastNameCell.innerText = "NA";
        educationCell.innerText = "NA";
        emailCell.innerText = "NA";
        phoneNumberCell.innerText = "NA" ;
        cityCell.innerText = "NA" ;
    }
});
