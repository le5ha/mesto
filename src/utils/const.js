// вынес все переменные в отдельный файл
// переменные для профиля
const buttonEditProfile = document.querySelector('.profile__button_type_edit');
const popupEditProfile = document.querySelector('.popup_edit');


const nameInput = document.querySelector('.popup__input[name="name"]');
const descriptionInput = document.querySelector('.popup__input[name="description"]');

const buttonEditAvatar = document.querySelector('.profile__button_type_avatar');
const popupEditAvatar = document.querySelector('.popup_avatar');

// переменные для добавления карточек
const buttonAddPhoto = document.querySelector('.profile__button_type_add');
const popupAddPhoto = document.querySelector('.popup_add');

const apiConfig = {
    url: 'https://mesto.nomoreparties.co/v1/cohort-75',
    headers: {
        authorization: '6783bce9-8e64-422b-aac7-1a65a7ea4fbf',
        'Content-Type': 'application/json'
    }
}

// конфиг для валидации
const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input-error_visible'
};

// экспорты
export {
    buttonEditProfile,
    popupEditProfile,
    nameInput,
    descriptionInput,
    buttonAddPhoto,
    popupAddPhoto,
    config,
    buttonEditAvatar,
    popupEditAvatar,
    apiConfig
};