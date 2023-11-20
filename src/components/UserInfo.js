export class UserInfo {
    constructor({nameSelector, aboutSelector, avatarSelector}) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(aboutSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            userName: this._name.textContent,
            userAbout: this._about.textContent,
        };
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._about.textContent = data.about;
    }

    setUserAvatar(url) {
        this._avatar.src = url.avatar;
    }
}