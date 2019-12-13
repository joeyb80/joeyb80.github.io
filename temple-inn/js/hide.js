var storage = window.sessionStorage;
var button = document.querySelector(".button");
var json = "/temple-inn/js/temple.json";

document.getElementById("info").style.display = "none";
document.getElementById("infoP").style.display = "none";
document.getElementById("infoM").style.display = "none";
document.getElementById("infoB").style.display = "none";


fetchTempleData(json);



function unHide() {
    var x = document.getElementById("info");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("buttonV").innerHTML="Click to hide details &#8593;";
    } else {
      x.style.display = "none";
      document.getElementById("buttonV").innerHTML="Click to show details &#8595;";
    }
  }

  function unHideP() {
    var x = document.getElementById("infoP");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("buttonP").innerHTML="Click to hide details &#8593;";
    } else {
      x.style.display = "none";
      document.getElementById("buttonP").innerHTML="Click to show details &#8595;";
    }
  }
  function unHideM() {
    var x = document.getElementById("infoM");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("buttonM").innerHTML="Click to hide details &#8593;";
    } else {
      x.style.display = "none";
      document.getElementById("buttonM").innerHTML="Click to show details &#8595;";
    }
  }
  function unHideB() {
    var x = document.getElementById("infoB");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("buttonB").innerHTML="Click to hide details &#8593;";
    } else {
      x.style.display = "none";
      document.getElementById("buttonB").innerHTML="Click to show details &#8595;";
    }
  }






