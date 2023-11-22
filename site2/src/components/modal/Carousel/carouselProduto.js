import './carouselProduto.scss'

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Carrossel() {
    return (
        <div id='compCarrossel'>
        <Carousel>
            <Carousel.Item>
                <div className='grupoCard'>
                    <div className='cardCarousel'>
                        <div id='imagemNomeProduto'>
                            <img src='../..//assets/image/produto/turbina-1.png'/>
                            <div>nomeProduto</div>
                        </div>

                        <div className='btnSaibaMais'>
                            <button>Saiba mais</button>
                        </div>
                    </div>

                    <div className='cardCarousel'>
                        <div id='imagemNomeProduto'>
                            <img src='../..//assets/image/produto/turbina-1.png'/>
                            <div>nomeProduto</div>
                        </div>

                        <div className='btnSaibaMais'>
                            <button>Saiba mais</button>
                        </div>
                    </div>

                    <div className='cardCarousel'>
                        <div id='imagemNomeProduto'>
                            <img src='../..//assets/image/produto/turbina-1.png'/>
                            <div>nomeProduto</div>
                        </div>

                        <div className='btnSaibaMais'>
                            <button>Saiba mais</button>
                        </div>
                    </div>

                    <div className='cardCarousel'>
                        <div id='imagemNomeProduto'>
                            <img src='../..//assets/image/produto/turbina-1.png'/>
                            <div>nomeProduto</div>
                        </div>

                        <div className='btnSaibaMais'>
                            <button>Saiba mais</button>
                        </div>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className='grupoCard'>
                    <div className='cardCarousel'>
                        <div id='imagemNomeProduto'>
                            <img src='../..//assets/image/produto/turbina-1.png'/>
                            <div>nomeProduto</div>
                        </div>

                        <div className='btnSaibaMais'>
                            <button>Saiba mais</button>
                        </div>
                    </div>

                    <div className='cardCarousel'>
                        <div id='imagemNomeProduto'>
                            <img src='../..//assets/image/produto/turbina-1.png'/>
                            <div>nomeProduto</div>
                        </div>

                        <div className='btnSaibaMais'>
                            <button>Saiba mais</button>
                        </div>
                    </div>

                    <div className='cardCarousel'>
                        <div id='imagemNomeProduto'>
                            <img src='../..//assets/image/produto/turbina-1.png'/>
                            <div>nomeProduto</div>
                        </div>

                        <div className='btnSaibaMais'>
                            <button>Saiba mais</button>
                        </div>
                    </div>

                    <div className='cardCarousel'>
                        <div id='imagemNomeProduto'>
                            <img src='../..//assets/image/produto/turbina-1.png'/>
                            <div>nomeProduto</div>
                        </div>

                        <div className='btnSaibaMais'>
                            <button>Saiba mais</button>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}