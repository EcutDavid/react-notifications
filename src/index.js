import React, { Component } from 'react';
import MessageBar from './components/messageBar';

export default class Main extends Component {
    render() {
        const { capacity, notifications, onClose } = this.props;

        return (
            <div>
            {
                notifications.slice(0, capacity).map((d, i) => (
                    <MessageBar
                        {...d}
                        onClose={() => onClose(i)}
                        key={i}
                    />
                ))
            }
            </div>
        )
    }
}
