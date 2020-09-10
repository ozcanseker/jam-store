import React, {useEffect} from 'react';
import '../css/content.css';
import {useHistory} from "react-router-dom";

function BuySummary() {
    const history = useHistory()

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

            <div id = {"Buysummarbuttonback"} onClick={() => history.push("/")}>Back to store</div>
        </div>
    </div>)
}

export default BuySummary;

