import Template from "../template.js";

const template = `<div snack-bar class='ani-bottom-in' style='display: none'><slot></slot></div>`,
css = "components/snack-bar/snack-bar";

export default class SnackBar extends Template {
    constructor() {
        super();
        super.setTemplate(template, css);           
    }

    connectedCallback() { this.setAddEvent() }

    disconnectedCallback() { this.setRemoveEvent() }

    setAddEvent() { window.addEventListener('snack-bar', () => this.setOpen()) }

    setRemoveEvent() { window.removeEventListener('snack-bar', () => this.setOpen()) }

    setOpen() { 
        super.elem('[snack-bar]').style.display = 'flex';
        setTimeout(() => super.elem('[snack-bar]').style.display = 'none', 7000);
    }
}

window.customElements.define("snack-bar", SnackBar);