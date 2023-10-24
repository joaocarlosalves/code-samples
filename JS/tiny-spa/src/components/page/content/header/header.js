import Template from "../../../template.js";
import { getBreadcrumbLinks } from "../../../../data/links.js";
import { getHashSplit } from "../../../../js/router.js";

const template = `
    <header column>
        <h4 border-gray-2 border-bottom border-1 pb-10px mb-5px></h4>     
        <b-breadcrumb></b-breadcrumb>
    </header>
`;

export default class ContentHeaderComponent extends Template {  
    constructor() {
        super();
        super.setTemplate(template);        
    }

    connectedCallback() {
        this.mountTitle();
        this.listenHash();
    }

    listenHash() { window.addEventListener('hashchanged', () => this.mountTitle()) }

    mountTitle() { getBreadcrumbLinks(getHashSplit()).forEach((b) => this.setText(b.title)) }

    setText(t) { super.elem('h4').innerText = t }

    
}

window.customElements.define("content-header", ContentHeaderComponent);