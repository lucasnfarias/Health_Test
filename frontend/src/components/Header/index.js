import React from 'react';
import logo from '../../assets/Caos_focado-2@2x.png';
import './style.css';

export default function Header(props) {
    
    const { text }= props;

    return (
        <>
        <header className="App-header">
        <a
          href="http://caosfocado.com.br/project/healthinn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <div className="title-header">
          <h1>{text}</h1>
        </div>
      </header>
        </>
    )  
};