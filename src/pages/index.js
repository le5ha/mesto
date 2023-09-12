import './index.css';

import {
    buttonAdd,
    buttonEdit,
    config,
    descriptionInput,
    initialCards,
    nameInput,
    popupAddPhoto,
    popupEditProfile
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
    nameSelector: '.profile__name',
    descriptionSelector: '.profile__description'
});

// передаю селектор
const popupEdit = new PopupWithForm('.popup_edit', {
    handleSubmitForm: (data) => {
        profile.setUserInfo(data);
    }
});

function editProfile() {
    const userData = profile.getUserInfo();
    nameInput.value = userData.userName;
    descriptionInput.value = userData.userDescription;
    editValidator.resetValidation();
}

popupEdit.setEventListeners();

buttonEdit.addEventListener('click', function () {
    editProfile();
    popupEdit.open();
});

// передаю селектор
const popupAdd = new PopupWithForm('.popup_add', {
    handleSubmitForm: (formData) => {
        cards.addItem(createNewCard(formData));
        popupAdd.close();
    }
});

popupAdd.setEventListeners();

buttonAdd.addEventListener('click', () => {
    popupAdd.open();
    addValidator.resetValidation();
});

const popupOpenCard = new PopupWithImage('.popup_open');
popupOpenCard.setEventListeners();

function createNewCard(data) {
    const card = new Card({
        data,
        // переделал на использование в явном виде
        handleOpenPopup: () => {
            popupOpenCard.open(data.place, data.link);
        },
    }, '.element');
    return card.generateCard();
}

const cards = new Section({
    items: initialCards,
    renderer: (initialCard) => {
        return createNewCard(initialCard);
    },
    containerSelector: '.elements__list',
});

cards.renderItems();
