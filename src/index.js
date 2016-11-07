import React, { Component, PropTypes } from 'react';
import Item from './components/Item';

const mockData = [
    { label: 'root', level: 0, id: 1 },
    { label: 'node1', level: 1, id: 2 },
    { label: 'node2', level: 1, id: 3 },
    { label: 'node3', level: 2, id: 4 },
    { label: 'nodeX', level: 2, id: 5 }
]

export default class Main extends Component {
    static propTypes = {

    }

    // TODO: Repoduce these mock components using DFS for sure.
    render() {
        return (
            <Item {...mockData[0]}>
                <Item {...mockData[1]} />
                <Item {...mockData[2]}>
                    <Item {...mockData[3]} />
                    <Item {...mockData[4]} />
                </Item>
            </Item>
        )
    }
}
