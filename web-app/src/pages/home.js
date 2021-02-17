import React from 'react';
import './home.css'
import './App.scss';
import './App2.scss';
import './App3.scss';

import { Link } from "react-router-dom";

import titulo from '../assets/titulo.png'
import camera from '../assets/camerinha.png'
import flecha from '../assets/flechasBaixo.png'
// import barras from '../assets/bars.png'
import jovana from '../assets/jovana.png'
import imgTitulo from '../assets/tituloSobre.png'


function Home() {


    return (
        <div>
            <body>

                <main>
                    <div className="banner">

                        <div class="page-bg">
                            <div class="animation-wrapper">
                                <div class="particle particle-1"></div>
                                <div class="particle particle-2"></div>
                                <div class="particle particle-3"></div>
                                <div class="particle particle-4"></div>
                            </div>
                        </div>
                        <div className="meninasConteudo">
                            <img src={titulo} alt="a" />
                        </div>

                        <div className="textoBannerAnterior">
                            <div className="textoBanner">
                                <p>projeto de fotografia em comemoração aos 18 anos do SENAI info.</p>

                                <Link to="/galeria">

                                    <h3>ver galeria</h3>

                                    <img src={camera} alt="a" />

                                </Link>

                            </div>
                        </div>
                        <div className="flechinhas">
                            <img src={flecha} alt="a" />
                        </div>

                    </div>


                    <div className='sobreProjetoBackground'>
                        <div className='imagemSobre'>
                            <img src={jovana} alt="a" />
                        </div>
                        <div className='textoSobre'>
                            <img src={imgTitulo} alt="a" />
                            <div className="textoPrincipal">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                </main>
                <header>
                    <input type='checkbox' id='toggle' style={{ display: "none" }} />
                    <label class='toggle-btn toggle-btn__cross' for='toggle'>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </label>
                    <nav>
                        <div className="ulAnterior">
                            <ul>
                                <li><Link to="/">home</Link></li>
                                <li><Link to="/galeria">galeria</Link></li>

                            </ul>
                            <div className="textoNav">
                                <div className="textoNav2">
                                    <h2>converse com a gente :)</h2>
                                    <h3>insta: @projetofotografiasenai</h3>
                                    <h3>facebook: /projetofotosenai</h3>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </body>
        </div>

    )

}
export default Home;