const menuBtn = document.getElementById('menuBtn');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const menuOverlay = document.getElementById('menuOverlay');
const scanBtn = document.getElementById('scanBtn');
const menuItems = document.querySelectorAll('.menu-item');

function toggleMenu() {
    hamburgerMenu.classList.toggle('open');
    menuOverlay.classList.toggle('visible');
    document.body.classList.toggle('menu-open');
}

menuBtn.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const feature = this.getAttribute('data-feature');
        toggleMenu();
        
        switch(feature) {
            case 'discounts':
                alert('Discounts: Based off the bottle tag QRC');
                break;
            case 'specials':
                alert('Specials: When Planned Retail Special');
                break;
            case 'competitions':
                alert('Competitions: For eg: a sports event');
                break;
            case 'rewards':
                alert('My Rewards: For eg: another user buys you a gift card');
                break;
            case 'giftcards':
                alert('Gift Cards: For eg: when user buys a gift card');
                break;
            case 'settings':
                alert('Settings: To access manual QRC inputs');
                break;
            case 'help':
                alert('Help & Support: Contact help@navscan.co.za');
                break;
            case 'enterprise':
                alert('Enterprise Portal: Secure authentication required');
                break;
        }
    });
});

scanBtn.addEventListener('click', () => {
    scanBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        scanBtn.style.transform = 'scale(1)';
    }, 100);
    alert('Camera scanner will be integrated in next version');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburgerMenu.classList.contains('open')) {
        toggleMenu();
    }
});
