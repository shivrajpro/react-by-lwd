import { deleteTokenFromLocalStorage, formatError, runLogoutTimer, saveTokenInLocalStorage, signIn, signUp } from "../../services/AuthService";

export const SIGN_UP_ACTION = '[signup] sign up';
export const SIGN_UP_SUCCESS = '[signup] sign up success';
export const SIGN_UP_FAILED = '[signup] sign up failed';
export const TOGGLE_LOADING_ACTION = '[loading] toggle loading';


export const SIGN_IN_ACTION = '[signin] sign in';
export const SIGN_IN_SUCCESS = '[signin] sign in success';
export const SIGN_IN_FAILED = '[signin] sign in failed';

export const LOGOUT_ACTION = '[logout] logout';

export function signUpAction(email, password, history) {
    return (dispatch)=>{
        return signUp(email, password)
        .then(
            response=>{
                saveTokenInLocalStorage(response.data);
                dispatch(signUpSuccess(response.data));
                history.push('/');
            }
        ).catch(error=>{
            const errorMsg = formatError(error.response.data);
            dispatch(signUpFailed(errorMsg));
        })
        .finally(()=>{
            dispatch(toggleLoadingAction(false));
        })
    }
}

export function signUpSuccess(data) {
    return {
        type: SIGN_UP_SUCCESS,
        payload: data
    }
}

export function signUpFailed(message) {
    return {
        type: SIGN_UP_FAILED,
        payload: message
    }
}

export function toggleLoadingAction(status) {
    return {
        type: TOGGLE_LOADING_ACTION,
        payload: status
    }
}

export function signInAction(email, password, history) {
    return (dispatch)=>{
        signIn(email, password)
        .then(response=>{
            saveTokenInLocalStorage(response.data);
            runLogoutTimer(dispatch, response.data.expiresIn, history);
            dispatch(signInSuccess(response.data));
            history.push('/');
        })
        .catch(e=>{
            const errorResponse = e.response.data;
            dispatch(signInFailed(errorResponse.error.message))
        })
        .finally(()=>{
            dispatch(toggleLoadingAction(false));
        })
    }
}

export function signInSuccess(data) {
    return {
        type: SIGN_IN_SUCCESS,
        payload: data
    }
}

export function signInFailed(message) {
    return {
        type: SIGN_IN_FAILED,
        payload: message
    }
}

export function logoutAction(history) {
    deleteTokenFromLocalStorage();
    // history.push('/');
    return {
        type: LOGOUT_ACTION
    }
}