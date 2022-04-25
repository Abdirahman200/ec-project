import React, { useState } from 'react';
import ModalBucket from './ModalBucket';
import "./style.css"

const Header = (props) => {
    const [bull, setBull] = useState(true)
    const onClickHome = () => {
        setBull(true)
    }
    const onClickBucket = () => {
        setBull(false)
    }


    return (
        <header className='header'>
            <p>SkatchBook</p>
            <nav className="header_navigation">
                <li className="navigation_li" onClick={onClickHome}>Home</li>
                <li className="navigation_li" onClick={onClickBucket}>Корзина</li>
            </nav>
            {
                !bull ? <ModalBucket arr={props.arr}/> : console.log("noFind")
            }
        </header>
    );
};

export default Header;