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
        itemList: null,
        loading: true
    }

    componentDidMount() {
        const {getData} = this.props;

        getData() 
            .then( (itemList) => {
                this.setState({
                    itemList
                })
            })
    } 

    renderItems(arr) {
        return arr.map((item, i) => {
            // const {id} = item;
            const label = this.props.renderItem(item);

            return (
                <ListGroupItem 
                    key={this.props.createNextId()} 
                    className="list-group-item"
                    onClick={ () => this.props.onItemSelected(41+i)}>
                    {label}
                </ListGroupItem>
            )
        })
    }

    render() {
        const {itemList} = this.state;
        const content = (!itemList) ? <ListGroupItem><Spinner/></ListGroupItem> : this.renderItems(itemList);
        
        return (
            <ul className="item-list list-group">
                {content}
            </ul>
        );
    }
}