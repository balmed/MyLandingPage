// Display a modal when the "Explore More" button is clicked
document.querySelector('.btn').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'block';
});

// Close the modal when the close button is clicked
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
