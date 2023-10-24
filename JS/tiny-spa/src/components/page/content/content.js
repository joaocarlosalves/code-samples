import Template from "../../template.js";

const template = `
    <section router full space-between column>
        <div>
            <content-header></content-header>
            <content-container></content-container>
        </div>
        
        <content-footer></content-footer>
    </section>    
`;

export default class MainContent extends Template {  
    constructor() {
        super();
        super.setTemplate(template);        
    }
}

window.customElements.define("main-content", MainContent);
