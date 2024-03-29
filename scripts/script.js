const editbutton = document.querySelector("#editbutton");
const addbutton = document.querySelector("#addbutton");
const popupProfile = document.querySelector(".popup__editprofile");
const popupPicture = document.querySelector(".popup__addpicture");

const popupCloseButton = Array.from(
  document.querySelectorAll(".popup__closebutton")
);

const formProfile = popupProfile.querySelector(".popup__form");
const formPicture = popupPicture.querySelector(".popup__form");
const inputProfileName = popupProfile.querySelector(
  ".popup__input[name=profile_name]"
);
const inputProfileAbout = popupProfile.querySelector(
  ".popup__input[name=profile_about]"
);
const textProfileName = document.querySelector(".profile__name");
const textProfileAbout = document.querySelector(".profile__about");

function openPopup(popup) {
  popup.classList.add("popup__visible");
}

function closePopup(popup) {
  popup.classList.remove("popup__visible");
}

editbutton.addEventListener("click", function () {
  openPopup(popupProfile);
  inputProfileName.value = textProfileName.textContent;
  inputProfileAbout.value = textProfileAbout.textContent;
});

addbutton.addEventListener("click", function () {
  openPopup(popupPicture);
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
