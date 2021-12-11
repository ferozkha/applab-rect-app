import React from 'react';
import image from '../assets/images/design.png'
import classes from '../styles/DesignIntegration.module.css'
import Button from './Button.jsx'
const Designintegration = () => {
    return (
        <div className={classes.designIntegration}>
            <div className={classes.designIntegrationGroup}>
                <div>
                    <img src={image} alt=""/>
                </div>
                <div>
                    <h1>Designed & built by<br/>the latest code<br/>integration</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, aliquid.</p>
                    <Button text="learn more"/>
                </div>
            </div>
        </div>
    );
}

export default Designintegration;
