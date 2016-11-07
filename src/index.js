import React, { Component, PropTypes } from 'react';
import Item from './components/Item';

const mockData = [
    { label: 'root', level: 0 },
    { label: 'node1', level: 1 },
    { label: 'node2', level: 1 },
    { label: 'node3', level: 2 },
    { label: 'node4', level: 2 }
]

export default class Main extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
            {
                mockData.map((d, i) => (
                    <Item {...d} key={i} id={i} onClick={id => console.log(id)}/>
                ))
            }
            </div>
        )
    }
}