function fetchTempleData(json){

   
    
    fetch(json)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new ERROR('Network response was not OK.');
        })
        .then(function (data) {
            // Check the data object that was retrieved
            console.log(data);
            
            // data is the full JavaScript object, but we only want the preston part
            // shorten the variable and focus only on the data we want to reduce typing
           

            
          //Vernal Temple storage-------------------------------------------/
          const clothing = data.Vernal.services.clothing;
          storage.setItem("Clothing", clothing);
          const cafe = data.Vernal.services.cafeteria;
          storage.setItem("Cafe", cafe);
          const patron = data.Vernal.services.patron;
          storage.setItem("Patron", patron);
          const distribution = data.Vernal.services.distribution;
          storage.setItem("Distribution", distribution);
          const address = data.Vernal.contact.address;
          storage.setItem("Address", address);
          const phone = data.Vernal.contact.phoneNumber;
          storage.setItem("Phone number", phone);
          const history = data.Vernal.history.text;
          storage.setItem("History", history);
          const ordinance = data.Vernal.ordinance.schedule;
          storage.setItem("Ordinance schedule", ordinance);
          const closure = data.Vernal.closure.schedule[1] + ", " + data.Vernal.closure.schedule[1] + ", " + data.Vernal.closure.schedule[2] + ", " +
          data.Vernal.closure.schedule[3] + ", " + data.Vernal.closure.schedule[4] + ", " + data.Vernal.closure.schedule[5] + ", " +
          data.Vernal.closure.schedule[6] + ", " + data.Vernal.closure.schedule[7] + ", " + data.Vernal.closure.schedule[8] + ", " +
          data.Vernal.closure.schedule[9] + ", " + data.Vernal.closure.schedule[10] + ", " + data.Vernal.closure.schedule[11];
          storage.setItem("Closure Schedule", closure);
        
           

            //Palmyra Temple storage-------------------------------------------/
            const clothingp = data.Palmyra.services.clothing;
            storage.setItem("ClothingP", clothingp);
            const cafep = data.Palmyra.services.cafeteria;
            storage.setItem("CafeP", cafep);
            const patronp = data.Palmyra.services.patron;
            storage.setItem("PatronP", patronp);
            const distributionp = data.Palmyra.services.distribution;
            storage.setItem("DistributionP", distributionp);
            const addressp = data.Palmyra.contact.address;
            storage.setItem("AddressP", addressp);
            const phonep = data.Palmyra.contact.phoneNumber;
            storage.setItem("Phone numberP", phonep);
            const historyp = data.Palmyra.history.text;
            storage.setItem("HistoryP", historyp);
            const ordinancep = data.Palmyra.ordinance.schedule;
            storage.setItem("Ordinance scheduleP", ordinancep);
            const closurep = data.Palmyra.closure.schedule[1] + ", " + data.Palmyra.closure.schedule[1] + ", " + data.Palmyra.closure.schedule[2] + ", " +
            data.Palmyra.closure.schedule[3] + ", " + data.Palmyra.closure.schedule[4] + ", " + data.Palmyra.closure.schedule[5] + ", " +
            data.Palmyra.closure.schedule[6] + ", " + data.Palmyra.closure.schedule[7] + ", " + data.Palmyra.closure.schedule[8] + ", " +
            data.Palmyra.closure.schedule[9] + ", " + data.Palmyra.closure.schedule[10];
            storage.setItem("Closure ScheduleP", closurep);




               //Manhattan Temple storage-------------------------------------------/
               const clothingm = data.Manhattan.services.clothing;
               storage.setItem("ClothingM", clothingm);
               const cafem = data.Manhattan.services.cafeteria;
               storage.setItem("CafeM", cafem);
               const patronm = data.Manhattan.services.patron;
               storage.setItem("PatronM", patronm);
               const distributionm = data.Manhattan.services.distribution;
               storage.setItem("DistributionM", distributionm);
               const addressm = data.Manhattan.contact.address;
               storage.setItem("AddressM", addressm);
               const phonem = data.Manhattan.contact.phoneNumber;
               storage.setItem("Phone numberM", phonem);
               const historym = data.Manhattan.history.text;
               storage.setItem("HistoryM", historym);
               const ordinancem = data.Manhattan.ordinance.schedule;
               storage.setItem("Ordinance scheduleM", ordinancem);
               const closurem = data.Manhattan.closure.schedule[1] + ", " + data.Palmyra.closure.schedule[1] + ", " + data.Palmyra.closure.schedule[2] + ", " +
               data.Palmyra.closure.schedule[3] + ", " + data.Palmyra.closure.schedule[4] + ", " + data.Palmyra.closure.schedule[5] + ", " +
               data.Palmyra.closure.schedule[6] + ", " + data.Palmyra.closure.schedule[7] + ", " + data.Palmyra.closure.schedule[8] + ", " +
               data.Palmyra.closure.schedule[9] + ", " + data.Palmyra.closure.schedule[10];
               storage.setItem("Closure ScheduleM", closurem);




                 //Bountiful Temple storage-------------------------------------------/
                 const clothingb = data.Bountiful.services.clothing;
                 storage.setItem("ClothingB", clothingb);
                 const cafeb = data.Bountiful.services.cafeteria;
                 storage.setItem("CafeB", cafeb);
                 const patronb = data.Bountiful.services.patron;
                 storage.setItem("PatronB", patronb);
                 const distributionb = data.Bountiful.services.distribution;
                 storage.setItem("DistributionB", distributionb);
                 const addressb = data.Bountiful.contact.address;
                 storage.setItem("AddressB", addressb);
                 const phoneb = data.Bountiful.contact.phoneNumber;
                 storage.setItem("Phone numberB", phoneb);
                 const historyb = data.Bountiful.history.text;
                 storage.setItem("HistoryB", historyb);
                 const ordinanceb = data.Bountiful.ordinance.schedule;
                 storage.setItem("Ordinance scheduleB", ordinanceb);
                 const closureb = data.Bountiful.closure.schedule[1] + ", " + data.Bountiful.closure.schedule[1] + ", " + data.Bountiful.closure.schedule[2] + ", " +
                 data.Bountiful.closure.schedule[3] + ", " + data.Bountiful.closure.schedule[4] + ", " + data.Bountiful.closure.schedule[5] + ", " +
                 data.Bountiful.closure.schedule[6] + ", " + data.Bountiful.closure.schedule[7] + ", " + data.Bountiful.closure.schedule[8] + ", " +
                 data.Bountiful.closure.schedule[9] + ", " + data.Bountiful.closure.schedule[10] + ", " + data.Bountiful.closure.schedule[11] + ", " + data.Bountiful.closure.schedule[12]
                 + ", " + data.Bountiful.closure.schedule[13] + ", " + data.Bountiful.closure.schedule[14];
                 storage.setItem("Closure ScheduleB", closureb);
            
            buildPage();
            
        })
        .catch(function (error) {
            console.log('There was a fetch problem: ', error.message);
            statusContainer.innerHTML = 'Sorry, the data could not be processed.';
        })
        
}



