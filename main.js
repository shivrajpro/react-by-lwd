function render() {
    const element = `
    <div>
    <div>Hello World</div>
    <div>
        <input type="text">
    </div>
    <div>${new Date().toLocaleString()}</div>
    </div>
    `;
    
    document.getElementById('app1').innerHTML = element;
    
    
    const element2 = React.createElement('div', null,
        React.createElement('div', null, 'Hello World'),
        React.createElement('div', null,
            React.createElement('input', { type: 'text' })
        ),
        React.createElement('div', null, new Date().toLocaleString())
    )
    ReactDOM.render(element2, document.getElementById('app2'));
}


setInterval(render, 2000);
