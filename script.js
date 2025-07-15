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

function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("fade-out");
  modal.style.display = "block";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("fade-out");

  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
  }, 300);
}

window.onclick = function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      closeModal(modal.id);
    }
  });
}
