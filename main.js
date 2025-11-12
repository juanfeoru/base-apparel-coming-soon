const input = document.querySelector('.form__input');
const form = document.querySelector('.form');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorIcon = document.querySelector('.form__error-icon');
const errorText = document.querySelector('.form__error-text');

form.addEventListener('submit', (e) =>  {
    e.preventDefault();

    if (!emailPattern.test(input.value)) {
       errorIcon.style.display = 'block'; 
       errorText.style.display = 'block'; 
       input.classList.toggle('active');
    };

    if (input.value === '') {
        errorText.textContent = 'Email cannot be empty';
    }
});