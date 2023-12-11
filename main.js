const element = React.createElement('div', {}, 'Hello World',
React.createElement('h2', {className:'leela'}, 'Leela Web Dev')
);

const element2 = (
    <div>
        Hello World
        <h2>
            Leela Web Dev
        </h2>
    </div>
)

ReactDOM.render(element2, document.getElementById('app'));