import React from 'react';
import classes from '../styles/Toparea.module.css';
import logo from '../assets/images/page.png';
import Button from '../components/Button'
const TopArea = () => {
    return (
        <div className={classes.topArea}>
            <img src={logo} alt=""/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Key Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Testiminial</a></li>
                <li><a href="#">FAQ</a></li>
                <Button text="try for free"/>
            </ul>
        </div>
    );
}

export default TopArea;
