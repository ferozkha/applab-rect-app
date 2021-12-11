import React from 'react';
import classes from '../styles/Companiclick.module.css'
import image from '../assets/images/ex.png'
const CompaniClick = () => {
    return (
        <section className={classes.companicLike}>
            <p>Trusted by companies like</p>
            <div className={classes.companicLikeGroup}>
                <img src={image} alt=""/>
                <img src={image} alt=""/>
                <img src={image} alt=""/>
                <img src={image} alt=""/>
                <img src={image} alt=""/>
            </div>
        </section>
    );
}

export default CompaniClick;
