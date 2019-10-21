import React, {Component} from 'react';
import GotService from "../../services/gotService";
import styled from 'styled-components';
import Spinner from "../../spinner/spinner";

const ListGroupItem = styled.li`
    cursor: pointer;
    background-color: white;
`

const List = styled.ul`
    padding-bottom: 40px;
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
        const {renderItem, createNextId, onItemSelected} = this.props;

        return arr.map((item, i) => {
            // const {id} = item;
            const label = renderItem(item);

            return (
                <ListGroupItem 
                    key={createNextId()} 
                    className="list-group-item"
                    onClick={ () => onItemSelected(i)}>
                    {label}
                </ListGroupItem>
            )
        })
    }

    render() {
        const {itemList} = this.state;
        const content = (!itemList) ? <ListGroupItem><Spinner/></ListGroupItem> : this.renderItems(itemList);
        
        return (
            <List className="item-list list-group">
                {content}
            </List>
        );
    }
}