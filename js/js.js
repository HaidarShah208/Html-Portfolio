let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-content');

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link')
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active');
}


//side menue
let s=document.getElementById('menue');
function openmenue(){
    s.style.left='0px',
    s.style.top='0px'
}
function closemenue(){
    s.style.left='-220px'
}


// Add click event listener to navbar list items on small screens
if (window.innerWidth <= 767) {
    const navItems = document.querySelectorAll("nav ul li");
  
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Hide the navbar by adding a CSS class
        document.querySelector("nav ul").classList.add("hide");
      });
    });
  }
  

