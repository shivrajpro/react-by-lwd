import axios from "axios";
import { logoutAction, signInSuccess } from "../store/actions/AuthActions";

const API_KEY = 'AIzaSyC_b_yfhdwTY_JeXPkAZ-WiAtvmBtKGJDE';
const authUrl = 'https://identitytoolkit.googleapis.com/v1';

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
    return axios.post(`${authUrl}/accounts:signInWithPassword?key=${API_KEY}`, payload)
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

export function saveTokenInLocalStorage(tokenDetails) {
    tokenDetails.expiryDate = new Date(new Date().getTime() + tokenDetails.expiresIn*1000);
    localStorage.setItem('userDetails',JSON.stringify(tokenDetails));
}

export function deleteTokenFromLocalStorage() {
    localStorage.removeItem('userDetails');
}

export function runLogoutTimer(dispatch, expirationTime) {
    // expirationTime is in seconds
    setTimeout(() => {
        console.log('runLogoutTimer');
        dispatch(logoutAction());
    }, expirationTime * 1000);
}

export function checkAutoLogin(dispatch, history) {
    const tokenDetailsStr = localStorage.getItem('userDetails');

    if(!tokenDetailsStr){
        dispatch(logoutAction(history));
        return;
    }

    const tokenDetails = JSON.parse(tokenDetailsStr);
    const expiryDate = new Date(tokenDetails.expiryDate);
    const todaysDate = new Date();

    if(todaysDate > expiryDate){
        dispatch(logoutAction(history));
        return;
    }

    dispatch(signInSuccess(tokenDetails));

    const expirationTime = expiryDate.getTime() - todaysDate.getTime();
    // console.log('expirationTime',expirationTime / 1000);
    runLogoutTimer(dispatch, expirationTime / 1000, history);
}