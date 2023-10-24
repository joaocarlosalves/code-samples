import Template from "../template.js";

const template = `
    <div flex full gap-15px mb-15px>
        <button call-dialog rounded bold id="c">Center</button>
        <button call-dialog rounded bold id="top-dialog">Top</button>
        <button call-dialog rounded bold id="right-dialog">Right</button>
        <button call-dialog rounded bold id="left-dialog">Left</button>
        <button call-dialog rounded bold id="bottom-dialog">Bottom</button>
    </div>

    <div flex full gap-15px>
        <button call-dialog rounded bold id="top-left-dialog">Top Left</button>
        <button call-dialog rounded bold id="top-right-dialog">Top Right</button>
        <button call-dialog rounded bold id="bottom-left-dialog">Bottom Left</button>
        <button call-dialog rounded bold id="bottom-right-dialog">Bottom Right</button>
    </div>

    <div flex full class="ct-btn dialogs"></div>
`;

export default class Dialogs extends Template {
    constructor() {
        super();
        super.setTemplate(template);
    }

    connectedCallback() { this.setClickEvent() }

    setClickEvent() { super.elems('button').forEach((i) => this.setClick(i)) }
    setClick(i) { i.addEventListener('click', () => this.setOpenDialog(i.id, i.innerHTML)) }
    setCloseButtons() { super.elems('[close-dialog]').forEach((i) => this.addCloseEvent(i)) }
    addCloseEvent(i) { i.addEventListener('click', () => this.setClose()) }
    setOpen() { super.elem('dialog').showModal() }
    setClose() { super.elem('dialog').close() }
    setMountDialog(id, txt) { super.elem('.dialogs').innerHTML = this.setMountHTML(id, txt) }

    setOpenDialog(id, txt) {
        this.setMountDialog(id, txt);
        this.setCloseButtons();
        this.setOpen();
    }

    setMountHTML(id, txt) {
        return `
            <dialog id='${id}' ${id}>
                <header>
                    <span center gap-10px>
                        <span fs-20px color-dark bold>Dialog Title</span>
                        <span fs-16px color-gray fw-400>(${ txt })</span>
                    </span>
                    <button close-dialog>&#x2716</button>
                </header>

                <p mt-20px mb-40px>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iste debitis blanditiis porro sit omnis fugiat saepe eatae, aperiam?
                </p>

                <div centered flex full gap-20px mb-5px>
                    <button full-rounded close-dialog bg-pink-1 small-button color-red bold fs-15px>CANCEL</button>
                    <button full-rounded close-dialog bg-success color-green-5 fs-22px bold>FINISH</button>
                </div>  
            </dialog>
        `;
    }
}

window.customElements.define("b-dialogs", Dialogs);