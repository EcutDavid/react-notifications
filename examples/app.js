import React from 'react';
import ReactDOM from 'react-dom';
import Demo from 'demo';

const MOCK_NOTIFICATIONS = [{
    type: 'info',
    message: 'Hello'
}, {
    type: 'warning',
    message: 'Hi'
}, {
    type: 'error',
    message: 'Oooops'
}];

class App extends React.Component {
    constructor() {
        super();
        this.state = {notifications: MOCK_NOTIFICATIONS};
        setInterval(() => {
            const { notifications } = this.state;
            const newNotifications = notifications.concat({
                type: 'error',
                message: `Oooops ${notifications.length}`
            })
            this.setState({notifications: newNotifications});
        }, 1000);
    }

    oncloseHandle(index) {
        const { notifications } = this.state;

        const newNotifications =
            notifications.slice(0, index).concat(notifications.slice(index + 1));

        this.setState({notifications: newNotifications});
    }

    render() {
     return (
         <Demo
             capacity={10}
             notifications={this.state.notifications}
             onClose={this.oncloseHandle.bind(this)}
         />
     );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
