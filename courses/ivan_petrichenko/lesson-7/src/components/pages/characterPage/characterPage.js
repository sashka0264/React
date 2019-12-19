import React, {Component} from 'react';
import ItemList from "../itemList/itemList";
import ItemDetails, {Field} from "../itemDetails/itemDetails";
import ErrorMessage from "../../errorMessage/errorMessage";
import RowBlock from "../rowBlock/rowBlock";

export default class CharactersPage extends Component {

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
                renderItem={(item) => `${item.name} (${item.gender})`}
            />
        )

        const itemDetails = (
            <ItemDetails getIdData={getIdData} itemId={itemId}>
                <Field field="gender" label="Gender"/>
                <Field field="born" label="Born"/>
                <Field field="died" label="Died"/>
                <Field field="culture" label="Culture"/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}