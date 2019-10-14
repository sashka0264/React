import React from 'react';
import style from './post-add-form.module.css';

const PostAddForm = () => {
    return (
        <form className={style.panel}>
            <input type="text" placeholder="What are you thinking now?" className="form-control new-post-label"/>

            <button type="submit" className="btn btn-outline-secondary">Add</button>
        </form>
    )
}

export default PostAddForm;