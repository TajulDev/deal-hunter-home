const tabLinks = document.querySelectorAll('.tab-menu a');

tabLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // prevent default link behavior
    const targetId = link.getAttribute('href'); // get target ID from href attribute
    window.location.hash = targetId; // set URL hash to target ID
  });
});


const tabAs = document.querySelectorAll(".tabA");

tabAs.forEach(tabA => {
  tabA.addEventListener("click", () => {
    const currentActive = document.querySelector('.actives');

    if (currentActive) {
      currentActive.classList.remove('actives');
    }

    tabA.classList.add("actives");
  });
});