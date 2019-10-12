import React from 'react';
import PostListItem from "../post-list-item/post-list-item";
import './post-list.css';

const PostList = ({data}) => {
    
    const elements = data.map( (item) => {
        if (typeof item === "object") {
            const {id, ...others} = item;

            return (
                <li key={id} className="app-list list-group-item">
                    <PostListItem {...others}/>
                </li>
            )
        } else {
            return false;
        }
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;