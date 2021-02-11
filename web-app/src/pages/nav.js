import React from 'react';
import {Link} from "react-router-dom";

import x from '../assets/whiteCancel.png'

function Nav(){
    return(
        <div className='bannerNav'>
            <div className="navFechar">
                <Link to="/">
                <img src={x} />
                </Link>
            </div>
            <div className="icones">

            </div>
        </div>
    )
} 
export default Nav;