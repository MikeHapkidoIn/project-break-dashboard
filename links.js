const iconInput = document.getElementById("icon-input");
const nameInput = document.getElementById("name-input");
const urlInput = document.getElementById("url-input");
const addLinkButton = document.getElementById("add-link-button");
const linksContainer = document.getElementById("links-container");

function listSavedLinks() {
  return JSON.parse(localStorage.getItem("links")) || [];
}

function saveLinks(links) {
  localStorage.setItem("links", JSON.stringify(links));
}

function renderizarLinks() {
  linksContainer.innerHTML = "";
  const links = listSavedLinks();

  links.forEach(link => {
    const linkItem = createLinkItem(link.name, link.url);
    linksContainer.appendChild(linkItem);
  });
}

function createLinkItem(name, url) {
  const linkItem = document.createElement("li");
  const linkElement = document.createElement("a");
  const deleteButton = document.createElement("button");

  linkElement.href = url;
  linkElement.target = "_blank";
  linkElement.textContent = name;

  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", () => {
    const currentLinks = listSavedLinks(); // <- corregido
    const updatedLinks = currentLinks.filter(link => link.name !== name || link.url !== url);
    saveLinks(updatedLinks);
    renderizarLinks();
  });

  linkItem.appendChild(linkElement);
  linkItem.appendChild(deleteButton);

  return linkItem;
}


addLinkButton.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const url = urlInput.value.trim();

  if (name && url) {
    const currentLinks = listSavedLinks();
    const newLinks = [...currentLinks, { name, url }];
    saveLinks(newLinks);
    renderizarLinks();

    nameInput.value = "";
    urlInput.value = "";
  } else {
    alert("¡Falta alguno de los datos!");
  }
});

renderizarLinks();