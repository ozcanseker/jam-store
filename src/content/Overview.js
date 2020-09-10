import React from 'react';
import '../css/content.css';
import {useHistory} from "react-router-dom";

let products = [
    {
        name: "Strawberry Jam",
        image: "stawbery jam.jpg"
    },
    {
        name: "Strawberry Jello",
        image: "stawbery jello.jpg"
    },
    {
        name: "Blackberry Jam",
        image: "blackberry_jello.png"
    },
    {
        name: "Blackberry Jelly",
        image: "blackberry_jam.png"
    },
    {
        name: "Appelmoes",
        image: "appelsaus.png"
    },
    {
        name: "Apple wine",
        image: "applewine.png"
    }
]


function Overview() {
    let overViewItems = products.map(product => {
            return <Product key = {product.name} productname={product.name} image = {product.image}/>
        }
    )

    return (<div className={"Overview"}>
        {
            overViewItems
        }
    </div>)
}

function Product(props) {
    const history = useHistory();

    return (<div className={"Product"} onClick={() => history.push("/product")}>
        <p>{props.productname}</p>
        <img src={require(`../resources/${props.image}`)} alt={`Image of ${props.name}`}/>
        <div>
            <div className={"basketButtonProduct"}><p>Basket ↓</p></div>
            <div className={"infoButtonProduct"}><p>Info →</p></div>
        </div>
    </div>)
}

export default Overview;