// данные со странички
// пока не используем const profile = document.querySelector('.profile');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
// кнопка на страничке
const profileEdit = document.querySelector('.profile__button_type_edit');
// попап
const popup = document.querySelector('.popup');
const popupBlock = document.querySelector('.popup__block');
// инпуты
const nameInput = document.querySelector('.popup__input[name="name"]')
const descriptionInput = document.querySelector('.popup__input[name="description"]')
// кнопка в попапе
const popupClose = document.querySelector('.popup__button_type_close');
// открыть попап
function openPopup() {
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
}
//закрыть попап
function closePopup() {
    popup.classList.remove("popup_opened");
}
// сохранить данные в попапе
function formSubmitHandler (evt) {
    evt.preventDefault();
    (profileName.textContent = nameInput.value) && (profileDescription.textContent = descriptionInput.value);
    closePopup();
}
// вызов функций
profileEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
popupBlock.addEventListener('submit', formSubmitHandler);