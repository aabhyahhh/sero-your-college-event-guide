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

//fyndit-events-grid
const events = [
  {
      title: "Jaipur Hacker House Lab",
      date: "10 August, 24 • 11:30 AM",
      location: "Venue Name",
      image: "image1.png",
      details: {
          img: "image1.png",
          title: "Jaipur Hacker House Lab",
          date: "10 August, 24 • 11:30 AM",
          location: "Venue Name",
          description: "A deep dive into hacker culture, tools, and the latest tech innovations.",
          pictures: ["event-pic1.jpg", "event-pic2.jpg", "event-pic3.jpg"]
      }
  },
  {
      title: "Pool party at XYZ Resort",
      date: "15 August, 24 • 4:00 PM",
      location: "XYZ Resort",
      image: "image2.png",
      details: {
          img: "image2.png",
          title: "Pool party at XYZ Resort",
          date: "15 August, 24 • 4:00 PM",
          location: "XYZ Resort",
          description: "Enjoy the ultimate pool party experience at XYZ Resort with music, drinks, and fun.",
          pictures: ["event-pic1.jpg", "event-pic2.jpg", "event-pic3.jpg", "event-pic4.jpg"]
      }
  },
  {
      title: "Movie night at ABC Cinema",
      date: "22 August, 24 • 7:00 PM",
      location: "ABC Cinema",
      image: "image3.png",
      details: {
          img: "image3.png",
          title: "Movie night at ABC Cinema",
          date: "22 August, 24 • 7:00 PM",
          location: "ABC Cinema",
          description: "Watch the latest blockbuster movies with friends at ABC Cinema.",
          pictures: ["event-pic1.jpg", "event-pic2.jpg"]
      }
  },
  {
      title: "Game night at PQR Cafe",
      date: "22 August, 24 • 6:30 PM",
      location: "PQR Cafe",
      image: "image4.png",
      details: {
          img: "image4.png",
          title: "Game night at PQR Cafe",
          date: "22 August, 24 • 6:30 PM",
          location: "PQR Cafe",
          description: "Test your gaming skills at our fun and competitive game night.",
          pictures: ["event-pic1.jpg", "event-pic2.jpg", "event-pic3.jpg"]
      }
  },
  {
      title: "Music concert at DEF Stadium",
      date: "25 August, 24 • 8:00 PM",
      location: "DEF Stadium",
      image: "image5.png",
      details: {
          img: "image5.png",
          title: "Music concert at DEF Stadium",
          date: "25 August, 24 • 8:00 PM",
          location: "DEF Stadium",
          description: "Enjoy a night of live music with popular bands and artists.",
          pictures: ["event-pic1.jpg", "event-pic2.jpg", "event-pic3.jpg", "event-pic4.jpg"]
      }
  },
  {
      title: "Art exhibition at GHI Gallery",
      date: "30 August, 24 • 11:00 AM",
      location: "GHI Gallery",
      image: "image6.png",
      details: {
          img: "image6.png",
          title: "Art exhibition at GHI Gallery",
          date: "30 August, 24 • 11:00 AM",
          location: "GHI Gallery",
          description: "Explore the latest artworks and installations by renowned artists.",
          pictures: ["event-pic1.jpg", "event-pic2.jpg"]
      }
  }
];

let currentPage = 0;
const eventsPerPage = 4;

function renderEvents() {
  const startIndex = currentPage * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const eventsToShow = events.slice(startIndex, endIndex);

  const eventsListDiv = document.getElementById('events-list');
  eventsListDiv.innerHTML = '';

  eventsToShow.forEach((event, index) => {
      const eventCard = document.createElement('div');
      eventCard.className = 'event-card';
      eventCard.innerHTML = `
          <img src="${event.image}" alt="${event.title}">
          <div class="event-info">
              <div class="event-title">${event.title}</div>
              <div class="event-date">${event.date}</div>
              <div class="event-location">${event.location}</div>
          </div>
      `;
      eventCard.addEventListener('click', () => displayEventDetails(event.details));
      eventsListDiv.appendChild(eventCard);
  });
}

function displayEventDetails(details) {
  const eventDetailsDiv = document.getElementById('event-details');
  eventDetailsDiv.innerHTML = `
      <img src="${details.img}" alt="${details.title}">
      <h2>${details.title}</h2>
      <p><strong>${details.date}</strong></p>
      <p><strong>Location:</strong> ${details.location}</p>
      <p>${details.description}</p>
      <a href="event.html" class="book-button">Book Tickets</a>
      <div class="event-pictures" id="event-pictures">
          ${details.pictures.map(pic => `<img src="${pic}" alt="${details.title} Picture">`).join('')}
      </div>
  `;
}

document.getElementById('next-btn').addEventListener('click', () => {
  if ((currentPage + 1) * eventsPerPage < events.length) {
      currentPage++;
      renderEvents();
  }
});

document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentPage > 0) {
      currentPage--;
      renderEvents();
  }
});

// Initial render
renderEvents();