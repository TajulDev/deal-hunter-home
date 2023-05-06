const tabLinks = document.querySelectorAll('.tab-menu a');

tabLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // prevent default link behavior
    const targetId = link.getAttribute('href'); // get target ID from href attribute
    window.location.hash = targetId; // set URL hash to target ID
  });
});

