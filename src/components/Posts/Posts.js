import SinglePost from "../SinglePost/SinglePost";

const { Component } = require("react");

class Post extends Component {
    state = {
        posts: [
            { id:'frtnber1', title: "First Post", description: "Post 1 description" },
            { id:'frtnber2', title: "Second Post", description: "Post 2 description" },
            { id:'frtnber3', title: "Third Post", description: "Post 3 description" }
        ],
        postTitle: "Post Lists",
        showPosts: true
    }

    togglePosts = () => {
        this.setState({
            showPosts: !this.state.showPosts
        })
    }

    updateTitleHandler(title, e) {
        e.preventDefault();
        console.log('updating title');
        console.log(this);
        this.setState({ postTitle: title })
    }

    titleHandler = (title, e) => {
        e.preventDefault();
        console.log('updating title via property function');
        console.log(this);
        this.setState({ postTitle: title })
    }

    getPosts = () => {
        if (!this.state.showPosts) return null;

        return <div className="flex my-3" >
            {this.state.posts.map((post, index) => {
                return (
                    <SinglePost key={index} title={post.title} description={post.description} />
                )
            })}
        </div>

        // let posts = [];
        // for (const post of this.state.posts) {
        //     posts.push((
        //         <SinglePost title={post.title} description={post.description} />
        //     ))
        // }
        // return <div className="flex my-3" > {posts}</div>;

        // let posts = this.state.posts.map((post)=>(
        //     <SinglePost title={post.title} description={post.description} />
        // ))
        // return <div className="flex my-3" > {posts}</div>;
    }
    render() {
        // never do this
        /*
        setTimeout(() => {
            console.log('modifying');
            const posts = [...this.state.posts];

            posts[0].title = "modified title 1";
            posts[1].title = "modified title 2";

            // this.setState({posts})
            // this.setState({postTitle:"modified post title"})
        }, 3000);
        */

        let posts = null;
        if (this.state.showPosts) {
            posts = (<div>
                <SinglePost title={this.state.posts[0].title} description={this.state.posts[0].description} />
                <SinglePost title={this.state.posts[1].title} description={this.state.posts[1].description} />
            </div>)
        }

        return (
            <div>
                <h2>{this.state.postTitle}</h2>
                <div>
                    <button className="bg-red-400 text-white px-5"
                        onClick={this.togglePosts}>
                        {this.state.showPosts ? 'Hide Posts' : 'Show Posts'}
                    </button>
                </div>

                {this.getPosts()}
                {/* {this.state.showPosts &&
                    (<div>
                        <SinglePost title={this.state.posts[0].title} description={this.state.posts[0].description} />
                        <SinglePost title={this.state.posts[1].title} description={this.state.posts[1].description} />
                    </div>)
                } */}
                {/* { this.state.showPosts ? 
                (<div>
                    <SinglePost title={this.state.posts[0].title} description={this.state.posts[0].description} />
                    <SinglePost title={this.state.posts[1].title} description={this.state.posts[1].description} />
                </div>) : null
                } */}
                <div>
                    <a className="bg-red-400 text-white px-5"
                        onClick={this.updateTitleHandler.bind(this, "via method")}
                        href="https://www.google.com/"
                    >Update via method</a>

                    <a className="bg-red-400 text-white px-5 mx-2"
                        href="https://www.google.com/"
                        onClick={this.titleHandler.bind(this, 'via prop')}
                    >Update via property</a>

                    {/* <a className="bg-red-400 text-white px-5"
                        onClick={(e) => this.updateTitleHandler(e)}
                        href="https://www.google.com/"
                    >Update via method</a>

                    <a className="bg-red-400 text-white px-5 mx-2"
                        href="https://www.google.com/"
                        onClick={(e) => this.titleHandler(e)}
                    >Update via property</a> */}

                    {/* <a className="bg-red-400 text-white px-5 mx-2"
                    href="https://www.google.com/"
                    onClick={this.titleHandler}
                    >Update via property</a>
                    <a className="bg-red-400 text-white px-5"
                    onClick={this.updateTitleHandler.bind(this)}
                    href="https://www.google.com/"
                    >Update via method</a> */}

                    {/* <button className="bg-red-400 text-white px-5" 
                    // onClick={this.updateTitleHandler.bind(this)}
                    onClick={this.titleHandler}//arrow function
                    // this refers to click event of button
                    >Update Post</button> */}
                </div>
                <hr />
                {/* <div>
                    {posts}
                </div> */}
            </div>
        )
    }
}

export default Post;