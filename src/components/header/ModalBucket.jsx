import React, { useState } from 'react';
import Form from './Form';
import ModalItem from './ModalItem';

const ModalBucket = (props) => {
    const [bull, setBull] = useState([])
    const [sum, setSum] = useState('')
    const [g, setG] = useState(false)
    const func = () => {
        props.arr.map((el) => {
            setBull(e => [...e, el.price])
        })
        function arraySum(array){
            var sum = 0;
            for(var i = 0; i < array.length; i++){
                sum += array[i];
                }
                setSum(sum)
            }
            arraySum(bull);
    }

    const onClick = (el) => {
        setG(true)
    }
    const onMusEnter = (el) => {
        setG(false)
    }
    return (
        <div className='bucketBlock'> <h2>Hello its bucket</h2> 
        {g == false ? props.arr.map((e) => {
            return(
                <>
                <ModalItem el={e}/>
                </>
            )
        }) : <Form mus={onMusEnter}/>}
        <button onClick={func}>Итоги</button>
                <button onClick={onClick}>Оплатить</button>
                <p>Итоги {sum} $</p>
        </div>
    )
};

export default ModalBucket;