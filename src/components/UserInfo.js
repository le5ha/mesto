export class UserInfo {
    constructor({profileName, profileDescription}) {
        this._name = document.querySelector(profileName);
        this._description = document.querySelector(profileDescription);
    }

    getUserInfo() {
        this._userData = {
            userName: this._name.textContent,
            userDescription: this._description.textContent
        }
        return this._userData;
    }

    setUserInfo({name, description}) {
        this._name.textContent = name;
        this._description.textContent = description;
    }
}