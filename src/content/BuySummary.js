import React from 'react';
import '../css/content.css';

function BuySummary() {
    return (<div className={"ContactMe"}>
        <div className={"contactMeTextSpace"}>
            <h1>Thank you for Purchasing</h1><br/>
            <p>
                I will send to the following address:<br/>
                <br/>
                Your Address street 43<br/>
                1111AA YourCity<br/>
                <br/>
                <br/>
                The following items :<br/>
                <br/>
                1x Strawberry Jam<br/>
                10x Blackberry Jam<br/>
            </p>
        </div>
    </div>)
}

export default BuySummary;

