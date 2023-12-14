const { Component } = require("react");

class AddPost extends Component {
    render() {
        return <div className="px-2 py-2">
            <h2 className='text-2xl font-bold'>Add Post</h2>
            <form className="my-2">
                <div>
                    <label className='block'>Title</label>
                    <input type="text" className='px-3 py-1 block w-1/4 border border-gray-600  focus:outline-none focus:border-red-600'></input>
                </div>
                <div>
                    <label>Description</label>
                    <textarea type="text" className='px-3 py-1 block w-1/4 border border-gray-600  focus:outline-none focus:border-red-600'></textarea>
                </div>
                <div>
                    <label>Status</label>
                    <select className='px-3 py-1 block w-1/4 border border-gray-600  focus:outline-none focus:border-red-600'>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <div className="my-2">
                    <button className='bg-indigo-900 text-white px-5 py-2'>Add Post</button>
                </div>
            </form>
        </div>
    }
}

export default AddPost;