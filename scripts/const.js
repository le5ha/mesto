// вынес все переменные в отдельный файл
// переменные для профиля
const buttonEdit = document.querySelector('.profile__button_type_edit');
const popupEditProfile = document.querySelector('.popup_edit');
const profileName = document.querySelector('.profile__name');
const nameInput = document.querySelector('.popup__input[name="name"]');
const profileDescription = document.querySelector('.profile__description');
const descriptionInput = document.querySelector('.popup__input[name="description"]');
const buttonCloseProfile = document.querySelector('.popup__button_type_close-profile');
const formEditProfile = document.querySelector('.popup__form_edit-profile');

// переменные для добавления карточек
const buttonAdd = document.querySelector('.profile__button_type_add');
const popupAddPhoto = document.querySelector('.popup_add');
const cardsContainer = document.querySelector('.elements__list');
const placeInput = document.querySelector('.popup__input[name="place"]');
const photoInput = document.querySelector('.popup__input[name="link"]');
const formNewCard = document.querySelector('.popup__form_add-photo');
const buttonCloseAdd = document.querySelector('.popup__button_type_close-add');
const popupOpenPhoto = document.querySelector('.popup_open');
const imagePhotoOpen = document.querySelector('.popup__photo');
const titleOpenPhoto = document.querySelector('.popup__caption');
const buttonClosePhoto = document.querySelector('.popup__button_type_close-image');

// начальные карточки
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

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
    imagePhotoOpen,
    titleOpenPhoto,
    buttonClosePhoto,
    config,
    initialCards,
};