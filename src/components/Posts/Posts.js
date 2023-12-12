import SinglePost from "../SinglePost/SinglePost";

const { Component } = require("react");

class Post extends Component {
    state = {
        posts: [
            { title: "First Post", description: "Post 1 description" },
            { title: "Second Post", description: "Post 2 description" }
        ],
        postTitle: "Post Lists"
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
        return (
            <div>
                <h2>{this.state.postTitle}</h2>
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
                <div>
                    <SinglePost title={this.state.posts[0].title} description={this.state.posts[0].description} />
                    <SinglePost title={this.state.posts[1].title} description={this.state.posts[1].description} />
                </div>
            </div>
        )
    }
}

export default Post;