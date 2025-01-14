document.getElementById("learnMoreBtn").addEventListener("click", function() {
    alert("Thank you for your interest! More content coming soon.");
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username && email && password) {
        alert("Registration successful!\n\nUsername: " + username + "\nEmail: " + email);
        // Here you can add code to submit the form data to the server
    } else {
        alert("Please fill in all fields.");
    }
});
// Function to show the books section
function showBooks() {
    document.getElementById("books").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("contact").style.display = "none";
}


document.querySelector('nav ul li:nth-child(2) a').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about').style.display = 'block';
    document.getElementById('books').style.display = 'none';
    document.getElementById('services').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
});

document.querySelector('nav ul li:nth-child(3) a').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about').style.display = 'none';
    document.getElementById('books').style.display = 'none';
    document.getElementById('services').style.display = 'block';
    document.getElementById('contact').style.display = 'none';
});

document.querySelector('nav ul li:nth-child(4) a').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about').style.display = 'none';
    document.getElementById('books').style.display = 'none';
    document.getElementById('services').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
});
// Function to show the About section
document.querySelector('nav ul li:nth-child(2) a').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior (scrolling to top)

    // Display the About section and hide others
    document.getElementById('about').style.display = 'block';
    document.getElementById('services').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('books').style.display = 'none'; // Hide books section if needed
});
// Function to handle navigation clicks and show respective sections
document.querySelectorAll('nav ul li a').forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Hide all sections
        document.querySelectorAll('main section').forEach(function(section) {
            section.style.display = 'none';
        });

        // Determine which section to display based on clicked link
        const targetId = this.getAttribute('href').substring(1); // Get id without '#'
        document.getElementById(targetId).style.display = 'block';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Handle contact form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for your message, ' + name + '! We will get back to you soon.');
            // Clear form inputs
            document.getElementById('contactForm').reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Handle live chat button click
    document.querySelector('.live-chat button').addEventListener('click', function() {
        alert('Live chat is currently unavailable. Please leave a message, and we will get back to you as soon as possible.');
    });

    // Handle window resize to adjust map height
    window.addEventListener('resize', function() {
        const mapIframe = document.querySelector('.map-container iframe');
        if (window.innerWidth < 600) {
            mapIframe.style.height = '200px';
        } else {
            mapIframe.style.height = '300px';
        }
    });

    // Initial adjustment of map height based on window size
    const mapIframe = document.querySelector('.map-container iframe');
    if (window.innerWidth < 600) {
        mapIframe.style.height = '200px';
    }
});
// Function to handle navigation clicks and show respective sections
function setupNavigation() {
    const homeButton = document.querySelector('nav ul li:first-child a');
    const aboutLink = document.querySelector('nav ul li:nth-child(2) a');
    const booksLink = document.querySelector('nav ul li:nth-child(3) a');
    const servicesLink = document.querySelector('nav ul li:nth-child(4) a');
    const contactLink = document.querySelector('nav ul li:nth-child(5) a');

    // Clicking home button
    homeButton.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToTop(); // Scroll to top of the page
        
        // Show default section (e.g., 'About')
        document.querySelectorAll('main section').forEach(function(section) {
            section.style.display = 'none';
        });
        document.getElementById('about').style.display = 'block';
    });

    // Clicking about link
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('about').style.display = 'block';
        hideOtherSections('about');
    });

    // Clicking books link
    booksLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('books').style.display = 'block';
        hideOtherSections('books');
    });

    // Clicking services link
    servicesLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('services').style.display = 'block';
        hideOtherSections('services');
    });

    // Clicking contact link
    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('contact').style.display = 'block';
        hideOtherSections('contact');
    });

    // Function to hide other sections when a specific section is displayed
    function hideOtherSections(sectionToShow) {
        document.querySelectorAll('main section').forEach(function(section) {
            if (section.id !== sectionToShow) {
                section.style.display = 'none';
            }
        });
    }

    // Function to scroll to the top of the page
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Function to handle form submissions
function setupFormHandlers() {
    // Registration form submission
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username && email && password) {
            alert(`Registration successful!\n\nUsername: ${username}\nEmail: ${email}`);
            this.reset(); // Clear form inputs
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert(`Thank you for your message, ${name}! We will get back to you soon.`);
            this.reset(); // Clear form inputs
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Initialize functions on DOM content load
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupFormHandlers();

    // Additional initialization if needed
    // Adjust map height on window resize
    const mapIframe = document.querySelector('.map-container iframe');
    function adjustMapHeight() {
        mapIframe.style.height = (window.innerWidth < 600) ? '200px' : '300px';
    }
    window.addEventListener('resize', adjustMapHeight);
    adjustMapHeight(); // Initial adjustment

    // Show default section on page load
    document.getElementById('about').style.display = 'block';
});
