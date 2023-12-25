export function Posts(props){
    function backToHome(){
        props.history.replace('/');
    }
    console.log("Posts",props);
    return (
        <div>
            <p>Posts works!</p>
            <button className="text-white bg-red-500 p-2 my-2"
            onClick={backToHome}
            >
                Back to Home
            </button>
        </div>
    )
}