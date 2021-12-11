import React from 'react';
import classes from '../styles/Subgroupjack.module.css'
const PostSubGroup = (props) => {
    return (
        <div className={classes.subGroup}>
            <img src={props.image} alt="" />
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default PostSubGroup;

