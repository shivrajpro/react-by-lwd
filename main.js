const element = React.createElement('div', {}, 'Hello World',
React.createElement('h2', {className:'leela'}, 'Leela Web Dev')
);

const channelName = 'Leela WebDev';
function getChannelName() {
    if(channelName === 'Leela WebDev') return <div> {channelName} </div>
    return <div>Leela Web Dev</div>
}

const element2 = (
    <div className='leela' tabIndex='1' >
        Hello World
        <h2>
           {getChannelName()}
        </h2>
    </div>
)

ReactDOM.render(element2, document.getElementById('app'));