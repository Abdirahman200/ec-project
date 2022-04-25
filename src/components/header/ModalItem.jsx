import React from 'react';

const ModalItem = ({el, sum}) => {
    return (
        <div>
            <p>{el.title}</p>
            <p>{el.price}</p>
        </div>
    );
};

export default ModalItem;