import React from 'react';
import './style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/main';
import Transacoes from './pages/transacoes';

const App = () => (
  <div className="App">
    <Header />
    <Main />
    <Transacoes />
    <Footer />
  </div>
);


export default App;
