import React, {Component} from 'react';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import styled from "styled-components";

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "Going to learn React", important: true, id: "dsdw"},
                {label: "That is so good", important: false, id: "sdsd"},
                {label: "I need a break...", important: false, id: "zxwe"}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id) {
        this.setState( ({data}) => {
            const index = data.findIndex( (item) => item.id === id);
            data.splice(index, 1);
            return {
                data: data
            }
        })
    }

    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
                </div>
                <PostList data={this.state.data} onDelete={this.deleteItem}/>
                <PostAddForm/>
            </AppBlock>
        )
    }

}