import React from 'react';
import './home.css'
import {Link} from "react-router-dom";
import menu from '../assets/menu.png'
import fundo from '../assets/bannerSite.jpg'

function Home(){
    return(
        <div >
           <body>
               <header>
                    <input type="checkbox" id="check" />
                        <label id="icone" for="check"><img src={menu} /></label>
                        <div className="barra">
                            <nav>
                                <Link><div className="link">Home</div></Link>
                                <Link><div className="link">Galeria</div></Link>
                                <Link><div className="link">Sobre</div></Link>
                                
                            </nav>
                        </div>
               </header>

               <main>
                   <div className="banner">

                   </div>
               </main>
           </body>
        </div>
    )
}
export default Home;