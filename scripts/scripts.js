import {
    buttonEdit,
    popupEditProfile,
    profileName,
    nameInput,
    profileDescription,
    descriptionInput,
    buttonCloseProfile,
    formEditProfile,
    buttonAdd,
    popupAddPhoto,
    cardsContainer,
    placeInput,
    photoInput,
    formNewCard,
    buttonCloseAdd,
    popupOpenPhoto,
    buttonClosePhoto,
    initialCards,
    config
} from './const.js';

import {
    Card
} from './card.js';

import {
    FormValidator
} from './validate.js';

// открывать и закрывать попапы
export const openPopup = (popupChoose) => {
    popupChoose.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupOnEsc);
    popupChoose.addEventListener('click', closePopupOnOverlay);
}

export const closePopup = (popupChoose) => {
    popupChoose.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupOnEsc);
    popupChoose.removeEventListener('click', closePopupOnOverlay);
}

// закрывать на эскейп и оверлей
const closePopupOnEsc = (evt) => {
    if (evt.key === 'Escape') {
        const popupToClose = document.querySelector('.popup_opened');
        closePopup(popupToClose);
    }
}

const closePopupOnOverlay = (evt) => {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
}

// заполнить профиль
const fillProfile = () => {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
}

// сохранение профиля
const handleProfileFormSubmit = (evt) => {
    evt.preventDefault();
    if (formEditProfile.checkValidity()) {
        profileName.textContent = nameInput.value;
        profileDescription.textContent = descriptionInput.value;
        closePopup(popupEditProfile);
    }
}


// добавить карточку из класса карточки
const addCard = (name, link) => {
    const cardElement = new Card(name, link).generateCard();
    cardsContainer.prepend(cardElement);
}

// хэндлер создания карточки
const handleAddPhotoSubmit = (evt) => {
    evt.preventDefault();
    addCard((placeInput.value), (photoInput.value));
    placeInput.value = '';
    photoInput.value = '';
    evt.submitter.classList.add('popup__button-save_disabled')
    evt.submitter.disabled = true;
    closePopup(popupAddPhoto);
}

// создание начальных карточек
const addInitialCards = (array) => {
    array.forEach((card) => {
        addCard(card.name, card.link);
    });
}

// слушатели на профиль
buttonEdit.addEventListener('click', function () {
    fillProfile();
    openPopup(popupEditProfile);
    formValidatorProfile.resetValidation();
});

formEditProfile.addEventListener('submit', handleProfileFormSubmit);

buttonCloseProfile.addEventListener('click', function () {
    closePopup(popupEditProfile);
});

// слушатели на добавление карточки
buttonAdd.addEventListener('click', function () {
    openPopup(popupAddPhoto);
    formValidatorCard.resetValidation();
});

formNewCard.addEventListener('submit', handleAddPhotoSubmit);

buttonCloseAdd.addEventListener('click', function () {
    closePopup(popupAddPhoto);
});

buttonClosePhoto.addEventListener('click', function () {
    closePopup(popupOpenPhoto);
})

// включить валидацию
const formValidatorProfile = new FormValidator(formEditProfile, config);
formValidatorProfile.enableValidation();

const formValidatorCard = new FormValidator(formNewCard, config);
formValidatorCard.enableValidation();

// добавить начальные карточки
addInitialCards(initialCards);