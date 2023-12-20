import { Component } from 'react';
import AddPost from '../AddPost/AddPost';
import SinglePost from '../SinglePost/SinglePost';

class Posts extends Component {
    state = {
        posts: [
            {
                id: '1',
                title: 'post 1',
                description: 'post1 description 1',
            },
            {
                id: '2',
                title: 'post 2',
                description: 'post1 description 2',
            },
            {
                id: '3',
                title: 'post 3',
                description: 'post1 description 2',
            },
        ],

        postTitle: 'Posts List',
        showPosts: true,
        count: false,
    };

    togglePostsHandler = () => {
        this.setState({
            showPosts: !this.state.showPosts,
        });
    };

    getPosts() {
        if (!this.state.showPosts) return null;

        // let posts = this.state.posts.map((post) => (
        //     <SinglePost
        //         title={post.title}
        //         description={post.description}
        //     />
        // ));

        let posts = [];

        for (let post of this.state.posts) {
            posts.push(
                <SinglePost
                    title={post.title}
                    description={post.description}
                    titleChange={this.titleChangeHandler.bind(this, post.id)}
                />,
            );
        }
        return (
            <div className='flex my-3'>
                {this.state.posts.map((post, index) => {
                    return (
                        <SinglePost
                            key={post.id}
                            title={post.title}
                            description={post.description}
                            titleChange={this.titleChangeHandler.bind(this, post.id)}
                        />
                    );
                })}
            </div>
        );
    }

    titleChangeHandler = (id, event)=>{
        const postIndex = this.state.posts.findIndex(p=>p.id === id);
        const posts = [...this.state.posts];

        posts[postIndex].title = event.target.value;
        this.setState({posts})
    }
    render() {
        return (
            <div>
                <div>{this.state.count && 'show Count'}</div>
                <h2 className='text-2xl my-3'>{this.state.postTitle}</h2>
                <div>
                    <button
                        onClick={this.togglePostsHandler}
                        className='px-5 py-3 bg-red-500 text-white'
                    >
                        {this.state.showPosts
                            ? 'Hide Posts'
                            : 'Show Posts'}
                    </button>
                </div>
                <hr />
                {this.getPosts()}

                <div className='my-5'>
                    <AddPost />
                </div>
            </div>
        );
    }
}

export default Posts;