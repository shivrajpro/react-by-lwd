import axios from "axios";
import { store } from "../store/store";
const axiosInstance = axios.create({
    baseURL: 'https://legacy-react-v17-default-rtdb.firebaseio.com'
})

axiosInstance.interceptors.request.use(config=>{
    // console.log('config',config);
    config.params = config.params || {};
    config.headers = config.headers || {};
    const state = store.getState();
    console.log('store',state);
    config.params['auth'] = state.auth.auth.idToken;
    config.headers['auth'] = `Bearer ${state.auth.auth.idToken}`;
    // Cannot access 'CREATE_POST_ACTION' before initialization
    // axios is asking for initialization of the actions
    // actions are depending on the post service -> axios instance
    // CYCLIC dependency is created
    // Solution: create a PostTypes and add all action variables in it
    return config;
})

export default axiosInstance;
