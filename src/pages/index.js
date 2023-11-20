import './index.css';

import {
    buttonAddPhoto,
    buttonEditProfile,
    buttonEditAvatar,
    config,
    apiConfig,
    descriptionInput,
    nameInput,
    popupAddPhoto,
    popupEditProfile,
    popupEditAvatar,
} from '../utils/const.js';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithConfirm} from '../components/PopupWithConfirm.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';

const editProfileValidator = new FormValidator(popupEditProfile, config);
editProfileValidator.enableValidation();

const addPhotoValidator = new FormValidator(popupAddPhoto, config);
addPhotoValidator.enableValidation();

const editAvatarValidator = new FormValidator(popupEditAvatar, config);
editAvatarValidator.enableValidation();


const api = new Api(apiConfig);
let userId = null;

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([me, initialCards]) => {
        userId = me._id;
        profile.setUserInfo(me);
        profile.setUserAvatar(me);
        initialCards.reverse();
        cards.renderItems(initialCards);
    })
    .catch((err) => {
        console.log(err);
    });

const cards = new Section({
    items: [],
    renderer: (items) => {
        const card = createNewCard(items);
        cards.addItem(card);
    },
}, '.elements__list');

// профиль
const profile = new UserInfo({
    nameSelector: '.profile__name',
    aboutSelector: '.profile__description',
    avatarSelector: '.profile__avatar',
});

const popupEditUserProfile = new PopupWithForm('.popup_edit', {
    handleSubmitForm: (data) => {
        popupEditUserProfile.renderLoading(true);
        api.updateUserInfo(data)
            .then((res) => {
                profile.setUserInfo(res);
                popupEditUserProfile.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupEditUserProfile.renderLoading(false);
            });
    },
});

function editUserProfile() {
    const userData = profile.getUserInfo();
    nameInput.value = userData.userName;
    descriptionInput.value = userData.userAbout;
    editProfileValidator.resetValidation();
}

popupEditUserProfile.setEventListeners();

buttonEditProfile.addEventListener('click', function () {
    editUserProfile();
    popupEditUserProfile.open();
});

const popupEditUserAvatar = new PopupWithForm('.popup_avatar', {
    handleSubmitForm: (data) => {
        popupEditUserAvatar.renderLoading(true);
        api.updateAvatar(data)
            .then((res) => {
                profile.setUserAvatar(res);
                popupEditUserAvatar.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupEditUserAvatar.renderLoading(false);
            });
    },
});

popupEditUserAvatar.setEventListeners();

buttonEditAvatar.addEventListener('click', () => {
    popupEditUserAvatar.open();
});

// карточки
const popupAddPhotoCard = new PopupWithForm('.popup_add', {
    handleSubmitForm: (data) => {
        popupAddPhotoCard.renderLoading(true);
        api.sendCard(data)
            .then((res) => {
                const card = createNewCard(res);
                console.log(card);
                cards.addItem(card);
                popupAddPhotoCard.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupAddPhotoCard.renderLoading(false);
            });
    },
});

popupAddPhotoCard.setEventListeners();

buttonAddPhoto.addEventListener('click', () => {
    popupAddPhotoCard.open();
    addPhotoValidator.resetValidation();
});

const popupDeleteCard = new PopupWithConfirm('.popup_delete', {
    handleSubmit: (data) => {
        api.deleteCard(data)
            .then(() => {
                popupDeleteCard.close();
            })
            .catch((err) => {
                console.log(err);
            })
    }
})

popupDeleteCard.setEventListeners();

const popupWithImage = new PopupWithImage('.popup_open');

popupWithImage.setEventListeners();

const createNewCard = (data) => {
    console.log("Creating card with data:", data);
    const card = new Card({
        data,
        userId,
        handleCardClick: () => {
            popupWithImage.open(data.name, data.link);
        },
        handleDeleteClick: () => {
            popupDeleteCard.open();
            popupDeleteCard.handleSubmitConfirm(() => {
                api.deleteCard(card._id)
                    .then(() => {
                        card.deleteCard();
                        popupDeleteCard.close();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
        },
        handleLikeClick: () => {
            console.log('like');
            if (card.isLiked()) {
                api.deleteLike(card._id)
                    .then((data) => {
                        card.deleteLike();
                        card.setLike(data.likes);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                api.setLike(card._id)
                    .then((data) => {
                        card.addLike();
                        card.setLike(data.likes);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
    }, '.element');
    return card.generateCard();
};

