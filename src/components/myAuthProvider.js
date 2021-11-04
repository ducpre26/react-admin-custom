// in src/authProvider.js

import { showNotification } from "react-admin";

// eslint-disable-next-line import/no-anonymous-default-export

const authProvider = {
    // called when the user attempts to log in
    
    login: ({ username, password }) =>  {
        const data = { username, password };
        return fetch('http://42.116.186.64:8176/secured/ws/rest/v1/async/me/login', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
         })
        .then(response => {
            console.log(response.status);
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.status);
            }   
            return response.json();
        })
        .then(data => {
            localStorage.setItem('basicAuth',window.btoa(`${username}:${password}`));
            localStorage.setItem('authorities',data.body.roles);
        })
        .catch((err) => {
            throw new Error('s');
        });
    },
    // called when the user clicks on the logout button
    // called when the API returns an error
    logout: () => {
        localStorage.removeItem('basicAuth');
        localStorage.removeItem('authorities');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: (error) => {

        if (error === 401 || error === 403) {
            localStorage.removeItem('basicAuth');
            showNotification('Error code:'+error);
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
       
        return localStorage.getItem('basicAuth')
        ? Promise.resolve()
        
        : Promise.reject();
    },
    
    getIdentity: () => { 
        try {
            const { id, name} = JSON.parse(localStorage.getItem('basicAuth'));
            return Promise.resolve({ id, name});
        } catch (error) {
            return Promise.reject(error);
        }
    },

    getPermissions: () => {
        const role =localStorage.getItem('authorities');
        return role ? Promise.resolve() : Promise.reject();
    } 
};
export default authProvider;