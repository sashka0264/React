import React from 'react';
import './post-status-filter.css';
import {Button} from 'react-bootstrap';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button type="button" variant="info">All</Button>
            <Button type="button" variant="outline-secondary">Likes</Button>
        </div>
    )
}

export default PostStatusFilter;