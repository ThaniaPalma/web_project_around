const editbutton = document.querySelector("#editbutton");
const addbutton = document.querySelector("#addbutton");
const popupProfile = document.querySelector(".popup__editprofile");
const popupPicture = document.querySelector(".popup__addpicture");

const popupCloseButton = Array.from(
  document.querySelectorAll(".popup__closebutton")
);

const formProfile = popupProfile.querySelector(".popup__form");
const formPicture = popupPicture.querySelector(".popup__form");
let inputProfileName = popupProfile.querySelector(".popup__input[name=name]");
let inputProfileAbout = popupProfile.querySelector(".popup__input[name=about]");
let textProfileName = document.querySelector(".profile__name");
let textProfileAbout = document.querySelector(".profile__about");

editbutton.addEventListener("click", function () {
  popupProfile.classList.add("popup__visible");
});

addbutton.addEventListener("click", function () {
  popupPicture.classList.add("popup__visible");
});

popupCloseButton.forEach((button) => {
  button.addEventListener("click", function () {
    const popup = button.closest(".popup");
    popup.classList.remove("popup__visible");
  });
});

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  textProfileName.textContent = inputProfileName.value;
  textProfileAbout.textContent = inputProfileAbout.value;
  popupProfile.classList.remove("popup__visible");
});
