"use strict";

import Navbar       from './views/components/Navbar.js'
import Bottombar    from './views/components/Bottombar.js'

// Lazy load view element:
const header = document.getElementById('header_container');
const footer = document.getElementById('footer_container');

const skel = async () => {

    // Render the Header and footer of the page
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();

    footer.innerHTML = await Bottombar.render();
    await Bottombar.after_render();
};

window.addEventListener('load', skel);