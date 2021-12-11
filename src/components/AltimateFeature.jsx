import React from 'react';
import image from '../assets/images/feature.png'
import image1 from '../assets/images/planing.png'
import image2 from '../assets/images/ex.png'
import classes from '../styles/Altimatefeature.module.css'
import PostSubGroup from './PostSubGroup';
import Button from './Button';
const Altimatefeature = () => {
    return (
        <div className={classes.altimateFeature}>
            <h1>Ultimate features<br/> that we built</h1>
            <p>The rise of mobile devices transforms the way we <br/>consume information entirely.</p>
            <div>
                <div className={classes.altimateFeatureGroup}>
                    <PostSubGroup image={image2}>
                        <h1 style={{color:'#40975f'}}>vector editing</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia autem sequi voluptatibus magnam quis culpa! Quasi natus sint aliquam, sapiente, ullam a consequuntur voluptas repellat, dolor illum eveniet est hic?</p>
                    </PostSubGroup>
                    <PostSubGroup image={image2}>
                        <h1 style={{color:'#40975f'}}>vector editing</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia autem sequi voluptatibus magnam quis culpa! Quasi natus sint aliquam, sapiente, ullam a consequuntur voluptas repellat, dolor illum eveniet est hic?</p>
                    </PostSubGroup>
                    <PostSubGroup image={image2}>
                        <h1 style={{color:'#40975f'}}>vector editing</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia autem sequi voluptatibus magnam quis culpa! Quasi natus sint aliquam, sapiente, ullam a consequuntur voluptas repellat, dolor illum eveniet est hic?</p>
                    </PostSubGroup>
                    <PostSubGroup image={image2}>
                        <h1 style={{color:'#40975f'}}>vector editing</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia autem sequi voluptatibus magnam quis culpa! Quasi natus sint aliquam, sapiente, ullam a consequuntur voluptas repellat, dolor illum eveniet est hic?</p>
                    </PostSubGroup>
                </div>
                <div className={classes.attaspicture}>
                    <img id={classes.img1} src={image} alt=""/>
                    <img id={classes.img2} src={image1} alt=""/>
                </div>
            </div>
            <Button text="See All"/>
        </div>
    );
}

export default Altimatefeature;
