import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { signUpAction, toggleLoadingAction } from "../../store/actions/AuthActions";
import Loader from "../../components/Loader/Loader";

function SignUp(props) {
    // console.log('SignUp', props);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let initErrors = { email: '', password: '' };
    const [errors, setErrors] = useState(initErrors);

    const dispatch = useDispatch();

    function onSignUp(e) {
        e.preventDefault();
        let hasError = false;

        const errorObj = { ...errors };
        if (email === '') {
            errorObj.email = 'email is required';

            hasError = true;
        }
        if (password === '') {
            errorObj.password = 'password is required';

            hasError = true;
        }

        setErrors(errorObj);
        if (hasError) return;

        dispatch(toggleLoadingAction(true));
        dispatch(signUpAction(email, password));
    }
    return (
        <div className="p-2">
            <p>singup works!</p>
            {props.showLoader && <Loader/>}
            <h1 className="text-2xl font-extrabold" >Sign Up Form</h1>
            {props.errorMsg && <div className="p-2 bg-red-500 text-white">
                {props.errorMsg}
            </div>}
            {props.successMsg && <div className="p-2 bg-green-500 text-white">
                {props.successMsg}
            </div>}
            <div>
                <form onSubmit={onSignUp} >
                    <div>
                        <label>Email Id</label>
                        <div>
                            <input type="email"
                                className="p-2 my-2 border border-gray-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="text-red-900" >
                            {errors.email}
                        </div>
                    </div>
                    <div>
                        <label>Password</label>
                        <div>
                            <input type="password"
                                className="p-2 my-2 border border-gray-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="text-red-900" >
                            {errors.password}
                        </div>

                    </div>
                    <div>
                        <button type="submit"
                            className="p-2 my-2 text-white bg-green-500" >SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        errorMsg: state.auth.errorMessage,
        successMsg: state.auth.successMessage,
        showLoader: state.auth.showLoading
    }
}

export default connect(mapStateToProps)(SignUp);