const popupShow = document.querySelector('.contacts__button');
const popUp = document.querySelector('.pop-up__form');
const popupClose = document.querySelector('.button__esc__image');
const fieldName = document.querySelector('.modal__input__name');
const popupForm = document.querySelector('.pop-up__modal');
const fieldEmail = document.querySelector('.modal__input__email');
const fieldText = document.querySelector('.modal__input__text');

popupShow.addEventListener('click', function() {
    popUp.classList.add('pop-up__form_show');
    fieldName.focus();
});

popupClose.addEventListener('click', function() {
    popUp.classList.remove('pop-up__form_show');
    popUp.classList.remove('pop-up__form_error');
});

popupForm.addEventListener('submit', function(evt) {
    if (!fieldName.value || !fieldEmail.value || !fieldText.value) {
    evt.preventDefault();
    popUp.classList.remove('pop-up__form_error');
    popUp.offsetWidth = popUp.offsetWidth;
    popUp.classList.add('pop-up__form_error');
    }
});

window.addEventListener('keydown', function(evt){
    if (evt.keyCode === 27) {
        if (popUp.classList.contains('pop-up__form_show')) {
            evt.preventDefault();
            popUp.classList.remove('pop-up__form_show');
            popUp.classList.remove('pop-up__form_error');
        }
    }
});