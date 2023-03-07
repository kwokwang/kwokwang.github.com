// get the box element
const box = document.querySelector('footer');

// create an IntersectionObserver to detect when the box enters the viewport
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // if the box is intersecting with the viewport, start the animation
    if (entry.isIntersecting) {
      box.style.animationPlayState = 'running';
      // stop observing the box once it starts animating
      observer.unobserve(entry.target);
    }
  });
});

// observe the box
observer.observe(box);
