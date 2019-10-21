import React, {Component} from 'react';
import ItemList from "../itemList/itemList";
import ErrorMessage from "../../errorMessage/errorMessage";
import {withRouter} from "react-router-dom";

class BooksPage extends Component {

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({error: true});
    }

    render() {
        const {createNextId, getData} = this.props;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <ItemList 
                createNextId={createNextId} 
                onItemSelected={(itemId) => {
                    this.props.history.push(`/books/${itemId+1}`);
                }}
                getData={getData}
                renderItem={(item) => `${item.name}`}
            />
        )
    }
}

export default withRouter(BooksPage);