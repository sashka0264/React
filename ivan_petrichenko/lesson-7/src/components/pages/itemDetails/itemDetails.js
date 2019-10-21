import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from "../../spinner/spinner";

const ItemDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export default class ItemDetails extends Component {

    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getIdData} = this.props;
        if (!itemId) {
            return;
        }

        getIdData(itemId)
            .then((item) => {
                this.setState({item})
            });
    }

    render() {
        if (!this.state.item) {
            return <ItemDetailsBlock><Spinner/></ItemDetailsBlock>
        }
        
        const {item} = this.state;
        const {name} = this.state.item;
 
        return (
            <ItemDetailsBlock className="rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item});
                        })
                    }
                </ul>
            </ItemDetailsBlock>
        );
    }
}

export {Field}