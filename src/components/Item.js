import React, { Component, PropTypes } from 'react';

const defaultTreeNodeStyle = {
  cursor: 'pointer',
  fontSize: 22,
  fontWeight: 'bold'
}

// Using this component as a simple dump component only handle the appearance
export default class Item extends Component {
    static propTypes = {
        children: PropTypes.array,
        className: PropTypes.string,
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
        const {
            children,
            className,
            collapse,
            label,
            level,
            id,
            indentSize,
            onClick
        } = this.props;

        return (
            <div
                className={className || 'tree-node-item'}
                onClick={(e) => onClick && onClick(e, id)}
                style={{
                  ...defaultTreeNodeStyle,
                  marginLeft: indentSize * level + 20
                }}
            >
                <p>{label}</p>
                <div style={{ display: collapse ? 'none' : 'block' }}>
                    { children }
                </div>
            </div>
        );
    }
}
