import React, {Component} from 'react';
import './post-status-filter.css';
import {Button} from 'react-bootstrap';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: "all", label: "Все"},
            {name: "like", label: "Понравилось"}
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? "info" : "outline-secondary";
            return(
                <Button key={name} type="button" variant={clazz} onClick={() => {this.props.onFilterSelect(name)}}>{label}</Button>
            )
        });
        return (
        <div className="btn-group">{buttons}</div>
    )}
}

