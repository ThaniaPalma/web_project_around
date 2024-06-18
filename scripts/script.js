const editbutton = document.querySelector("#editbutton");
const popupProfile = document.querySelector(".popup_editprofile");
const formProfile = popupProfile.querySelector(".popup__form");
const inputProfileName = popupProfile.querySelector(
  ".popup__input[name=profile_name]"
);
const inputProfileAbout = popupProfile.querySelector(
  ".popup__input[name=profile_about]"
);
const textProfileName = document.querySelector(".profile__name");
const textProfileAbout = document.querySelector(".profile__about");

const addbutton = document.querySelector("#addbutton");
const popupAddPicture = document.querySelector(".popup_addpicture");
const formPicture = popupAddPicture.querySelector(".popup__form");
const inputPictureName = popupAddPicture.querySelector(
  ".popup__input[name=picture_name]"
);
const inputPictureLink = popupAddPicture.querySelector(
  ".popup__input[name=picture_link]"
);

const popupPicture = document.querySelector(".popup_picture");

const popupCloseButton = Array.from(
  document.querySelectorAll(".popup__closebutton")
);

const cardsArea = document.querySelector(".cards");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

function openPopup(popup) {
  popup.classList.add("popup__visible");
}

function closePopup(popup) {
  popup.classList.remove("popup__visible");
}

const overlayElement = Array.from(document.querySelectorAll(".popup__overlay"));

overlayElement.forEach((overlay) => {
  overlay.addEventListener("click", function () {
    const popup = overlay.closest(".popup");
    closePopup(popup);
  });
});

editbutton.addEventListener("click", function () {
  openPopup(popupProfile);
  inputProfileName.value = textProfileName.textContent;
  inputProfileAbout.value = textProfileAbout.textContent;

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closePopup(popupProfile);
    }
  });
});

addbutton.addEventListener("click", function () {
  openPopup(popupAddPicture);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closePopup(popupAddPicture);
    }
  });
});

popupCloseButton.forEach((button) => {
  button.addEventListener("click", function () {
    const popup = button.closest(".popup");
    closePopup(popup);
  });
});

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  textProfileName.textContent = inputProfileName.value;
  textProfileAbout.textContent = inputProfileAbout.value;
  inputProfileName.value = "";
  inputProfileAbout.value = "";
  closePopup(popupProfile);
});

function addCard(event) {
  event.preventDefault();
  const cardNode = createCard(inputPictureName.value, inputPictureLink.value);
  cardsArea.prepend(cardNode);

  closePopup(popupAddPicture);
}

formPicture.addEventListener("submit", addCard);

function createCard(name, link) {
  const template = document.querySelector(".template");
  const templateNode = template.content.querySelector(".card");
  const cardNode = templateNode.cloneNode(true);

  cardNode.querySelector(".card__image").src = link;
  cardNode.querySelector(".card__image").alt = name;
  cardNode.querySelector(".card__image-name").textContent = name;

  cardNode.querySelector(".card__image-trash").addEventListener("click", () => {
    cardNode.remove();
  });

  const favbutton = cardNode.querySelector(".card__image-favorite");
  favbutton.addEventListener("click", () => {
    favbutton.classList.toggle("card__image-favorite_active");
  });

  cardNode.querySelector(".card__image").addEventListener("click", () => {
    popupPicture.classList.toggle("popup__visible");

    popupPicture.querySelector(".popup__picture-image").src = link;
    popupPicture.querySelector(".popup__picture-title").textContent = name;
  });

  return cardNode;
}

initialCards.forEach((item) => {
  const cardNode = createCard(item.name, item.link);
  cardsArea.append(cardNode);
});
