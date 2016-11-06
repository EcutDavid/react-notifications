import React, { Component, PropTypes } from 'react';


// using this component as a simple dump component only handle the appearance
export default class Item extends Component {
    static propTypes = {
        collapse: PropTypes.bool,
        id: PropTypes.string,
        level: PropTypes.number,
        label: PropTypes.string,
        indentSize: PropTypes.number,
        // onClickNode: PropTypes.function
    }

    static defaultProps = {
        label: 'No label',
        level: 0,
        collapse: true,
        indentSize: 20
    }

    render() {
        const {label, level, indentSize} = this.props;

        return (
            <div
                style={{ marginLeft: indentSize * level}}
            >
                {label}
            </div>
        );
    }
}
