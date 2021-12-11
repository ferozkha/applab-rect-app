import React from 'react';
import classes from '../styles/Awesomefeature.module.css';
import image from '../assets/images/awesomeAppFeature.png';
import imagee from '../assets/images/ex.png';
import Subgroup from './SubGroup';
const Awesomefeature = () => {
    return (
        <div className={classes.awesomeAppFeature}>
            <div className={classes.left}>
                <img src={image} alt=""/>
            </div>
            <div className={classes.right}>
                <div className={classes.headingTop}>
                    <h1>Awesome apps<br/>features</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, necessitatibus.</p>
                </div>
                <div className={classes.headinGroup}>
                    <Subgroup image={imagee}>
                        <h1>App Development</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia autem sequi voluptatibus magnam quis culpa! Quasi natus sint aliquam, sapiente, ullam a consequuntur voluptas repellat, dolor illum eveniet est hic?</p>
                    </Subgroup>
                    <Subgroup image={imagee}>
                        <h1 style={{color:'#2563ff'}}>prototype</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia autem sequi voluptatibus magnam quis culpa! Quasi natus sint aliquam, sapiente, ullam a consequuntur voluptas repellat, dolor illum eveniet est hic?</p>
                    </Subgroup>
                    <Subgroup image={imagee}>
                        <h1 style={{color:'#40975f'}}>vector editing</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia autem sequi voluptatibus magnam quis culpa! Quasi natus sint aliquam, sapiente, ullam a consequuntur voluptas repellat, dolor illum eveniet est hic?</p>
                    </Subgroup>
                </div>
            </div>
        </div>
    );
}

export default Awesomefeature;
