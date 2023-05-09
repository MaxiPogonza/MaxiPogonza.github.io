// ------------- MENU ABOUT ---------------------

const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname) {
  for (tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ------------------ SCROLL -----------------

window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;
  if (scrollPosition > 300) {
      document.getElementById('scroll-top-btn').style.display = 'block';
  } else {
      document.getElementById('scroll-top-btn').style.display = 'none';
  }
});

document.getElementById('scroll-top-btn').addEventListener('click', function() {
  window.scrollTo(0, 0);
});


// ------------ MENU RESPONSIVE ----------------------------------


const sidemenu = document.getElementById('sidemenu');
function openmenu () {
  sidemenu.style.right = "0";
}
function closemenu () {
  sidemenu.style.right = "-200px";
}

        

      

