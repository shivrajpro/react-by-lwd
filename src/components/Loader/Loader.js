import './Loader.css'

export default function Loader(props) {
    return (
        <div>
            <p>loader works!</p>
            <div className='overlay' ></div>
            <div className="lds-ring bg-gray-500">
                <div></div><div></div><div></div><div></div>
            </div>
            <p>loading...</p>
        </div>
    )
}