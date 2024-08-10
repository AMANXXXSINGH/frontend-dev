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

   
});
