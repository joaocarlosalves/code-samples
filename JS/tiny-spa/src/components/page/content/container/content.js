import Template from "../../../template.js";
import { getPageContent } from "../../../../js/page.js";

export default class ContentContainer extends Template {  
    constructor() { super() }

    connectedCallback() {
        this.mountContent();
        this.listenHash();
    }

    mountContent() { getPageContent().then((p) => super.setTemplate(p)) }

    listenHash() { window.addEventListener('hashchanged', () => this.mountContent()) }
}

window.customElements.define("content-container", ContentContainer);
