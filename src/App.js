import axios from 'axios';
import './App.css';
import Posts from './components/Posts/Posts';

axios.defaults.baseURL = 'https://legacy-react-v17-default-rtdb.firebaseio.com';

axios.defaults.headers.common['Authorization'] = '[app.js] auth token';

axios.interceptors.request.use(request=>{
    console.log('request',request);
    request.headers.channelName = 'leela web dev';
    return request;
})

axios.interceptors.response.use(response=>{
    console.log('response',response);
    return response;
})
function App() {
    return (
        <div className='m-2 p-2 border border-gray-500 container mx-auto'>
            <p>app works!</p>
            <h1 className='font-bold text-xl my-3' >Posts Data</h1>
            <div> <Posts/> </div>
        </div>
    );
}

export default App;
