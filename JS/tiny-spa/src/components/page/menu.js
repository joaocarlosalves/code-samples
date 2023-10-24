import Template from "../template.js";
import { Pages } from "../../data/menu.js";
import { setHash } from "../../js/router.js";

const template = `
    <aside>
        <nav>
            <ul menu></ul>
        </nav>
    </aside>
`;

export default class MainMenu extends Template {
    constructor() {
        super();
        super.setTemplate(template);
        this.listenHash();
    }

    connectedCallback() { this.mountMenu() }

    listenHash() { window.addEventListener('hashchanged', () => this.handleActiveMenu()) }

    setClick(a) { a.addEventListener('click', () => setHash(a.getAttribute('route'))) }

    handleActiveMenu() {}

    async mountMenu() {
        await this.mountMainMenu();
        await this.setRouterLink();
    }
    mountMainMenu() {
        return new Promise((resolve) => {
            Pages.forEach((p) => this.mountMainPagesMenuHTML(p));
            resolve();
        });
    }

    setRouterLink() {
        return new Promise((resolve) => {
            super.elems('a').forEach((a) => this.setClick(a));
            resolve();
        });
    }

    mountMainPagesMenuHTML(p) {
        super.elem('[menu]').innerHTML += `<li><a mtb-20px route="${ p.id }">${ p.title }</a></li>`;
    }    
}

window.customElements.define("main-menu", MainMenu);