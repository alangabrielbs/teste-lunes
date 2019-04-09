import React from 'react';
import lunes from '../../assets/lunes.svg';

import './style.css';


const Header = () => (
    <header className="header-main">
        <div className="header-cont">   
            <div className="logo">
                <a href="/"><img src={lunes} width="83px" alt="Lunes" /></a>
            </div>  
            <div className="texto-header">
                <h1>O Futuro no presente</h1>
                <p>Não é um banco. Não é uma corretora. <span className="verde">É a Lunes!</span> Seja dono do seu dinheiro.</p>
                <a href="http://luneswallet.app/create" target="_blank" >Abra sua conta</a>
            </div>
        </div>
    </header>
)

export default Header;