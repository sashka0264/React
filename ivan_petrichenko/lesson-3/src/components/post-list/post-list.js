import React from 'react';
import PostListItem from "../post-list-item/post-list-item";
import './post-list.css';
import {ListGroup} from 'react-bootstrap';

const PostList = ({data, onDelete, onToggleLiked, onToggleImportant, onToggle}) => {
    
    const elements = data.map( (item) => {
        if (typeof item === "object") {
            const {id, ...others} = item;

            return (
                <li key={id} className="app-list list-group-item">
                    <PostListItem {...others} 
                        onDelete={() => onDelete(id)}
                        onToggleLiked={() => onToggle(id, "like")}
                        onToggleImportant={() => onToggle(id, "important")}
                        />
                </li>
            )
        } else {
            return false;
        }
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;