function callDialog(id) { 
    document.querySelector('.dialogs').innerHTML = `
        <dialog id='${id}' ${id} style='width: 400px; padding: 10px 20px 20px'>
            <header class='full centered space-between' style='border-bottom: 1px solid var(--gray-2)'>
                <span><b>Confirmation</b></span>
                <button style='color: red; border: none; background: transparent; margin-right: -10px' onclick="closeDialog()">&#x2716</button>
            </header>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit tiae non nam obcaecati enim aut quo impedit quas dolor magnam? Beatae, aperiam?</p>

            <br />

            <div class='full center gap-10px'>
                <button class='warning' onclick="closeDialog()" bg-green>BUTTON 1</button>
                <button class='success' onclick="closeDialog()" bg-error>BUTTON 2</button>
            </div>  
        </dialog>
    `;

    document.querySelector(`#${id}`).showModal();
}

function closeDialog() { document.querySelector('dialog').close() }