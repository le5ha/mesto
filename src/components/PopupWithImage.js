import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupPhoto = this._popup.querySelector('.popup__photo');
        this._popupTitle = this._popup.querySelector('.popup__caption');
    }

    open(place, link) {
        this._popupPhoto.src = link;
        this._popupPhoto.alt = place;
        this._popupTitle.textContent = place;
        super.open();
    }
}