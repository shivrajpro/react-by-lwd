import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Header(props) {
    return (<div>
        {/* <p>header works!</p> */}
        <div className="bg-red-500 text-white p-2 text-white flex items-center justify-between" >
            <h2 className="font-bold text-lg" >React Router</h2>
            <div className="" >
                <Link to='' className="px-2" >Home</Link>
                <Link to='/posts' className="px-2" >Posts</Link>
                <Link to='/sign-up' className="px-2" >SignUp</Link>
                <Link to='/sign-in' className="px-2" >SignIn</Link>
            </div>
        </div>
    </div>)
}