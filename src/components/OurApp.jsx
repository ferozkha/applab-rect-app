import React from 'react';
import PostSubGroup from '../components/PostSubGroup'
import classes from '../styles/OurApp.module.css'
import image from '../assets/images/ex.png'
const Ourapp = () => {
    return (
        <div className={classes.ourApp}>
            <div className={classes.heading}>
                <h1>Why you should choose <br/> our app</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, beatae?</p>
            </div>
            <div className={classes.ourAppGroup}>
                <PostSubGroup image={image}>
                    <h1 style={{color:'#40975f'}}>vector editing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia autem sequi voluptatibus magnam quis culpa! Quasi natus sint aliquam, sapiente, ullam a consequuntur voluptas repellat, dolor illum eveniet est hic?</p>
                </PostSubGroup>
                <PostSubGroup image={image}>
                    <h1 style={{color:'#40975f'}}>vector editing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia autem sequi voluptatibus magnam quis culpa! Quasi natus sint aliquam, sapiente, ullam a consequuntur voluptas repellat, dolor illum eveniet est hic?</p>
                </PostSubGroup>
                <PostSubGroup image={image}>
                    <h1 style={{color:'#40975f'}}>vector editing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia autem sequi voluptatibus magnam quis culpa! Quasi natus sint aliquam, sapiente, ullam a consequuntur voluptas repellat, dolor illum eveniet est hic?</p>
                </PostSubGroup>
                <PostSubGroup image={image}>
                    <h1 style={{color:'#40975f'}}>vector editing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia autem sequi voluptatibus magnam quis culpa! Quasi natus sint aliquam, sapiente, ullam a consequuntur voluptas repellat, dolor illum eveniet est hic?</p>
                </PostSubGroup>
                <PostSubGroup image={image}>
                    <h1 style={{color:'#40975f'}}>vector editing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia autem sequi voluptatibus magnam quis culpa! Quasi natus sint aliquam, sapiente, ullam a consequuntur voluptas repellat, dolor illum eveniet est hic?</p>
                </PostSubGroup>
                <PostSubGroup image={image}>
                    <h1 style={{color:'#40975f'}}>vector editing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia autem sequi voluptatibus magnam quis culpa! Quasi natus sint aliquam, sapiente, ullam a consequuntur voluptas repellat, dolor illum eveniet est hic?</p>
                </PostSubGroup>
            </div>
        </div>
    );
}

export default Ourapp;
