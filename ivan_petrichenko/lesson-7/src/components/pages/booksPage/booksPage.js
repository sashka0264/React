import React, {Component} from 'react';
import ItemList from "../itemList/itemList";
import ItemDetails, {Field} from "../itemDetails/itemDetails";
import ErrorMessage from "../../errorMessage/errorMessage";
import RowBlock from "../rowBlock/rowBlock";

export default class BooksPage extends Component {

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({error: true});
    }

    render() {
        const {createNextId, onItemSelected, getData, getIdData, itemId} = this.props;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                createNextId={createNextId} 
                onItemSelected={onItemSelected}
                getData={getData}
                renderItem={(item) => (
                    <>
                        <span>
                        {item.name}
                        </span> 
                        <button>Click Me</button>
                    </>
                )}
            />
        )

        const itemDetails = (
            <ItemDetails getIdData={getIdData} itemId={itemId}>
                <Field field="numberOfPages" label="Pages"/>
                <Field field="publiser" label="Publiser"/>
                <Field field="released" label="Released"/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}