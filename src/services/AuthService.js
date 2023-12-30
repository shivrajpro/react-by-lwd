import axios from "axios";

const API_KEY = 'AIzaSyC_b_yfhdwTY_JeXPkAZ-WiAtvmBtKGJDE';
const URL = 'https://identitytoolkit.googleapis.com/v1';
export function signUp(email, password) {
    const payload = {
        email,
        password,
        returnSecureToken: true
    }
    return axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        payload
    )
}

export function signIn(email, password){
    const payload = {
        email,
        password,
        returnSecureToken: true
    }
    return axios.post(`${URL}/accounts:signInWithPassword?key=${API_KEY}`, payload)
}
export function formatError(errorResponse) {
    switch (errorResponse.error.message) {
        case 'EMAIL_EXISTS':
            return 'email already exists';
        case 'INVALID_LOGIN_CREDENTIALS' :
            return 'invalid email id or password'
        default: return '';
    }
}