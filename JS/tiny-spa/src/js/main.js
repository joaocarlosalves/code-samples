import Template from "../components/template.js";
import { getHash } from "./router.js";
import { setEvent } from "./utils.js";
import "../components/index.js";

const template = `
    <main-header></main-header>

    <main b-container>
        <main-menu></main-menu>
        <main-content></main-content>
    </main>
`;

export default class TinySPA extends Template {  
    constructor() {
        super();
        super.setTemplate(template);        
    }

    connectedCallback() { this.setAddEvent() }

    disconnectedCallback() { this.setRemoveEvent() }

    setAddEvent() { window.addEventListener("hashchange", () => setEvent('hashchanged', getHash())) }

    setRemoveEvent() { window.removeEventListener("hashchange", () => setEvent('hashchanged', getHash())) }
}

window.customElements.define("tiny-spa", TinySPA);