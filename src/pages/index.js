import './index.css';

import {
    buttonEdit,
    popupEditProfile,
    nameInput,
    descriptionInput,
    buttonAdd,
    popupAddPhoto,
    popupOpenPhoto,
    initialCards,
    cardTemplate,
    config
} from '../utils/const.js';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo';

const editValidator = new FormValidator(popupEditProfile, config);
editValidator.enableValidation();

const addValidator = new FormValidator(popupAddPhoto, config);
addValidator.enableValidation();

const profile = new UserInfo({
    profileName: '.profile__name', // разобраться
    profileDescription: '.profile__description'
});

const popupEdit = new PopupWithForm(popupEditProfile, {
    handleSubmitForm: (data) => {
        profile.setUserInfo(data);
        popupEdit.close();
    }
});

function editProfile() {
    editValidator.resetValidation();
    const userData = profile.getUserInfo();
    nameInput.value = userData.userName;
    descriptionInput.value = userData.userDescription;
}

popupEdit.setEventListeners();

buttonEdit.addEventListener('click', function () {
    editProfile();
    popupEdit.open();
    editValidator._toggleButtonState();
});

const popupAdd = new PopupWithForm(popupAddPhoto, {
    handleSubmitForm: (formData) => {
        cards.addItem(formData);
        popupAdd.close();
    }
});

popupAdd.setEventListeners();

buttonAdd.addEventListener('click', () => {
    popupAdd.open();
    addValidator._toggleButtonState();
});


const popupOpen = new PopupWithImage(popupOpenPhoto);
popupOpen.setEventListeners();

const createNewCard = (data) => {
    const card = new Card({
        data, handleOpenPopup: () => {
            popupOpen.open(data.place, data.link);
        }
    });
    return card;
}

const cards = new Section({
    items: initialCards, renderer: (initialCards) => {
        const card = createNewCard(initialCards);
        return card.generateCard();
    }
});

cards.renderItems();

