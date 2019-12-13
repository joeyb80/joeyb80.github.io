display()
function display(){
    document.querySelector('#fullName').innerHTML  = "Full Name: " + storage.getItem('firstName') + " " + storage.getItem('Last Name: ');
    document.querySelector('#templeLoc').innerHTML = "Chosen Temple: " + storage.getItem('Temple: ');
    document.querySelector('#stay').innerHTML = "Days staying: " + storage.getItem('Check in Date: ') + " - " + storage.getItem('Check out Date: ');
    document.querySelector('#roomStyle').innerHTML = "Type of Room: " + storage.getItem('Room Style: ');
    document.querySelector('#numberOfRooms').innerHTML = "Number of Rooms: " + storage.getItem('Number of Rooms: ');
    document.querySelector('#comments').innerHTML = "Comments: " + storage.getItem('Comments: ');
    
    }