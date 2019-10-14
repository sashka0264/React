import React from 'react';
import style from './post-add-form.module.css';

const PostAddForm = ({onAdd}) => {
    return (
        <div className={style.panel}>
            <input type="text" placeholder="What are you thinking now?" className="form-control new-post-label"/>

            <button type="submit" className="btn btn-outline-secondary" onClick={ () => onAdd("Hello")}>Add</button>
        </div>
    )
}

export default PostAddForm;