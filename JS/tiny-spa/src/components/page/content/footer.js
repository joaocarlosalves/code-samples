import Template from "../../template.js";

const template = `
    <footer foot center full space-between border-top border-gray-2 border-1 pt-10px pb-25px mt-30px>
        <span full center fs15px fw200 color-gray-5>
            <a color-gray-5 href='https://joaocarlosalves.dev' target='_blank'>João Carlos Alves &nbsp; © ${ new Date().getFullYear() }</a> 
            
        </span>
    </footer>
`;

export default class ContentFooterComponent extends Template {
    constructor() {
        super();
        super.setTemplate(template);
    }
}

window.customElements.define("content-footer", ContentFooterComponent);
