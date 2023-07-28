import './reset.css';
import './style.css';

import { initializeMain } from './components/main/main';
import initializeHeader from './components/header/header';
import initializeAside from './components/aside/aside';

const initializeScript = function initializeScript() {
    initializeMain();
}

initializeScript();