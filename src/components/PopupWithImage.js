import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupPhoto = this._popup.querySelector('.popup__photo');
        this._popupTitle = this._popup.querySelector('.popup__caption');
    }

    open(data) {
        this._popupPhoto.src = data.link;
        this._popupPhoto.alt = data.place;
        this._popupTitle.textContent = data.place;
        super.open();
    }
}