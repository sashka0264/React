import React, {Component} from 'react';
import ItemDetails, {Field} from "../../itemDetails/itemDetails";

export default class BooksItem extends Component {

    state = {
        error: false
    }

    render() {
        const {getIdData, itemId} = this.props;


        return (
            <ItemDetails getIdData={getIdData} itemId={itemId}>
                <Field field="numberOfPages" label="Number of pages"/>
                <Field field="publisher" label="Publiser"/>
                <Field field="released" label="Released"/>
            </ItemDetails>
        )
    }
}