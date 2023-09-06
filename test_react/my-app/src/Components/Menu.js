import React from 'react';
import Image_PP from './Image_PP';
import Presentation from './Presentation';

const Menu = () => {
    return (
        <div>
            <div className='menu_flex'>
            <Presentation/>
            <Image_PP/>
            </div>
        </div>
    );
};

export default Menu;