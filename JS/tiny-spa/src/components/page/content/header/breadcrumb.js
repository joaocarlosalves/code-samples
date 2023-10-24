import Template from "../../../template.js";
import { getBreadcrumbLinks } from "../../../../data/links.js";
import { getHashSplit, setHash } from "../../../../js/router.js";

export default class BreadcrumbComponent extends Template {  
    constructor() {
        super();
        super.setTemplate(`<ul breadcrumb-list></ul>`);
        this.listenHash();
    }

    connectedCallback() { this.resetBreadcrumb() }

    setRouterLink() { super.elems('a').forEach((a) => this.setClick(a)) }

    setClick(a) { a.addEventListener('click', () => setHash(a.getAttribute('route'))) }

    listenHash() { window.addEventListener('hashchanged', () => this.resetBreadcrumb()) }

    setHomeLink() { super.elem('[breadcrumb-list]').innerHTML = `<li><a route=''>Home</a></li>` }

    mountBreadcrumb() { getBreadcrumbLinks(getHashSplit()).forEach((b) => this.mountListItems(b)) }

    resetBreadcrumb() { 
        this.setHomeLink();
        this.mountBreadcrumb();
        this.setRouterLink();
    }

    mountListItems(b) {
        super.elem('[breadcrumb-list]').innerHTML += `
            <li>></li>
            <li><a route='${ b.link }'>${ b.title }</a></li>
        `;
    }
}

window.customElements.define("b-breadcrumb", BreadcrumbComponent);
