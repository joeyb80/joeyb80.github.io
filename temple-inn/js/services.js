document.getElementById("info").style.display = "none";
document.getElementById("servicesImg").style.display = "none";
document.getElementById("infoM").style.display = "none";
function unHideR() {
    var x = document.getElementById("info");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("buttonR").innerHTML="Hide Wedding Reception Information &#8593;";
    } else {
      x.style.display = "none";
      document.getElementById("buttonR").innerHTML="Show Wedding Reception Information &#8595;";
    }
  }

  function unHideM() {
    var x = document.getElementById("infoM");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("buttonM").innerHTML="Hide Full-Time-Temple-Missionary Information &#8593;";
    } else {
      x.style.display = "none";
      document.getElementById("buttonM").innerHTML="Show Full-Time-Temple-Missionary Information &#8595;";
    }
  }

  function unHideP() {
    var x = document.getElementById("servicesImg");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("buttonP").innerHTML="Hide Image   &#8593;";
    } else {
      x.style.display = "none";
      document.getElementById("buttonP").innerHTML="Show Image &#8595;";
    }
  }