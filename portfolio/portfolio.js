document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Skill rating bar
    const ratings = document.querySelectorAll('.rating');
    ratings.forEach(rating => {
        const ratingValue = rating.getAttribute('data-rating');
        const ratingBar = document.createElement('div');
        ratingBar.className = 'rating-bar';
        ratingBar.style.width = `${ratingValue}%`;
        rating.appendChild(ratingBar);
    });

    // Contact form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address');
        } else {
            alert('Message sent successfully');
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
