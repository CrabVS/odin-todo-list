import './header.css';

import menuIcon from '../../res/menu.svg';

function initializeHeader() {
    const menuIconEl = document.getElementById('menu-icon');
    const aside = document.querySelector('aside');
    const main = document.querySelector('main');

    menuIconEl.innerHTML = `<img src="${menuIcon}" alt="menu-icon" class="icon">`;

    menuIconEl.addEventListener('click', () => {
        aside.classList.toggle('expand');
        main.classList.toggle('expand');
    });
}

export default initializeHeader;