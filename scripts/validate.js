// я искренне не понимаю, почему оно не работает до конца...
// показать ошибку
const showInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.classList.add(config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
};
// скрыть ошибку
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
};

// проверка инпута
const isInputValid = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement);
    } else {
        hideInputError(formElement, inputElement);
    }
};

// проверка наличия невалидных инпутов
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
})}

// переключать кнопку
function toggleButtonState(inputList, buttonElement, config) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(config.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(config.inactiveButtonClass);
        buttonElement.disabled = false;
    }
}

// повесить слушатели на инпуты
const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    console.log('Form Element:', formElement);
    console.log('Input List:', inputList);
    console.log('Button Element:', buttonElement);

    toggleButtonState(inputList, buttonElement, config);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            console.log('Input event triggered');
            console.log('Form Element:', formElement);
            console.log('Input Element:', inputElement);
            console.log('Config:', config);

            isInputValid(formElement, inputElement, config);
            toggleButtonState(inputList, buttonElement, config);

            console.log('Input event completed');
        });
    });
};


// включить валидацию
function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, config);
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
    });
}

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input-error_visible'
};


enableValidation(config);