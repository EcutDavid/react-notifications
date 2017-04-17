import React from 'react';
import ReactDOM from 'react-dom';
import Demo from 'demo';

class App extends React.Component {
    render() {
     return (
         <Demo defaultExpand={true} />
     );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
