const profile = document.querySelector('.profile');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const editProfile = document.querySelector('.profile__button_type_edit');

const popup = document.querySelector('.popup')
const closePopup = document.querySelector('.popup__button_type_close');

function popupOpen() {
    popup.classList.add("popup_opened");
}

function popupClose() {
    popup.classList.remove("popup_opened");
}

editProfile.addEventListener('click', popupOpen);
closePopup.addEventListener('click', popupClose);