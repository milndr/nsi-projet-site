// js pour récupèrer la navbar depuis navbar.html
fetch("/html/commons/navbar.html")
.then((response) => response.text())
.then((data) => {
  document.getElementById("navbar").innerHTML = data;
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');
  
    dropdownToggle.addEventListener('click', function(event) {
      event.preventDefault(); // Empêche le comportement par défaut du bouton
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
  
    // Fermer le menu si on clique en dehors
    document.addEventListener('click', function(event) {
      if (!dropdownToggle.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = 'none';
      }
    });
  });
  