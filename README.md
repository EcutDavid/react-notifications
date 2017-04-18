# react-notifications
Reusable notification component

### Example
```
import React from 'react';
import ReactNotifications from '@davidguan/react-notifications';

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

export default class Component extends React.Component {
    constructor() {
        super();
        this.state = {notifications: MOCK_NOTIFICATIONS};
    }

    oncloseHandle(index) {
        const { notifications } = this.state;

        const newNotifications =
            notifications.slice(0, index).concat(notifications.slice(index + 1));

        this.setState({notifications: newNotifications});
    }

    render() {
     return (
         <ReactNotifications
             capacity={10}
             notifications={this.state.notifications}
             onClose={this.oncloseHandle.bind(this)}
         />
     );
    }
}
```

### API
**capacity**: the maximum for the count of message bars displayed at the same time.   
**notifications**: the message list, `type` and `message` should be provided. currently, three types supported: `info`, `warning` and `error`.   
**onClose**: the handler for message bar's close button clicking event.    
**style**: providing style rules here if you need rewrite the styling.

### Online DEMO
![](https://cloud.githubusercontent.com/assets/10692276/25136744/67fed5d8-2488-11e7-968c-3b3e2b7fe261.png)
[Play with this DEMO](http://davidguan.me/my-react-storybook/?selectedKind=React%20Notifications&selectedStory=Add%20new%20message%20with%20text%20input&full=0&down=1&left=1&panelRight=0).
