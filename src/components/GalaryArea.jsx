import React from 'react';
import classes from '../styles/Galaryarea.module.css'
import Button from '../components/Button'
import image from '../assets/images/mo.png'
const GalaryArea = () => {
    return (
        <section className={classes.topMiddle}>
            <div className={classes.topMiddleLeft}>
                <a href="#">
                    <span><i class="fab fa-galactic-republic"></i></span>
                    #editor choice app 2020
                </a>
                <h1>Best app for your <br/> modern lifestyle</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, amet.</p>
                <div className={classes.buttongroup}>
                    <Button text="tryfor free"/>
                    <Button text="watch imo video"/>
                </div>
            </div>
            <div className={classes.topMiddleRight}>
                <img src={image} alt=""/>
            </div>
        </section>
    );
}

export default GalaryArea;
