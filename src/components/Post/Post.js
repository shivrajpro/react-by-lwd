export function Post(props) {
    return <div className="border border-gray-500 p-2 m-2 inline-block cursor-pointer"
        onClick={props.postClicked}
    >
        {/* <p>post works!</p> */}
        <p>id : {props.post.id} </p>
        <p>title : {props.post.title} </p>
        <p>description : {props.post.description}</p>
        <button className="bg-red-500 text-white m-2 p-2"
        onClick={props.postDeleteClicked}
        >Delete</button>
    </div>
}