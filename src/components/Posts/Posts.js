import { Link, Route } from "react-router-dom/cjs/react-router-dom";
import SinglePost from "../../SinglePost/SinglePost";

export function Posts(props) {
    console.log("Posts", props);
    function backToHome() {
        props.history.replace('/');
    }
    return (
        <div>
            <p>Posts works!</p>
            <div className="m-2">
                <ul className="flex" >
                    <li className="mx-2 underline decoratino-sky-500" >
                        <Link to='/posts/1' > Post 1 </Link>
                    </li>
                    <li className="mx-2 underline decoratino-sky-500" >
                        <Link to='/posts/2' > Post 2 </Link>
                    </li>
                    <li className="mx-2 underline decoratino-sky-500" >
                        <Link to='/posts/3' > Post 3 </Link>
                    </li>
                    <li className="mx-2 underline decoratino-sky-500" >
                        <Link to='/posts/4' > Post 4 </Link>
                    </li>
                </ul>
            </div>
            <button className="text-white bg-red-500 p-2 my-2"
                onClick={backToHome}>
                Back to Home
            </button>
            <div>
                <Route path='/posts/:id' component={SinglePost} />
            </div>
        </div>
    )
}