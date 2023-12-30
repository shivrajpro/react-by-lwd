import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { signInAction, toggleLoadingAction } from "../../store/actions/AuthActions";
import Loader from "../../components/Loader/Loader";

function SignIn(props) {
    console.log('SignIn', props);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let errorObj = { email:'', password: '' };
    const [errors, setErrors] = useState(errorObj);

    const dispatch = useDispatch();

    function onSignIn(e) {
        e.preventDefault();
        const errorObj = {email:'', password: ''};

        let hasError = false;
        if(email === ''){
            errorObj.email = 'email id is required';
            hasError = true;
        }
        if(password === ''){
            errorObj.password = 'password is required';
            hasError = true;
        }

        setErrors(errorObj);
        if(hasError) return;

        // console.log('form value',email, password);
        dispatch(toggleLoadingAction(true));
        dispatch(signInAction(email, password, props.history));
    }
    return (
        <div className="p-2">
            <p>sign in works!</p>
            <div>
                {props.showLoader && <Loader/>}
            </div>
            <div> {props.successMsg && 
                <p className="bg-green-500 text-white p-2" >sign in successful</p>} 
            </div>
            <div> {props.errorMsg && 
                <p className="bg-red-500 text-white p-2" >{props.errorMsg}</p>} 
            </div>
            <div className="my-2" >
                <form onSubmit={onSignIn}>
                    <div className="my-2" >
                        <label>Email</label>
                        <div>
                            <input type="text" 
                            className="my-2 p-2 border border-gray-500" 
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                        <div className="text-red-600" >
                            {errors.email}
                        </div>
                    </div>
                    <div className="my-2">
                        <label>Password</label>
                        <div>
                            <input type="password" 
                            className="my-2 p-2 border border-gray-500" 
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>
                        <div className="text-red-600" >
                            {errors.password}
                        </div>
                    </div>
                    <div>
                        <button type="submit" 
                        className="bg-green-500 p-2 text-white" >Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const makeStateToProps = (state)=>{
    // console.log('makeStateToProps', state);
    return {
        errorMsg: state.auth.errorMessage,
        successMsg: state.auth.successMessage,
        showLoader: state.auth.showLoading
    }
}
export default connect(makeStateToProps)(SignIn);