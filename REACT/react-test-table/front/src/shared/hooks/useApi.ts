const api = 'http://localhost:3000/';
const curApi = 'http://data.fixer.io/api/latest?access_key=c8840cc1aad9c01cb0ef165142676d82&base=EUR';

export const useApi = () => ({
    validateToken: async(token: string) => {
        const resp: Response = await fetch(`${ api }/token`, { 
            method: 'POST',
            body: JSON.stringify({ token })
        });
        return resp.json();
    },
    signIn: async(email: string, password: string) => {
        const resp: Response = await fetch(`${ api }/signin`, { 
            method: 'POST',
            body: JSON.stringify({ email, password })
        }); 

        // converter password para jwt ou base64

        return resp.json();
    },
    signOut: async() => (await fetch(`${ api }/signout`, { method: 'POST' })).json(),
    get: async(end: string) => (await fetch(`${ api }${ end }`, { method: 'GET' })).json(),
    getCurrencies: async() => (await fetch(`${ curApi }`, { method: 'GET' })).json()
});