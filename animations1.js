// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Add animation classes to elements
  const elementsToAnimate = [
    '.profile', '.contact-row', '.about', 
    '.projects', '.list', '.two-col', 
    '.article', '.contact', 'footer'
  ];
  
  elementsToAnimate.forEach((selector, index) => {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.add('fade-in');
      element.classList.add(`delay-${index % 5}`);
    }
  });
  
  // Add pulse animation to status dot
  const statusDot = document.querySelector('.status .dot');
  if (statusDot) {
    statusDot.classList.add('pulse');
  }
  
  // Add floating animation to buttons
  const floatingButtons = document.querySelectorAll('.floating-btn');
  floatingButtons.forEach((btn, index) => {
    btn.classList.add('float');
    btn.style.animationDelay = `${index * 0.3}s`;
  });
  
  // Scroll reveal animation
  const revealElements = document.querySelectorAll('.reveal');
  
  function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  }
  
  // Initial check
  checkReveal();
  
  // Check on scroll
  window.addEventListener('scroll', checkReveal);
  
  // Form interaction
  const formInputs = document.querySelectorAll('.input, textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      if (this.value === '') {
        this.parentElement.classList.remove('focused');
      }
    });
  });
});
const revealElements = document.querySelectorAll('[data-reveal]');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target); // reveal once
    }
  });
}, {
  threshold: .9
});

revealElements.forEach(el => observer.observe(el));
