import React from 'react';
import { useState } from "react"
import Item from './Item';
import "./style.css"

const Home = (props) => {
    const [arr, setArr] = useState([])
    const [add, setAdd] = useState([])
    fetch('https://fakestoreapi.com/products').then(res=>res.json())
            .then(json=> setArr(json))


    const onAddBucket = (el) => {
        setAdd(el)
        props.liftUp(el)
        console.log(el);
    }

    return (
        <main className='home_container'>
            {
                arr.map((el) => {
                    return(
                        <Item image={el.image}
                        title={el.title} 
                        description={el.description} 
                        id={el.id} price={el.price} 
                        onClickAdd={onAddBucket}/>
                    )
                })
            }
        </main>
    );
};

export default Home;