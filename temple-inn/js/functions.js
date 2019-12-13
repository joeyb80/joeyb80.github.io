//'use strict';
var pageNav = document.querySelector('#page-nav');
var storage = window.sessionStorage;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}



function store(){
    console.log("Im being read");
    storage.setItem("Temple: ", document.querySelector('#temples').value);
    storage.setItem("Check in Date: ", document.querySelector('#check-in-date').value);
    storage.setItem("Check out Date: ", document.querySelector('#check-out-date').value);
    storage.setItem("Room Style: ", document.querySelector('#roomStyle').value);
    storage.setItem("Number of Rooms: ", document.querySelector('#numberOfRooms').value);
    storage.setItem("firstName", document.querySelector('#firstName').value);
    storage.setItem("Last Name: ", document.querySelector('#lastName').value);
    storage.setItem("Email: ", document.querySelector('#email').value);
    storage.setItem("Phone Number: ", document.querySelector('#phone').value);
    storage.setItem("City: ", document.querySelector('#city').value);
    storage.setItem("State: ", document.querySelector('#state').value);
    storage.setItem("Country: ", document.querySelector('#country').value);
    storage.setItem("Comments: ", document.querySelector('#comments').value);
}


function storeContact(){
    console.log("Im being read");
    storage.setItem("firstNameContact: ", document.querySelector('#firstNameC').value);
    storage.setItem("lastNameContact: ", document.querySelector('#lastNameC').value);
    storage.setItem("emailContact: ", document.querySelector('#emailC').value);
    storage.setItem("PhoneNumberContact: ", document.querySelector('#phoneNumberC').value);
    storage.setItem("LocationContact: ", document.querySelector('#locationC').value);
    storage.setItem("ReasonForContact: ", document.querySelector('#reasonForContactC').value);
    storage.setItem("CommentsContact: ", document.querySelector('#commentsC').value);
    
}




