import React, { Component, PropTypes } from 'react';

import '../styles/Item.less'

// Using this component as a simple dump component only handle the appearance
export default class Item extends Component {
    static propTypes = {
        collapse: PropTypes.bool,
        id: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,
        level: PropTypes.number,
        label: PropTypes.string,
        indentSize: PropTypes.number,
        onClick: PropTypes.func
    }

    static defaultProps = {
        label: 'No label',
        level: 0,
        collapse: true,
        indentSize: 20
    }

    render() {
        const {label, level, id, indentSize, onClick} = this.props;

        return (
            <div
                onClick={() => onClick(id)}
                style={{ marginLeft: indentSize * level}}
            >
                {label}
            </div>
        );
    }
}
