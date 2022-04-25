import React from 'react';

const Form = (props) => {
    const mouseEnter = (event) => {
        event.preventDefault()
        props.mus(false)
    }
    return (
        <form onSubmit={mouseEnter}>
            <label htmlFor="1">CARD NUMBER</label>
            <input id='1' type="number" />
            <label htmlFor="2">CARD HOLDER</label>
            <input id='2' type="number" />
            <label htmlFor="3">EXPIRATION DATE</label>
            <input id='3' type="number" />
            <button type='submit'>Оплатить</button>
        </form>
    );
};

export default Form;