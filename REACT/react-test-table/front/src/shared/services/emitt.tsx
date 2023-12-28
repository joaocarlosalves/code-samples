export const setEvent = (e: string, d: string | number | []) => {
    document.dispatchEvent(
        new CustomEvent(`${ e }`, {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: { data: d }
        })
    );
}