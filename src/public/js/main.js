// This file contains JavaScript code for client-side functionality, enhancing user interaction on the website.

document.addEventListener('DOMContentLoaded', function() {
// Function to handle when an element comes into view
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // You can add a class based on the element's ID or any other logic
        const id = entry.target.id;
  
        // Adding different classes based on element's ID
        if (id === 'Up') {
          entry.target.classList.add('fade-in-up');
        } else if (id === 'Right') {
          entry.target.classList.add('fade-in-right');
        }
  
        // Stop observing the element once it's in view
        observer.unobserve(entry.target);
      }
    });
  };
  
  // Create the IntersectionObserver instance
const defaultObserver = new IntersectionObserver(handleIntersection, { threshold: 0.9 });

// Select all the elements you want to observe
document.querySelectorAll('.box').forEach(element => {
        defaultObserver.observe(element);
});
  
  // Select all the elements you want to observe
  const elementsToObserve = document.querySelectorAll('.box');
  
  // Start observing each element
  elementsToObserve.forEach(element => {
    observer.observe(element);
  });
});