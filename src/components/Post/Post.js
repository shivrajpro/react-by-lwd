export function Post(props) {
    return <a href="#" className="border border-gray-500 p-2 m-2 inline-block"
        onClick={props.postClicked}
    >
        {/* <p>post works!</p> */}
        <p>id : {props.post.id} </p>
        <p>title : {props.post.title} </p>
        <p>description : {props.post.description}</p>
    </a>
}