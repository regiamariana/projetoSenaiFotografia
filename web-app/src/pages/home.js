import React from 'react';
import './home.css'
import {Link} from "react-router-dom";
import menu from '../assets/menu.png'
import fundo from '../assets/bannerSite.jpg'
import titulo from '../assets/titulo.png'
import camera from '../assets/camerinha.png'
import flecha from '../assets/flechasBaixo.png'
import barras from '../assets/bars.png'
import './home2.js'
function Home(){
    

    return(
        <div>
           <body>
               <header>
                    {/* <input type="checkbox" id="check" />
                        <label id="icone" for="check"><img src={menu} /></label>
                        <div className="barra">
                            <nav>
                                <Link><div className="link">Home</div></Link>
                                <Link><div className="link">Galeria</div></Link>
                                <Link><div className="link">Sobre</div></Link>
                                
                            </nav>
                        </div> */}
               </header>

               <main>
                   <div className="banner">




                   {/* <div id="myNav" class="overlay">
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                             <div class="overlay-content">
                                <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                                                 </div>
                                                    </div>
                                                    <h2>Fullscreen Overlay Nav Example</h2>
<p>Click on the element below to open the fullscreen overlay navigation menu.</p>
<p>In this example, the navigation menu will slide in, from left to right:</p>
<a onclick="openNav()">open</a> */}








                        <div className="barras">
                            
                            <img src={barras} />]
                            
                        </div>
                        <div className="meninasConteudo">
                        <img src={titulo}/>
                        
                        </div>

                        <div className="textoBannerAnterior">
                        <div className="textoBanner">
                            <h2>projeto de fotografia em comemoração aos 18 anos do SENAI info.</h2>

                            <Link to="/galeria">
                            <h3>ver galeria</h3>
                            <img src={camera} />
                            </Link>
                        </div>
                        </div>
                        <div className="flechinhas">
                            <img src={flecha} />
                        </div>
                        
                   </div>


                   <div className='sobreProjeto'>
                        
                   </div>
               </main>
           </body>
        </div>

    )
    
}
export default Home;