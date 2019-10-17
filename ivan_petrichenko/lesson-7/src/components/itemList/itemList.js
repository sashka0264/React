import React, {Component} from 'react';
import GotService from "../../services/gotService";
import styled from 'styled-components';
import Spinner from "../spinner/spinner";

const ListGroupItem = styled.li`
    cursor: pointer;
    background-color: white;
`

export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        charList: null,
        loading: true
    }

    componentDidMount() {
        this.gotService.getAllCharacters() 
            .then( (charList) => {
                this.setState({
                    charList
                })
            })
    } 

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <ListGroupItem 
                    key={this.props.createNextId()} 
                    className="list-group-item"
                    onClick={ () => this.props.onCharSelected(41+ i)}>
                    {item.name}
                </ListGroupItem>
            )
        })
    }

    render() {
        const {charList} = this.state;
        const content = (!charList) ? <ListGroupItem><Spinner/></ListGroupItem> : this.renderItems(charList);
        
        return (
            <ul className="item-list list-group">
                {content}
            </ul>
        );
    }
}