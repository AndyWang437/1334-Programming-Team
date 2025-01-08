// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Enhanced FAQ functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const toggleIcon = question.querySelector('.toggle-icon');
        
        // Close other answers
        document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
            if (otherAnswer !== answer && otherAnswer.classList.contains('active')) {
                otherAnswer.classList.remove('active');
                otherAnswer.style.maxHeight = '0';
                otherAnswer.previousElementSibling.querySelector('.toggle-icon').textContent = '+';
            }
        });

        // Toggle current answer
        answer.classList.toggle('active');
        if (answer.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            toggleIcon.textContent = '-';
        } else {
            answer.style.maxHeight = '0';
            toggleIcon.textContent = '+';
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    contactForm.reset();
}); 