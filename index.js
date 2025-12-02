document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.faq__details');

  accordions.forEach((accordion) => {
    if ('ontoggle' in accordion) {
      accordion.addEventListener('toggle', function() {
        if (accordion.open) {
          accordions.forEach((accordionRef) => {
            if (accordionRef !== accordion) accordionRef.removeAttribute('open');
          })
        }
      })
    }
  });
});