document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameEmailInput = document.getElementById('usernameEmail');
    const passwordInput = document.getElementById('password');
    const togglePasswordButton = document.getElementById('togglePassword');

    
    togglePasswordButton.addEventListener('click', () => {
        const icon = togglePasswordButton.querySelector('i');
        
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        
        if (type === 'text') {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash'); 
        } else {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye'); 
        }
    });


    const removeErrorOnInput = (inputElement) => {
        if (inputElement.value.trim().length > 0) {
            inputElement.parentElement.classList.remove('input-error');
        }
    };

    usernameEmailInput.addEventListener('input', () => removeErrorOnInput(usernameEmailInput));
    passwordInput.addEventListener('input', () => removeErrorOnInput(passwordInput));
    
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const usernameEmail = usernameEmailInput.value.trim();
        const password = passwordInput.value.trim();



        if (usernameEmail === '' || password === '') {

            if (usernameEmail === '') {
                usernameEmailInput.parentElement.classList.add('input-error');
                usernameEmailInput.focus();
            } else {
                usernameEmailInput.parentElement.classList.remove('input-error');
            }
    
            if (password === '') {
                passwordInput.parentElement.classList.add('input-error');
                if (usernameEmail !== '') {
                    passwordInput.focus();
                }
            } else {
                passwordInput.parentElement.classList.remove('input-error');
            }
    
        } else {
            usernameEmailInput.parentElement.classList.remove('input-error');
            passwordInput.parentElement.classList.remove('input-error');
    
            window.location.href = 'home.html';
        }

    });
});