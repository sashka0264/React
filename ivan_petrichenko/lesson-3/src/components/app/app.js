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
                {label: "Going to learn React", important: true, like: false, id: nextId()},
                {label: "That is so good", important: false, like: false, id: nextId()},
                {label: "I need a break...", important: false, like: false, id: nextId()}
            ], 
            term: "",
            filter: "all"
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggle = this.onToggle.bind(this)
        
        this.onUpdateSearchInApp = this.onUpdateSearchInApp.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    onUpdateSearchInApp(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter( (item) => {
            return item.label.indexOf(term) > -1;
        })
    }

    filterPost(items, filter) {
        if (filter === "like") {
            return items.filter(item => item.like);
        } else {
            return items;
        }
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

    onToggle(id, name) {
        this.setState( ({data}) => {
            const index = data.findIndex((elem) => elem.id === id);

            const old = data[index];

            let element;
            (name === "important") ? (element = {important: !old.important}) : (element = {...old, like: !old.like});
            
            const newItem = {...old, ...element};

            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArray = [...before, newItem,...after];
            return {
                data: newArray
            }
        });
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter( (item) => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearchInApp={this.onUpdateSearchInApp}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                    data={visiblePosts} 
                    onDelete={this.deleteItem} 
                    onToggle={this.onToggle}
                    // onToggleImportant={this.onToggleImportant}
                    // onToggleLiked={this.onToggleLiked}
                    />
                <PostAddForm 
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }

}