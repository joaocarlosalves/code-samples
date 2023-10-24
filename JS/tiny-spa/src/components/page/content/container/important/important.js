import Template from "../../../../template.js";

const template = `
    <span flex full mt-20px mb-15px gap-5px>
        <b color-warning>Important: </b>
        <slot></slot>
    </span>
`;

export default class Important extends Template {
    constructor() {
        super();
        super.setTemplate(template);
    }
}

window.customElements.define("b-important", Important);