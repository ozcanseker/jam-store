import React from 'react';
import '../css/content.css';

import LocationImage from '../resources/locationimage.PNG';

function ContactMe() {
    return (<div className={"ContactMe"}>
        <div className={"contactMeTextSpace"}>
            <h1>Contact me</h1><br/>
            <p>
                Talk to me :<br/>
                <br/>
                Tel :  +31 (0)55 357 57 57<br/>
                email : FruitCity@email.com<br/>
                <br/>
                Or come by :<br/>
                Address: Koninklijk Park 1, 7315 JA Apeldoorn<br/>
            </p>

            <img src={LocationImage}/>
        </div>
    </div>)
}

export default ContactMe;

