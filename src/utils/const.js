// вынес все переменные в отдельный файл
// переменные для профиля
const buttonEdit = document.querySelector('.profile__button_type_edit');
const popupEditProfile = document.querySelector('.popup_edit');

const nameInput = document.querySelector('.popup__input[name="name"]');
const descriptionInput = document.querySelector('.popup__input[name="description"]');

// переменные для добавления карточек
const buttonAdd = document.querySelector('.profile__button_type_add');
const popupAddPhoto = document.querySelector('.popup_add');
const cardTemplate = document.querySelector('.card');
const popupOpenPhoto = document.querySelector('.popup_open');

// начальные карточки
const initialCards = [
    {
        place: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        place: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        place: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        place: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        place: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        place: 'Байкал',
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
    nameInput,
    descriptionInput,
    buttonAdd,
    popupAddPhoto,
    popupOpenPhoto,
    initialCards,
    cardTemplate,
    config
};