import React from 'react';
import PostSubGroup from '../components/PostSubGroup'
import classes from '../styles/Smartjackpost.module.css'
import image from '../assets/images/ex.png'
const Smartjackpost = () => {
    return (
        <div className={classes.smartJackpost}>
            <div className={classes.headingArea}>
                <h1>Smart jackpots that<br/>you may love this<br/>anytime & anywhere</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus facere temporibus quam voluptates perspiciatis quod hic, eligendi fugiat ut sequi doloremque blanditiis sapiente quaerat quidem sunt eaque voluptatem beatae unde ducimus totam. Eius earum molestias!</p> 
            </div>
            <div className={classes.smartJackpostGroup}>
                <PostSubGroup image={image}>
                    <h1>automatic payout</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eveniet omnis dolorum nulla rerum atque, laborum optio expedita facere ab nesciunt natus pariatur ratione consequatur nisi, illum delectus laboriosam porro.</p>
                </PostSubGroup>
                <PostSubGroup image={image}>
                    <h1 style={{color:'#2563ff'}}>prototype</h1>
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

export default Smartjackpost;
