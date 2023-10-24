import { hasHash } from "../js/router.js";
import { equal } from "../js/utils.js";

export const 
    getLinks = () => { 
        setAllLinks(); 
        return linksList;
    },
    getBreadcrumbLinks = (l) => { 
        cleanBreadcrumb();
        setBreadcrumbList(l); 
        return breadcrumb;
    };

let 
    links = [], 
    linksList = [],
    breadcrumb = [], 
    id = () => getCurrentID()[0].id,
    cleanBreadcrumb = () => breadcrumb = [],
    checkCurrentID = () => id() && id() > 1,
    checkIDIsZero = (l) => equal(l.id, 1) || equal(l.id, 2) || equal(l.id, 3),
    checkIDNotZero = (l) => equal(l.id, id() - 1) || equal(l.id, id()) || equal(l.id, id() + 1),
    checkHash = (l) => hasHash(l.link) ? l.id : false,    
    getCurrentID = () => links.filter((l) => checkHash(l)),    
    setBreadcrumb = (l) => breadcrumb.push(l),
    setBreadcrumbList = (l) => l.filter((i) => setFilterLinks(i)),   
    setAllLinks = () => equal(links.length, id()) ? setLastLinks() : setLinks(),
    setLinks = () => linksList = links.filter((l) => setLinksList(l)),
    setLastLinks = () => linksList = [links[links.length - 2], links[links.length - 1], links[0]],    
    setLinksList = (l) => !checkCurrentID() ? callCheckIDIsZero(l) : callCheckIDIsNotZero(l),
    setFilterLinks = (i) => links.filter((l) => equal(l.slug, i) ? setBreadcrumb(l) : false),
    callCheckIDIsNotZero = (l) => checkIDNotZero(l) ? l : false,
    callCheckIDIsZero = (l) => checkIDIsZero(l) ? l : false;
