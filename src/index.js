import React, { Component } from 'react';
import Item from './components/Item';

import './styles/control.scss';

const mockRawData = {
    label: 'rootNode', level: 0, id: 1, children: [
        { label: 'node1', level: 1, id: 2 },
        { label: 'node2', level: 1, id: 3, children: [
            { label: 'node3', level: 2, id: 4 },
            { label: 'nodeX', level: 2, id: 5 , children: [
                { label: 'nodeN', level: 2, id: 6 },
                { label: 'nodeY', level: 2, id: 7 }
            ]}
        ]}
    ]
};

export default class Main extends Component {
    rednerTree(node, key) {
        const { children, collapse, label, level, id } = node;
        const { defaultExpand } = this.props;
        return (
            <Item
                collapse={ collapse === undefined ? !defaultExpand : collapse }
                label={label}
                level={level}
                id={id}
                key={key}
                onClick={e => {
                    e.stopPropagation();
                    node.collapse = node.collapse === undefined ? defaultExpand : !node.collapse;
                    this.forceUpdate();
                }}
            >
            {
                children && children.map((d, i) => this.rednerTree(d, i))
            }
            </Item>
        )
    }

    render() {
        return this.rednerTree(this.props.nodes || mockRawData);
    }
}
