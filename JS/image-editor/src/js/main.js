/*
https://code.tutsplus.com/tutorials/how-to-crop-or-resize-an-image-with-javascript--cms-40446
https://stackoverflow.com/questions/12652769/rendering-html-elements-to-canvas
*/


const 
    nav = document.querySelector('nav'),
    file = document.querySelector('input[type="file"]'),
    image = document.getElementById('image'),
    range = document.querySelectorAll('.range');

let menuList = [];

async function getMenuLists() {
    const 
        menuReq = await fetch('./src/js/menu-list.json'),
        filterListReq = await fetch('./src/js/filter-list.json');
    menuList = await menuReq.json(); 
    filterList = await filterListReq.json();
    mountMenu();
};

function mountMenu() { 
    menuList.forEach(m => {
        nav.innerHTML += `
            <details>
                <summary capitalize>${ m.id.replace('-', ' ') }</summary>
                <ul class="menu ${ m.id }" column ${ m.id == 'filters' ? 'gap-20px' : 'gap-5px' } mb-40px></ul>
            </details>        
        `;     
        
        if(m.id !== 'filters') mountOtherMenu(m);
        else setTimeout(() => mountFilterMenu(), 100);
    });
};


function mountOtherMenu(m) {
    m.menu.forEach(b => {
        document.querySelector(`.${ m.id }`).innerHTML += `<li column capitalize class='${ m.id }-item' id='${ b }'>${ b }</li>`;
    });

    setTimeout(() => setBlendModes(), 100);
};


function mountFilterMenu() {
    filterList.forEach(f => {
        document.querySelector(`.filters`).innerHTML += `
            <li column gap-10px>
                <span>${ f.id }</span>

                <input 
                    type="range" 
                    id="${ f.id }" 
                    class="range" 
                    name="${ f.id }" 
                    slug="${ f.slug }" 
                    value="${ f.value }" 
                    min="${ f.min }" 
                    max="${ f.max }" 
                    oninput="setFilters()" />

                <output for="${ f.id }" class="counter" id="${ f.id }-counter"></output>
            </li>
        `;
    });
};


function setSomeEffect(effect, element) {

}


function setFilters() {
    let filters = '';

    document.querySelectorAll('.range').forEach(r => {
        filters += `${ r.id }(${ r.value }${ r.getAttribute('slug') }) `;
        document.getElementById(`${ r.id }-counter`).value = `${ r.value }${ r.getAttribute('slug') }`
    });

    image.style.filter = filters;
};


function setBorderSize() {
    let borders = '';

    document.querySelectorAll('#border-size').forEach(r => {
        borders = `${ r.value }${ r.getAttribute('slug') } solid red`;
        document.getElementById(`border-size-counter`).value = `${ r.value }${ r.getAttribute('slug') }`
    });

    image.style.outline = borders;
};


function setBorderRadius() {
    let radius = '';

    document.querySelectorAll('#border-radius').forEach(r => {
        radius = `${ r.value }${ r.getAttribute('slug') }`;
        document.getElementById(`border-radius-counter`).value = `${ r.value }${ r.getAttribute('slug') }`
    });

    image.style.borderRadius = radius;
};


function setBlendModes() {
    document.querySelectorAll('.blend-mode-item').forEach(b => b.addEventListener('click', () => image.style.mixBlendMode = b.id));
};


function uploadImage() {
    const filereader = new FileReader();
    filereader.readAsDataURL(file.files[0]);
    filereader.onload = () => image.setAttribute('src', filereader.result);
};


function setUploadButtonClick() {
    document.querySelector('.upload-btn').addEventListener('click', () => file.click());
}


setTimeout(() => {
    document.querySelector(`.borders`).innerHTML += `
        <li column gap-10px>
            <span>Border Size</span>

            <input 
                type="range" 
                id="border-size" 
                name="border-size" 
                slug="px" 
                value="0" 
                min="0" 
                max="30" 
                oninput="setBorderSize()" />

            <output for="border-size" class="counter" id="border-size-counter"></output>
        </li>

        <li column gap-10px>
            <span>Border Radius</span>

            <input 
                type="range" 
                id="border-radius" 
                name="border-radius" 
                slug="px" 
                value="0" 
                min="0" 
                max="3000" 
                oninput="setBorderRadius()" />

            <output for="border-radius" class="counter" id="border-radius-counter"></output>
        </li>
    `;
}, 100);

document.body.insertAdjacentHTML('beforeend', '<canvas id="canvas"></canvas>')

/* document.getElementById('my-node').addEventListener('click', () => {
    const canvas = document.getElementById('canvas');
    const link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL("image/png");
    link.click();
    link.delete;
}) */


//INIT
getMenuLists();
setFilters();
setUploadButtonClick();