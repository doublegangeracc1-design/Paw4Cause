document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar-menu');
    const dashboardContainer = document.querySelector('.dashboard-container');
    const menuItems = document.querySelectorAll('.sidebar-navigation li');
    const menuToggle = document.querySelector('.sidebar-toggle-top .menu-toggle');
    const closeBtn = document.querySelector('.sidebar-toggle-top .close-menu-btn');


    const setActiveMenuItem = () => {
        let currentPath = window.location.pathname.split('/').pop() || '';
        if (currentPath === '' || currentPath.includes('home.html')) {
            currentPath = 'home.html';
        }

        menuItems.forEach(el => {
            el.classList.remove('active');
        });

        menuItems.forEach(item => {
            const link = item.querySelector('a');

            if (link && link.href) {
                const linkPath = link.href.split('/').pop() || '';
                if (linkPath === currentPath) {
                    item.classList.add('active');
                }
            }
        });
    };


    menuItems.forEach(item => {
        item.addEventListener('click', event => {
            document.querySelector('.sidebar-navigation li.active')?.classList.remove('active');
            item.classList.add('active');

            if (sidebar.classList.contains('expanded')) {
                sidebar.classList.remove('expanded');
                if (dashboardContainer) {
                    dashboardContainer.classList.remove('menu-open');
                }
            }

        });
    });

    const toggleMenu = () => {
        sidebar.classList.toggle('expanded');

        if (dashboardContainer) {
            dashboardContainer.classList.toggle('menu-open', sidebar.classList.contains('expanded'));
        }
    };

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', toggleMenu);
    }

    if (sidebar.classList.contains('expanded')) {
        sidebar.classList.remove('expanded');
        if (dashboardContainer) {
            dashboardContainer.classList.remove('menu-open');
        }
    }

    setActiveMenuItem();
});


document.addEventListener('DOMContentLoaded', () => {
    const settingItems = document.querySelectorAll('.settings-sidebar li');

    settingItems.forEach(item => {
        item.addEventListener('click', function () {

            const currentActive = document.querySelector('.settings-sidebar li.active-setting');

            if (currentActive) {
                currentActive.classList.remove('active-setting');
            }
            this.classList.add('active-setting');

        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const settingItems = document.querySelectorAll('.settings-sidebar li');

    settingItems.forEach(item => {
        item.addEventListener('click', function () {
            const currentActive = document.querySelector('.settings-sidebar li.active-setting');

            if (currentActive) {
                currentActive.classList.remove('active-setting');
            }

            this.classList.add('active-setting');
        });
    });

    const accountInfoForm = document.querySelector('.account-info-card form');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');


    if (accountInfoForm) {
        accountInfoForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const newFirstName = firstNameInput.value.trim();
            const newLastName = lastNameInput.value.trim();
            const newEmail = emailInput.value.trim();
            const newPhone = phoneInput.value.trim();
            const newAddress = addressInput.value.trim();

            if (!newFirstName || !newEmail) {
                alert('First Name and Email are required fields.');
                return; 
            }

            alert('Account information has been successfully saved!');
        });
    }


    const cancelButton = document.querySelector('.button-cancel');
    if (cancelButton && accountInfoForm) { 
        cancelButton.addEventListener('click', () => {
            accountInfoForm.reset();
            alert('Changes have been discarded.');
        });
    }
});

// --- 4. PASSWORD TOGGLE LOGIC  ---
const togglePasswordButton = document.getElementById('toggleConfirmPassword');
const passwordInput = document.getElementById('confirmNewPassword');

if (togglePasswordButton && passwordInput) {
    togglePasswordButton.addEventListener('click', function () {
        const icon = this.querySelector('i');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        if (type === 'text') {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }

        passwordInput.focus();
    });
}
