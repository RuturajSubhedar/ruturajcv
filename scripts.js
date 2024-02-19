// Add your custom scripts here
document.addEventListener('DOMContentLoaded', function() {
  // Add animations
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('fadeIn');
  });
});
