import React, { Component } from 'react';
import MessageBar from './components/messageBar';

import './styles/control.scss';

export default class Main extends Component {
    render() {
        const { capacity, style, notifications, onClose } = this.props;

        return (notifications.length && capacity) ? (
            <div className='notifications-control' style={style}>
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
        ) : null;
    }
}
