import React from 'react';
import '../css/content.css';

let products = [
    {
        name: "Strawberry Jam",
        image: "stawbery jam.jpg",
        amount: 10
    },
    {
        name: "Blackberry Jelly",
        image: "blackberry_jam.png",
        amount: 1
    },
]

function ShoppingcartScreen() {
    let overView = products.map(product => {
        return (
            <ShoppingcartProduct name={product.name} amount={product.amount} image={product.image}/>
        )
    });

    return (
        <div id={"ShoppingcartScreen"}>
            <div id={"ShoppingcartScreenProducts"}>
                {overView}
            </div>
            <div id={"ShoppingcartScreenButton"}>
                <p>Finish purchase →</p>
            </div>
        </div>
    )
}

function ShoppingcartProduct(props) {
    return (
        <div className={"ShoppingcartProduct"}>
            <img src={require(`../resources/${props.image}`)}/>
            <p>{props.name}</p>
            <div>
                <div>
                    ↑
                </div>
                <p>
                    {props.amount}
                </p>
                <div>
                    ↓
                </div>
            </div>
        </div>

    )
}

export default ShoppingcartScreen;