import React, { useEffect, useState } from 'react';
import './App.css';
import api from './services/api';
import Visualizar from './components/Visualizar/index.js';
import Cadastrar from './components/Cadastrar/index.js';
import Header from './components/Header/index.js';

function App() {
  const [clinicas, setClinicas] = useState([]);

  useEffect(() => {
    async function loadClinicas() {
      const response = await api.get('/clinicas');
      setClinicas(response.data);
    }

    loadClinicas();
  }, []);

  async function handleAddClinica(data) {
    const response = await api.post('/clinicas', data)

    setClinicas([...clinicas, response.data])
  }

  return (
    <div className="App">
      <Header text="Visualizador de Clínicas"/>
      <Cadastrar onSubmit={handleAddClinica} />
      <Visualizar clinicas={clinicas}/>
  </div>
  );
}

export default App;