// импорты
import {
    imagePhotoOpen,
    popupOpenPhoto,
    titleOpenPhoto
} from './const.js';

export class Card {
    constructor(name, link, openPopup) {
        this._name = name;
        this._link = link;
        this._openPopup = openPopup;
    }

// получить шаблон карточки
    _getTemplate() {
        const cardSelector = document.querySelector('.element');
        return cardSelector.content.querySelector('.card').cloneNode(true);
    }

// обработчик лайка
    _handleLikeButton() {
        const likeButton = this._element.querySelector('.card__button-like');
        likeButton.classList.toggle('card__button-like_active');
    }

// удаление карточки
    _handleDeleteCard() {
        this._element.remove();
        this._element = null;
    }

// открыть попап
    _handleOpenPopup() {
        imagePhotoOpen.src = this._link;
        imagePhotoOpen.alt = this._name;
        titleOpenPhoto.textContent = this._name;
        this._openPopup(popupOpenPhoto);
    }


// слушатели
    _setEventListeners() {
        this._element.querySelector('.card__photo').addEventListener('click', () => {
            this._handleOpenPopup();
        })

        this._element.querySelector('.card__button-delete').addEventListener('click', () => {
            this._handleDeleteCard();
        })

        this._element.querySelector('.card__button-like').addEventListener('click', () => {
            this._handleLikeButton();
        })
    }

// создание карточки
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.card__photo').src = this._link;
        this._element.querySelector('.card__photo').alt = this._name;
        this._element.querySelector('.card__title').textContent = this._name;

        return this._element;
    }
}