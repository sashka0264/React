import React, {Component} from 'react';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import styled from "styled-components";
import nextId from "react-id-generator";

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "Going to learn React", important: true, id: nextId()},
                {label: "That is so good", important: false, id: nextId()},
                {label: "I need a break...", important: false, id: nextId()}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    deleteItem(id) {
        this.setState( ({data}) => {
            const index = data.findIndex( (item) => item.id === id);
            
            const before = data.slice(0, index);

            const after = data.slice(index + 1);

            const newArray = [...before, ...after];

            return {
                data: newArray
            }
        })
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: nextId()
        }
        this.setState( ({data}) => {
            const newArray = [...data, newItem];
            console.log(data);
            return {
                data: newArray
            }
        });
        console.log(body);
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
                <PostAddForm onAdd={this.addItem}/>
            </AppBlock>
        )
    }

}