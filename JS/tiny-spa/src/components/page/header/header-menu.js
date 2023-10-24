import Template from "../../template.js";
import { getHashSplit, setHash } from "../../../js/router.js";

const template = `
    <ul header-menu>
        <li><a route="start">Start Here</a></li>
        <li><a route="components">Components</a></li>
        <li><a route="examples">Examples</a></li>
        <li><a route="about">TinySPA?</a></li>
    </ul>
`;

export default class HeaderMenu extends Template {  
    constructor() {
        super();
        super.setTemplate(template);
        this.listenHash();         
    }

    connectedCallback() { 
        this.setActiveMenu(); 
        this.setRouterLink();               
    }

    cleanMenu(l) { l.classList.remove('active') }

    setActive(l) { l.classList.add('active') }

    setRouterLink() { super.elems('a').forEach((a) => this.setClick(a)) }

    setClick(a) { a.addEventListener('click', () => setHash(a.getAttribute('route'))) }

    checkRoute(l) { return l.getAttribute('route') == getHashSplit()[0] }

    listenHash() { window.addEventListener('hashchanged', () => this.setActiveMenu()) }

    setActiveMenu() { super.elems('[header-menu] li a').forEach((l) => this.resetMenu(l)) }

    resetMenu(l) {
        this.cleanMenu(l);
        this.checkRoute(l) ? this.setActive(l) : false;
    }    
}

window.customElements.define("header-menu", HeaderMenu);
