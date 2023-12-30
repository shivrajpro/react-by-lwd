import { LOGOUT_ACTION, SIGN_IN_FAILED, SIGN_IN_SUCCESS, SIGN_UP_FAILED, SIGN_UP_SUCCESS, TOGGLE_LOADING_ACTION } from "../actions/AuthActions";

const initialState = {
    auth: {
        "idToken": "",
        "email": "",
        "refreshToken": "",
        "expiresIn": "",
        "localId": ""
    },
    successMessage:'',
    errorMessage: '',
    showLoading: false
};

export default function AuthReducer(state = initialState, action) {
    if (action.type === SIGN_UP_FAILED || action.type === SIGN_IN_FAILED) {
        return {
            ...state,
            auth: {
                "idToken": "",
                "email": "",
                "refreshToken": "",
                "expiresIn": "",
                "localId": ""                
            },
            successMessage: '',
            errorMessage: action.payload,
            showLoading: false
        }
    }

    if(action.type === LOGOUT_ACTION){
        return {
            ...state,
            auth: {
                "idToken": "",
                "email": "",
                "refreshToken": "",
                "expiresIn": "",
                "localId": ""
            },
            successMessage: '',
            errorMessage: '',
            showLoading: false
        }
    }

    if (action.type === SIGN_UP_SUCCESS) {
        return {
            ...state,
            auth: action.payload,
            successMessage: 'sign up successful',
            errorMessage: '',
            showLoading: false
        }
    }

    if(action.type === SIGN_IN_SUCCESS){
        return {
            ...state,
            auth: action.payload,
            successMessage:'sign in successful',
            errorMessage: '',
            showLoading: false
        }
    }

    if(action.type === TOGGLE_LOADING_ACTION){
        return {
            ...state,
            showLoading: action.payload
        }
    }
    return state;
}