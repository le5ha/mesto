// профиль по юзер стори: начиная с кнопки
const buttonEdit = document.querySelector('.profile__button_type_edit');
const popupEditProfile = document.querySelector('.popup_edit');
const profileName = document.querySelector('.profile__name');
const nameInput = document.querySelector('.popup__input[name="name"]');
const profileDescription = document.querySelector('.profile__description');
const descriptionInput = document.querySelector('.popup__input[name="description"]');
const buttonCloseProfile = document.querySelector('.popup__button_type_close-profile');
const formEditProfile = document.querySelector('.popup__form_edit-profile')

// карточки по юзер стори: начиная с кнопки
const buttonAdd = document.querySelector('.profile__button_type_add');
const popupAddPhoto = document.querySelector('.popup_add');
const cardsContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('.element');
const placeInput = document.querySelector('.popup__input[name="place"]');
const photoInput = document.querySelector('.popup__input[name="link"]');
const formNewCard = document.querySelector('.popup__form_add-photo');
const buttonCloseAdd = document.querySelector('.popup__button_type_close-add');
const popupOpenPhoto = document.querySelector('.popup_open');
const imagePhotoOpen = document.querySelector('.popup__photo');
const titleOpenPhoto = document.querySelector('.popup__caption');
const buttonClosePhoto = document.querySelector('.popup__button_type_close-image');

// открывать и закрывать попапы
function openPopup(popupChoose) {
    enableValidation(config);
    popupChoose.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupOnEsc);
    popupChoose.addEventListener('click', closePopupOnOverlay);
}

function closePopup(popupChoose) {
    popupChoose.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupOnEsc);
    popupChoose.removeEventListener('click', closePopupOnOverlay);
}

function closePopupOnEsc(evt) {
    if (evt.key === 'Escape') {
        const popupToClose = document.querySelector('.popup_opened');
        closePopup(popupToClose);
    }
}


    function closePopupOnOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
}
// логика профиля
// заполнить профиль
function fillProfile() {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
}

// сохранение профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closePopup(popupEditProfile);
}

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
    titleOpenPhoto.textContent = event.target.closest('.card').querySelector('.card__title').textContent;
    openPopup(popupOpenPhoto);
}

// создать карточку
function createCard(title, photo) {
    const cardElement = cardTemplate.content.cloneNode(true);
    const cardPhoto = cardElement.querySelector('.card__photo');
    const cardTitle = cardElement.querySelector('.card__title');
    const likeCardButton = cardElement.querySelector('.card__button-like');
    const deleteCardButton = cardElement.querySelector('.card__button-delete'); // Get the delete button of the new card
    cardTitle.textContent = title;
    cardPhoto.src = photo;
    cardPhoto.alt = title;
    likeCardButton.addEventListener('click', likeCard);
    deleteCardButton.addEventListener('click', deleteCard);
    cardPhoto.addEventListener('click', showImagePopup);
    return cardElement;
}

function addCard(title, photo) {
    const cardElement = createCard(title, photo);
    cardsContainer.prepend(cardElement);
}
// хэндлер создания карточки
function handleAddPhotoSubmit(evt) {
    evt.preventDefault();
    addCard((placeInput.value), (photoInput.value));
    placeInput.value = '';
    photoInput.value = '';
    evt.submitter.classList.add('popup__button-save_disabled')
    evt.submitter.disabled = true;
    closePopup(popupAddPhoto);
}

// создать стартовые карточки
function addInitialCards(array) {
    array.forEach((card) => {
        addCard(card.name, card.link);
    });
}

// слушатели для профиля
buttonEdit.addEventListener('click', function () {
    fillProfile();
    openPopup(popupEditProfile);
});

formEditProfile.addEventListener('submit', handleProfileFormSubmit);

buttonCloseProfile.addEventListener('click', function () {
    closePopup(popupEditProfile);
});

// слушатели карточек
buttonAdd.addEventListener('click', function () {
    openPopup(popupAddPhoto);
});

formNewCard.addEventListener('submit', handleAddPhotoSubmit);

buttonCloseAdd.addEventListener('click', function () {
    closePopup(popupAddPhoto);
});

buttonClosePhoto.addEventListener('click', function () {
    closePopup(popupOpenPhoto);
})

addInitialCards(initialCards);