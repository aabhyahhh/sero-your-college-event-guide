//sidebar nav
function showSidebar(){
  const sidebar=document.querySelector('.sidebar')
  sidebar.style.display='flex'
}

function hideSidebar(){
  const sidebar=document.querySelector('.sidebar')
  sidebar.style.display='none'
}


//carousel
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  document.querySelector('.carousel').style.transform = `translateX(-${currentSlide * 25}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});


// responsive tabs
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Trigger click event on the "Overview" tab to display it by default
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.tablink.active').click();
});

// JavaScript for automatic scrolling
const eventPicturesDiv = document.getElementById('event-pictures');

let scrollAmount = 0;
let scrollStep = 1;
const maxScroll = eventPicturesDiv.scrollWidth - eventPicturesDiv.clientWidth;

function scrollPictures() {
    if (scrollAmount >= maxScroll || scrollAmount <= 0) {
        scrollStep = -scrollStep; // Reverse direction
    }

    scrollAmount += scrollStep;
    eventPicturesDiv.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

setInterval(scrollPictures, 30); // Adjust the speed by changing the interval