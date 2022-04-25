import React from 'react';

const Item = (props) => {
    let obj = {
        id: props.id,
        title: props.title,
        price: props.price
    }
    const liftUpId = () => {
        props.onClickAdd(obj)
    }
    return (
        <div>
            <div className="block_product">
                            <img className='product_image' src={props.image} alt="" />
                            <h4 className='product_title'>{props.title}</h4>
                            <p className='product_description'>{props.description}</p>
                            <p>{props.price} $</p>
                            <button onClick={liftUpId}>Добавить в корзину</button>
                        </div>
        </div>
    );
};

export default Item;