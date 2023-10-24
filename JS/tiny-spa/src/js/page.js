import { getHash } from "./router.js";
import { baseUrl } from "./variables.js";

export const path = () => `${ baseUrl }/src/content/${ getHash() ? getHash() : 'index' }.html`;
    
export const getPageContent = async () => { 
    const res = await fetch(path());
    return await res.text();
};