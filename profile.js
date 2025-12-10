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