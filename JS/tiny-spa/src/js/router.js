import { setEvent } from "./utils.js";

export const 
    setHash = (hash) => { 
        setHistory(hash);
        setEvent('hashchanged', hash);
    },
    setHistory = (hash) => history.pushState(null, null, `#/${ hash }`),
    hasHash = (link) => link.includes(getHash()),
    getHash = () => window.location.hash.replace(/\#\/|\/$/gm, ''),
    getHashSplit = () => getHash().split('/'),
    getPage = () => getHash().split('/').pop();