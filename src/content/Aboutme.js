import React from 'react';
import '../css/content.css';

import Douchebag from '../resources/douchebag.jpg'
import Garden from '../resources/e7dc440d75bb181e96384e2ce51f74b5.jpg'
import LocationImage from '../resources/locationimage.PNG';


function AboutMe() {
    return (<div className={"ContactMe"}>
        <div className={"contactMeTextSpace"}>
            <h1>Who am I?</h1><br/>
            <img id={"douchebag"} src={Douchebag}/>
            <p>
                My full name is Esteban Julio Ricardo Montoya de la Rosa Ramirez.<br/>
                <br/>
                My friends call me Esteban Julio Ricardo Montoya de la Rosa Ramirez.<br/>
                <br/>
            </p>
            <p>
                I love fruit. I love fruit so mucht that I have my own garden full of fruit, just here in Apeldoorn.<br/>
            </p>
            <img src = {Garden}/>
            <p>
                I just love fruit. When I moved to Apeldoorn from my home country Luxenburg, I really had a difficult time. My parents disowned me becuase I burned down our house again. You know what they say:<br/>
                <br/>
                Fool me once, shame on you,<br/>
                Burn down the house for fifth time, you really gotz to go.<br/>
                <br/>
                Now I am here in Apeldoorn and I haven’t burned down my house once! I needed to find a different hobby then archery with flaming arrows and I found gardening! Now I garden all the time. I garden so much that I have a lot of fruit. I can’t eat it all!<br/>
                <br/>
                I started making jams and now I sell them! You can but it right from this website or come by and taste before buying.<br/>
                <br/>
                Contact info:<br/>
                <br/>
                Tel :  +31 (0)55 357 57 57<br/>
                email : FruitCity@email.com<br/>
                Address: Koninklijk Park 1, 7315 JA Apeldoorn<br/>
                <br/>
            </p>
            <img src={LocationImage}/>
        </div>
    </div>)
}

export default AboutMe;

