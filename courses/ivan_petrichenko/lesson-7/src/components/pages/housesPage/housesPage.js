import React, {Component} from 'react';
import ItemList from "../itemList/itemList";
import ItemDetails, {Field} from "../itemDetails/itemDetails";
import ErrorMessage from "../../errorMessage/errorMessage";
import RowBlock from "../rowBlock/rowBlock";

export default class HousesPage extends Component {

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        });
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
                renderItem={(item) => `${item.name} (${item.region})`}
            />
        )

        const itemDetails = (
            <ItemDetails getIdData={getIdData} itemId={itemId}>
                <Field field="ancestralWeapons" label="ancestralWeapons"/>
                <Field field="overlord" label="overlord"/>
                <Field field="region" label="region"/>
                <Field field="titles" label="titles"/>
                <Field field="words" label="words"/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}