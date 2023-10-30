export const getPage = () => window.location.pathname.split('/').splice(1)[1];

export const pageTitle = () => getPage() ? getPage().toUpperCase() : 'Home';
