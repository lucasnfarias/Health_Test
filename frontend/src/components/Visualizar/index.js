import React from 'react';
import './style.css';

export default function Visualizar(props) {

    const { clinicas } = props;
    clinicas.sort((a,b) => (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0));
    
    return (
        <>
        <div className="table-container">
        <ul>
        {clinicas.map(clinica => (
          <li className="table-row" key={clinica._id}>
            <div className="table-column" style={{width: '200px'}}>
                <strong>NOME</strong>
                <p>{clinica.nome}</p>
            </div>
            <div className="table-column" style={{width: '420px'}}>
                <strong>ENDEREÇO</strong>
                <p>{clinica.endereco}</p>
            </div>
            <div className="table-column" style={{width: '100px'}}>
                <strong>TEL</strong>
                <p>{clinica.tel}</p>
            </div>
            <div className="table-column" style={{width: '150px'}}>
                <strong>ESPECIALIDADE</strong>
                <p>{clinica.especialidade}</p>
            </div>
          </li>
            ))}
            </ul>
        </div>
        </>
    )  
};