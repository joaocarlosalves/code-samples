import Template from "../../template.js";

const template = `
    <header mb-20px>
        <div b-container space-between center>
            <a route=""><img full-rounded src="./src/img/logo.png" width="220px" /></a>
            
            <div center gap-30px pr-35px>
                <header-menu></header-menu>
            </div>
        </div>
    </header>
`;

export default class MainHeader extends Template {  
    constructor() {
        super();
        super.setTemplate(template);        
    }
}

window.customElements.define("main-header", MainHeader);
