import React, { Component } from 'react';
import price from '../../services/api';
import bitcoin from '../../assets/btc.svg';
import litecoin from '../../assets/LTC.svg';

import './style.css';


export default class Main extends Component {
    state = {
        pricesbtc:[],
        pricesltc: []
    }

    componentDidMount() {
        this.loadProduts();
    }

    loadProduts = async () => {
        const responsebtc = await price.get("/BTC/USD");
        const responseltc = await price.get("/LTC/USD");

        this.setState({ pricesbtc: responsebtc.data.data.prices, 
                        pricesltc: responseltc.data.data.prices })
    };

    render() {
        const { pricesbtc, pricesltc  } = this.state
        const exchangesbtc = pricesbtc.filter(el => el.exchange === "bitfinex")
        const exchangesltc = pricesltc.filter(el => el.exchange === "bitfinex")
        
        return (
        <div className="box-content">
            <div className="h150">
                <div className="w50 logo-moeda">
                    <h1><a href="http://bitcoin.org/" target="_blank" ><img src={bitcoin} width="150px" alt="Bitcoin"/></a></h1>
                </div>
                <div className="w50 valor-moeda">
                    <div className="content-valor">
                        <p>Valor atual:</p>
                        <p className="bold f22">US$ {exchangesbtc.map(el => (<span key={el.price} className="verde">{el.price}</span>))}</p>
                        <a href="http://bitcoin.org/" target="_blank">bitcoin.org</a>
                    </div>
                </div>
            </div>
            <div className="h150">
                <div className="w50 logo-moeda">
                <h1><a href="http://litecoin.org/" target="_blank" ><img src={litecoin} width="150px" alt="litecoin"/></a></h1>
                </div>
                <div className="w50 valor-moeda">
                    <div className="content-valor">
                        <p>Valor atual:</p>
                        <p className="bold f22">US$ {exchangesltc.map(el => (<span key={el.price} className="verde">{el.price}</span>))}</p>
                        <a href="http://litecoin.org/" target="_blank" >litecoin.org</a>
                    </div>
                </div>
            </div>
            

        </div>
        
);


    }
}