function buildPage(){

    /*******Vernal******************************/
    let address = document.querySelector('#addressV');
    address.innerHTML = "Address: " + storage.getItem('Address');
    let phone = document.querySelector('#phoneV');
    phone.innerHTML = "Phone number: " + storage.getItem('Phone number');
    let rental = document.querySelector('#rentalV');
    rental.innerHTML = storage.getItem('Clothing');
    let cafe = document.querySelector('#cafeV');
    cafe.innerHTML = storage.getItem('Cafe');
    let patron = document.querySelector('#patronV');
    patron.innerHTML = storage.getItem('Patron');
    let distribution = document.querySelector('#distributionV');
    distribution.innerHTML = storage.getItem('Distribution');
    let history = document.querySelector('#historyV');
    history.innerHTML = storage.getItem('History');
    let ordinance = document.querySelector('#ordinanceV');
    ordinance.innerHTML = storage.getItem('Ordinance schedule');
    let closure = document.querySelector('#closureV');
    closure.innerHTML = storage.getItem('Closure Schedule');



    /********Palmyra*****************************/
    let addressp = document.querySelector('#addressP');
    addressp.innerHTML = "Address: " + storage.getItem('AddressP');
    let phonep = document.querySelector('#phoneP');
    phonep.innerHTML = "Phone number: " + storage.getItem('Phone numberP');
    let rentalp = document.querySelector('#rentalP');
    rentalp.innerHTML = storage.getItem('ClothingP');
    let cafep = document.querySelector('#cafeP');
    cafep.innerHTML = storage.getItem('CafeP');
    let patronp = document.querySelector('#patronP');
    patronp.innerHTML = storage.getItem('PatronP');
    let distributionp = document.querySelector('#distributionP');
    distributionp.innerHTML = storage.getItem('DistributionP');
    
    document.querySelector('#historyP').innerHTML = storage.getItem('HistoryP');

    let ordinancep = document.querySelector('#ordinanceP');
    ordinancep.innerHTML = storage.getItem('Ordinance scheduleP');
    let closurep = document.querySelector('#closureP');
    closurep.innerHTML = storage.getItem('Closure ScheduleP');
}





/************Manhattan**********************/
document.querySelector('#addressM').innerHTML = storage.getItem('AddressM');
document.querySelector('#phoneM').innerHTML = storage.getItem('PhoneM');
document.querySelector('#rentalM').innerHTML = storage.getItem('RentalM');
document.querySelector('#cafeM').innerHTML = storage.getItem('CafeM');
document.querySelector('#patronM').innerHTML = storage.getItem('PatronM');
document.querySelector('#distributionM').innerHTML = storage.getItem('DistributionM');
document.querySelector('#historyM').innerHTML = storage.getItem('HistoryM');
document.querySelector('#ordinanceM').innerHTML = storage.getItem('Ordinance scheduleM');
document.querySelector('#closureM').innerHTML = storage.getItem('Closure ScheduleM');





/************Bountiful**********************/
document.querySelector('#addressB').innerHTML = storage.getItem('AddressB');
document.querySelector('#phoneB').innerHTML = storage.getItem('PhoneB');
document.querySelector('#rentalB').innerHTML = storage.getItem('RentalB');
document.querySelector('#cafeB').innerHTML = storage.getItem('CafeB');
document.querySelector('#patronB').innerHTML = storage.getItem('PatronB');
document.querySelector('#distributionB').innerHTML = storage.getItem('DistributionB');
document.querySelector('#historyB').innerHTML = storage.getItem('HistoryB');
document.querySelector('#ordinanceB').innerHTML = storage.getItem('Ordinance scheduleB');
document.querySelector('#closureB').innerHTML = storage.getItem('Closure ScheduleB');