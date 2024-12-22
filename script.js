function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function toggleDetails(button) {
  const extraDetails = button.closest('.details-container').querySelector('.extra-details');
  if (extraDetails.classList.contains('hidden')) {
    extraDetails.classList.remove('hidden');
    button.textContent = 'Show Less';
  } else {
    extraDetails.classList.add('hidden');
    button.textContent = 'Read More';
  }
}