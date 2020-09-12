import React, {useEffect} from 'react';
import {
    Route, useHistory,Switch
} from "react-router-dom";
import ReactGA from 'react-ga';
import {hotjar} from "react-hotjar";

import './css/App.css';
import NameLogo from './resources/Knipsel.PNG';
import JamJar from './resources/JamJar.jpg';
import Basket from './resources/images.png'

import AboutMe from "./content/Aboutme";
import ProductDesc from "./content/ProductDesc";
import BuySummary from "./content/BuySummary";
import ShoppingcartScreen from "./content/ShoppingcartScreen";
import Overview from "./content/Overview";
import ContactMe from "./content/Contactme";

function App() {
    console.log("version 1.0.4")

    useEffect(() => {
        hotjar.initialize(1988359, 6);

        ReactGA.initialize('UA-177857886-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <div className="App">
            <div id="navbar">
                <Logo/>
                <Nav displayText="About me" route={"/aboutme"}/>
                <Nav displayText="Contact me" route = {"/contactme"}/>
                <ShoppingCart/>
            </div>
            <div id="contentScreen">
                <Switch>
                    <Route exact path={"/"} component={Overview}/>
                    <Route path={"/aboutme"} component={AboutMe}/>
                    <Route path={"/contactme"} component={ContactMe}/>
                    <Route path={"/product"} component={ProductDesc}/>
                    <Route path={"/shoppingcart"} component={ShoppingcartScreen}/>
                    <Route path={"/buysummary"} component={BuySummary}/>
                </Switch>
            </div>
        </div>
    );
}

function Logo() {
    const history = useHistory();

    return (
        <div id="logo" onClick={() => history.push("/")}>
            <div/>
            <img id="nameLogo" src={NameLogo} alt={"Fruit City"}/>
            <img id="jamJar" src={JamJar} alt={""}/>
        </div>
    )
}

function Nav(props) {
    const history = useHistory();

    return (
        <div className={"Nav"} onClick={() => history.push(props.route)}>
            <p>{props.displayText}</p>
            <div/>
        </div>
    )
}

function ShoppingCart(props) {
    const history = useHistory();

    return (
        <div className={"ShoppingCart"} onClick={() => history.push("/shoppingcart")}>
            <img src={Basket} alt={"Shopping cart"}/>
            <p>4</p>
        </div>
    )
}

export default App;