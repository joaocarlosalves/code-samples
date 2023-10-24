export default class Template extends HTMLElement {
    constructor() {
        super();
        this.shadow();
        this.template();   
        this.append();
    }

    shadow() { this.attachShadow({ mode: 'open' }) }

    template() { this.html = document.createElement('template') }

    append() { this.shadowRoot.appendChild(this.html.content.cloneNode(true)) }

    elem(el) { return this.shadowRoot.querySelector(el) }

    elems(el) { return this.shadowRoot.querySelectorAll(el) }

    attr(a) { return this.getAttribute(a) }

    attrs() { return this.attributes }

    setTemplate(html, css) {
        this.mountTemplate(html, css);
        this.append();
    }

    mountTemplate(html, css) {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" type="text/css" href="./src/css/styles.css" />
            <link rel="stylesheet" type="text/css" href="./src/css/docr.css" />
            ${ css ? '<link rel="stylesheet" type="text/css" href="./src/'+ css +'.css" />' : '' }                    
            ${ html }
        `;
    }
}
