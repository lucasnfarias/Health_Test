import React, { useState } from 'react';

import './style.css';

export default function DevForm({ onSubmit }) {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [tel, setTel] = useState('');
    const [especialidade, setEspecialidade] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        
        await onSubmit({
            nome,
            endereco,
            tel,
            especialidade,
        });

        setNome('');
        setEndereco('');
        setTel('');
        setEspecialidade('');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1>Cadastrar Clínica</h1>
                
                <div className="input-block">
                <label htmlFor="nome">Nome</label>
                <input
                    name="nome" 
                    id="nome"
                    required
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                </div>

                <div className="input-block">
                <label htmlFor="endereco">Endereço</label>
                <input
                    name="endereco"
                    id="endereco"
                    required
                    value={endereco}
                    onChange={e => setEndereco(e.target.value)}
                />
                </div>
                
                <div className="input-block">
                    <label htmlFor="tel">Telefone</label>
                    <input 
                    name="tel"
                    id="tel" 
                    required 
                    value={tel} 
                    onChange={e => setTel(e.target.value)}            
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="especialidade">Especialidade</label>
                    <input
                    name="especialidade"
                    id="especialidade"
                    required
                    value={especialidade} 
                    onChange={e => setEspecialidade(e.target.value)} 
                    />
                </div>

                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}