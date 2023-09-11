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
    cardsContainer,
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
    nameSelector: '.profile__name',
    descriptionSelector: '.profile__description'
});

const popupEdit = new PopupWithForm(popupEditProfile, {
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

const popupAdd = new PopupWithForm(popupAddPhoto, {
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

const popupOpenCard = new PopupWithImage(popupOpenPhoto);
popupOpenCard.setEventListeners();

function createNewCard(data) {
    const card = new Card({
        data,
        handleOpenPopup: (place, link) => {
            popupOpenCard.open(data.place, data.link);
        },
    }, cardTemplate);
    return card.generateCard();
}

const cards = new Section({
    items: initialCards,
    renderer: (initialCard) => {
        const card = createNewCard(initialCard);
        return card;
    },
    container: cardsContainer,
});

cards.renderItems();
