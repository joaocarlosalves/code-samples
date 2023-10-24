export const 
    config = (dt) => ({ bubbles: true, cancelable: true, composed: true, detail: { data: dt } }),
    event = (ev, dt) => new CustomEvent(ev, config(dt)),
    setEvent = (ev, dt) => document.dispatchEvent(event(ev, dt)),
    clip = (c) => navigator.clipboard.writeText(c).then((c) => setEvent('clipboard', c)),
    elements = (el) => document.querySelectorAll(el),
    element = (el) => document.querySelector(el),
    inner = (el, ct) => element(el).innerHTML = ct,
    add = (el, ct) => inner(el, ct),
    clear = (el) => inner(el, ''),
    remove = (el) => element(el).remove(),
    insert = (pos, el, ct) => element(el).insertAdjacentHTML(pos, ct),
    equal = (i, eq) => i == eq,
    less = (i, eq) => i < eq,
    equalLess = (i, eq) => i <= eq,
    equalMore = (i, eq) => i >= eq,
    sort = (obj) => Object.entries(obj).sort(([,a], [,b]) => a-b).reduce((r, [k,v]) => ({...r, [k]: v}), {});
    