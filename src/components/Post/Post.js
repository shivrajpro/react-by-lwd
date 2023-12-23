export function Post(props) {
    return <div className="border border-gray-500 p-2 m-2" >
        {/* <p>post works!</p> */}
        <p>id : {props.post.id} </p>
        <p>title : {props.post.title} </p>
        <p>description : {props.post.description}</p>
    </div>
}