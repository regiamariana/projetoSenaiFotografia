import React from 'react';
import { Link } from "react-router-dom";
import './App.scss';
import './App2.scss';
import './App3.scss';

import img1 from "../assets/IMG_1.JPG"
import img2 from "../assets/IMG_2.JPG"
import img3 from "../assets/IMG_3.JPG"
import tituloGaleria from "../assets/tituloGaleria.png"

function App() {
  return (
    <div className="App">
      <div className="imgAnterior">
      <img className="img" src={tituloGaleria} alt="a" />
      </div>
      



      <section>
        <div class="page-bg">
          <div class="animation-wrapper">
            <div class="particle particle-1"></div>
            <div class="particle particle-2"></div>
            <div class="particle particle-3"></div>
            <div class="particle particle-4"></div>
          </div>
        </div>
        <div className="container">
          <div class="carousel">
            <input type="radio" name="slides" checked="checked" id="slide-1" />

            <input type="radio" name="slides" id="slide-2" />
            <input type="radio" name="slides" id="slide-3" />
            <input type="radio" name="slides" id="slide-4" />
            <input type="radio" name="slides" id="slide-5" />
            <input type="radio" name="slides" id="slide-6" />

            <ul class="carousel__slides">
              <li class="carousel__slide">
                <figure>
                  <div>
                    <img className="img2" src={img1} alt="a" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Foto: Fulano</span>
                  </figcaption>
                </figure>
              </li>

              <li class="carousel__slide">
                <figure>
                  <div>
                    <img className="img2" src={img2} alt="a" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Foto: Ciclano</span>
                  </figcaption>
                </figure>
              </li>

              <li class="carousel__slide">
                <figure>
                  <div>
                    <img className="img2" src={img3} alt="a" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Foto: Beltrano</span>
                  </figcaption>
                </figure>
              </li>
            </ul>

            <ul class="carousel__thumbnails">
              <li>
                <label for="slide-1"><img className="img2" src={img1} alt="a" /></label>
              </li>
              <li>
                <label for="slide-2"><img className="img2" src={img2} alt="a" /></label>
              </li>
              <li>
                <label for="slide-3"><img className="img2" src={img3} alt="a" /></label>
              </li>
            </ul>

          </div>
        </div>
      </section>

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


    </div>
  );
}

export default App;
