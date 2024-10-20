document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from actually submitting
    document.getElementById('thankYouMessage').style.display = 'block';
});
