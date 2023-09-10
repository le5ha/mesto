export  class Card {
    constructor({data, handleOpenPopup}) {
        this._name = data.place;
        this._link = data.link;
        this._handleOpenPopup = handleOpenPopup;
    }

// получить шаблон карточки
    _getTemplate() {
        const cardTemplate = document
            .querySelector('.element')
            .content.querySelector('.card')
            .cloneNode(true);
        return cardTemplate;
    }

// обработчик лайка
    _handleLikeButton() {
        this._likeButton.classList.toggle('card__button-like_active');
        console.log(this._likeButton);
    }

// удаление карточки
    _handleDeleteCard() {
        this._element.remove();
        this._element = null;
    }

// слушатели
    _setEventListeners() {
        this._element.querySelector('.card__photo').addEventListener('click', () => {
            this._handleOpenPopup();
        })

        this._element.querySelector('.card__button-delete').addEventListener('click', () => {
            this._handleDeleteCard();
        })

        this._likeButton.addEventListener('click', () => {
            this._handleLikeButton();
        })
    }

// создание карточки
    generateCard() {
        this._element = this._getTemplate();

        this._likeButton = this._element.querySelector('.card__button-like');
        this._elementPhoto = this._element.querySelector('.card__photo');
        this._elementTitle = this._element.querySelector('.card__title');

        this._elementPhoto.src = this._link;
        this._elementPhoto.alt = this._name;
        this._elementTitle.textContent = this._name;

        this._setEventListeners();
        return this._element;
    }
}
