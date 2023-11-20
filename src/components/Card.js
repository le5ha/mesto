export class Card {
    constructor({data, userId, handleCardClick, handleDeleteClick, handleLikeClick}, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this._ownerId = data.owner._id;
        this._userId = userId;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCard = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        return document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
    }

    generateCard() {
        this._element = this._getTemplate();
        this._elementPhoto = this._element.querySelector('.card__photo');
        this._likeButton = this._element.querySelector('.card__button-like');
        this._likesCount = this._element.querySelector('.card__like-count');
        this._buttonDelete = this._element.querySelector('.card__button-delete');
        this._setEventListeners();

        this._elementPhoto.title = this._element.querySelector('.card__title').textContent = this._name;
        this._elementPhoto.src = this._link;
        this._elementPhoto.alt = this._name;

        this._hideDeleteButton();
        this.setLike(this._likes);
        this._checkOwnLike();

        return this._element;
    }

    deleteCard = () => {
        this._element.remove();
        this._element = null;
    }

    _hideDeleteButton() {
        if (this._ownerId !== this._userId) {
            this._buttonDelete.remove();
        }
    }

    _setEventListeners() {
        this._elementPhoto.addEventListener('click', () => {
            this._handleCardClick(this._title, this._link);
        })
        this._buttonDelete.addEventListener('click', () => {
            this._handleDeleteCard();
        });
        this._likeButton.addEventListener('click', () => {
            this._handleLikeClick();
        });
    }

    isLiked() {
        return this._likes.find(user => user._id === this._userId);
    }

    _checkOwnLike() {
        this.isLiked() ? this.addLike() : this.deleteLike();
    }

    setLike(data) {
        this._likes = data;
        this._likesCount.textContent = this._likes.length;
    }

    addLike = () => {
        this._likeButton.classList.add('card__button-like_active');
    }

    deleteLike() {
        if (this._likeButton) {
            this._likeButton.classList.remove('card__button-like_active');
        }
    }
}



