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
    

    const oneTimeBtn = document.querySelector('.one-time-donation-btn');
    const monthlyBtn = document.querySelector('.monthly-giving-btn');
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customInput = document.querySelector('.custom-input');
    const impactSummary = document.querySelector('.your-impact-summary p');
    const donateNowBtn = document.querySelector('.donate-now-btn');
    const causeCards = document.querySelectorAll('.cause-card');

    let selectedAmount = 25; 


    function setActiveAmountButton(targetButton) {
        amountButtons.forEach(btn => btn.classList.remove('active'));
        if (targetButton) {
            targetButton.classList.add('active');
            customInput.value = ''; 
        }
    }
    
    function updateDisplay(amount) {
        selectedAmount = amount;
        

        const animalCount = Math.ceil(amount / 25); 
        const impactMessage = `**$${amount}** Can provide food for ${animalCount} animal${animalCount === 1 ? '' : 's'} for a week`;
        impactSummary.innerHTML = impactMessage;
        donateNowBtn.textContent = `❤️ Donate $${amount} now`;
    }
    
    // --- 1. Donation Type Toggle (One-Time / Monthly) ---
    oneTimeBtn.addEventListener('click', () => {
        monthlyBtn.classList.remove('active');
        oneTimeBtn.classList.add('active');
    });

    monthlyBtn.addEventListener('click', () => {
        oneTimeBtn.classList.remove('active');
        monthlyBtn.classList.add('active');
    });

    // --- 2. Amount Button Selection ---
    amountButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const amountText = e.target.textContent.replace('$', '');
            const amount = parseInt(amountText);
            
            setActiveAmountButton(e.target);
            updateDisplay(amount);
        });
    });

    // --- 3. Custom Amount Input ---
    customInput.addEventListener('input', (e) => {
        const amount = parseInt(e.target.value) || 0;
        
        setActiveAmountButton(null); 
        
        if (amount > 0) {
            updateDisplay(amount);
        } else {
            updateDisplay(10); 
        }
    });

    // --- 4. Cause Card Selection ---
    causeCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const targetCard = e.currentTarget; 
            
            causeCards.forEach(c => c.classList.remove('active'));
            
            targetCard.classList.add('active');
        });
    });

    
    updateDisplay(selectedAmount); 
});