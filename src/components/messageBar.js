import React, { Component } from 'react';

import '../styles/messageBar.scss';

export default class MessageBar extends Component {
    render() {
        const { type, message, onClose } = this.props;

        return (
            <div className='messageBar'>
                <header className={`message-header ${type}`}>
                    <p>{type}</p>
                    <i
                        className='close'
                        onClick={() => onClose()}
                    >
                        +
                    </i>
                </header>
                <article className='message-body'>
                    {message}
                </article>
            </div>
        )
    }
}
