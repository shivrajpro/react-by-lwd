import axios from "axios";

const instance = axios.create({
    baseURL:'https://legacy-react-v17-default-rtdb.firebaseio.com'
});

axios.defaults.headers.common['Authorization'] = '[instance] auth token';

export default instance;