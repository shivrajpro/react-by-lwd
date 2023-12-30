import { Link, withRouter } from "react-router-dom";
import { isAuthenticated } from "../../store/selectors/AuthSelectors";
import { connect, useDispatch } from "react-redux";
import { logoutAction } from "../../store/actions/AuthActions";

function Header(props) {
    console.log('Header', props);
    const dispatch = useDispatch();

    function onLogout(e) {
        // e.preventDefault();
        dispatch(logoutAction(props.history));
    }
    return (<div>
        {/* <p>header works!</p> */}
        <div className="bg-red-500 text-white p-2 text-white flex items-center justify-between" >
            <h2 className="font-bold text-lg" >React Router</h2>
            <div className="" >
                <Link to='' className="px-2" >Home</Link>
                <Link to='/posts' className="px-2" >Posts</Link>
                {!props.isAuth &&
                    <>
                        <Link to='/sign-up' className="px-2" >SignUp</Link>
                        <Link to='/sign-in' className="px-2" >SignIn</Link>
                    </>
                }
                {props.isAuth &&
                    <button className="px-2"
                        onClick={onLogout}>
                        Logout
                    </button>
                }
            </div>
        </div>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        isAuth: isAuthenticated(state)
    }
}
export default withRouter(connect(mapStateToProps)(Header));