// импорт конфига
import { config } from './const.js';

export class FormValidator {
    constructor(formElement) {
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(config.inputSelector));
        this._buttonElement = this._formElement.querySelector(config.submitButtonSelector);
    }

// показывать ошибку
    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(config.inputErrorClass);
        errorElement.classList.add(config.errorClass);
        errorElement.textContent = inputElement.validationMessage;
    }

// скрывать ошибку
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(config.inputErrorClass);
        errorElement.classList.remove(config.errorClass);
        errorElement.textContent = '';
    }

// проверить инпут
    _isInputValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }

// проверка наличия невалидного инпута
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => !inputElement.validity.valid);
    }

// переключить состояние кнопки
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(config.inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(config.inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    }

// повесить слушатели на валидацию
    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isInputValid(inputElement);
                this._toggleButtonState();
            });
        });
    }

// включение валидации
    enableValidation() {
        this._setEventListeners();
    }
}

