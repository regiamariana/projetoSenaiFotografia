import React from 'react';
import './home.css'
import {Link} from "react-router-dom";

import titulo from '../assets/titulo.png'
import camera from '../assets/camerinha.png'
import flecha from '../assets/flechasBaixo.png'
import barras from '../assets/bars.png'
import jovana from '../assets/jovana.png'
import imgTitulo from '../assets/tituloSobre.png'


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

                        <div className="barras">
                            
                            <img src={barras} alt="a"/>]
                            
                        </div>
                        <div className="meninasConteudo">
                        <img src={titulo} alt="a"/>
                        </div>

                        <div className="textoBannerAnterior">
                        <div className="textoBanner">
                            <p>projeto de fotografia em comemoração aos 18 anos do SENAI info.</p>

                            <Link to="/galeria">
                            
                            <h3>ver galeria</h3>
                            
                            
                            </Link>
                            <Link to="/galeria">
                            <img src={camera} alt="a"/>

                            </Link>
                        </div>
                        </div>
                        <div className="flechinhas">
                            <img src={flecha} alt="a"/>
                        </div>
                        
                   </div>


                   <div className='sobreProjetoBackground'>
                        <div className='imagemSobre'>
                            <img src={jovana} alt="a"/>
                        </div>
                        <div className='textoSobre'>
                            <img src={imgTitulo} alt="a"/> 
                            <div className="textoPrincipal">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                   </div>
               </main>
           </body>
        </div>

    )
    
}
export default Home;