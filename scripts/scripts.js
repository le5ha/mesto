// шаблоны
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

// профиль по юзер стори: начиная с кнопки
const editProfile = document.querySelector('.profile__button_type_edit');
const popupEditProfile = document.getElementById('popupEditProfile');
const profileName = document.querySelector('.profile__name');
const nameInput = document.querySelector('.popup__input[name="name"]');
const profileDescription = document.querySelector('.profile__description');
const descriptionInput = document.querySelector('.popup__input[name="description"]');
const editProfileClose = document.getElementById('popupEditProfileClose');
const formEditProfile = document.getElementById('formEditProfile')

// карточки по юзер стори: начиная с кнопки
const addPhoto = document.querySelector('.profile__button_type_add');
const popupAddPhoto = document.getElementById('popupAddPhoto');
const cardsContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('.element');
const placeInput = document.querySelector('.popup__input[name="place"]');
const photoInput = document.querySelector('.popup__input[name="link"]');
const formNewCard = document.getElementById('formAddPhoto');
const addPhotoClose = document.getElementById('popupAddPhotoClose');
const popupOpenPhoto = document.getElementById('popupOpenPhoto');
const imagePhotoOpen = document.querySelector('.popup__photo');
const openPhotoTitle = document.querySelector('.popup__caption');
const openPhotoClose = document.getElementById('popupOpenPhotoClose');

// открывать и закрывать попапы
function openPopup(popupChoose) {
    popupChoose.classList.toggle('popup_opened');
}

function popupToggle(event) {
    event.target.closest('.popup').classList.toggle('popup_opened');
}

// логика профиля
// заполнить профиль
function fillProfile() {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
}

// сохранение профиля
function formProfileHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    openPopup(popupEditProfile);
}

// слушатели для профиля
editProfile.addEventListener('click', function () {
    openPopup(popupEditProfile);
    fillProfile();
});

formEditProfile.addEventListener('submit', formProfileHandler);

editProfileClose.addEventListener('click', function () {
    openPopup(popupEditProfile);
});

// логика карточек
// лайкнуть карточку
function likeCard(event) {
    event.target.closest('.card__button-like').classList.toggle('card__button-like_active');
}

// удалить карточку
function deleteCard(event) {
    event.target.closest('.card').remove();
}

function showImagePopup(event) {
    imagePhotoOpen.src = event.target.src;
    imagePhotoOpen.alt = event.target.alt;
    openPhotoTitle.textContent = event.target.closest('.card').querySelector('.card__title').textContent;
    openPopup(popupOpenPhoto);
}

// создать карточку
function addCard(title, photo) {
    const cardElement = cardTemplate.content.cloneNode(true);
    const cardPhoto = cardElement.querySelector('.card__photo');
    const cardTitle = cardElement.querySelector('.card__title');
    const likeCardButton = cardElement.querySelector('.card__button-like');
    const deleteCardButton = cardElement.querySelector('.card__button-delete'); // Get the delete button of the new card
    cardTitle.textContent = title;
    cardPhoto.src = photo;
    cardPhoto.alt = title;
    cardsContainer.appendChild(cardElement);
    likeCardButton.addEventListener('click', likeCard);
    deleteCardButton.addEventListener('click', deleteCard);
    cardPhoto.addEventListener('click', showImagePopup);
}

// хэндлер создания карточки
function formAddPhotoHandler(evt) {
    evt.preventDefault();
    addCard((placeInput.value), (photoInput.value));
    placeInput.value = '';
    photoInput.value = '';
    openPopup(popupAddPhoto);
}

// слушатели карточек
addPhoto.addEventListener('click', function () {
    openPopup(popupAddPhoto);
});

formNewCard.addEventListener('submit', formAddPhotoHandler);

addPhotoClose.addEventListener('click', function () {
    openPopup(popupAddPhoto);
});

openPhotoClose.addEventListener('click', function () {
    openPopup(popupOpenPhoto);
})

// создать стартовые карточки
function addInitialCards(array) {
    array.forEach((card) => {
        addCard(card.name, card.link);
    });
}

addInitialCards(initialCards);