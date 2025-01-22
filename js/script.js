// ================================ Barre de Navigation ================================

// Charge le contenu de la navbar depuis navbar.html
fetch("/html/commons/navbar.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erreur lors du chargement de la navbar");
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    // défini le comportement du menu après l'insertion de la navbar
    initializeDropdown();
  })
  .catch((error) => {
    console.error("Erreur : ", error);
  });

// ================================ Menu Déroulant ================================

// défini le comportement du menu déroulant
function initializeDropdown() {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (!dropdownToggle || !dropdownContent) {
    console.warn("Dropdown non trouvé dans la navbar");
    return;
  }

  // Afficher/masquer le menu au clic sur le bouton
  dropdownToggle.addEventListener("click", function (event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  // Fermee le menu si on clique en dehors
  document.addEventListener("click", function (event) {
    if (
      !dropdownToggle.contains(event.target) &&
      !dropdownContent.contains(event.target)
    ) {
      dropdownContent.style.display = "none";
    }
  })
}
