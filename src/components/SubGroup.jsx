import React from 'react';
import classes from '../styles/Subgroup.module.css'
const Subgroup = (props) => {
    return (
        <div className={classes.subGroup}>
            <img src={props.image} alt="" />
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default Subgroup;

