// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if(name === '' || email === '' || subject === '' || message === '') {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Here you would normally send the data to a server
    // For demonstration, we'll simulate a successful submission
    setTimeout(() => {
        contactForm.reset();
        showMessage('Message sent successfully! I will get back to you soon.', 'success');
        
        // In a real implementation, you would use something like:
        // Email.send({
        //     Host: "smtp.gmail.com",
        //     Username: "your-email@gmail.com",
        //     Password: "your-password",
        //     To: 'pius@gmail.com',
        //     From: email,
        //     Subject: subject,
        //     Body: message
        // }).then(message => showMessage("Mail sent successfully", 'success'));
        
    }, 1000);
});

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.style.display = 'block';
    formMessage.className = type;
    
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});