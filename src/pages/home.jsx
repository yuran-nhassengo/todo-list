import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { CardTarefa } from '../components/cards/card-tarefa';
import { CreateTarefa } from '../components/tarefa/create-tarefa';

export const Home = () => {
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTarefas = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/tarefa/listar-por-usuario`);
        setTarefas(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTarefas();
  }, []);

  return (
    <div className="p-4">
      <CreateTarefa />
      {loading && <p>Carregando...</p>}
      {error && <p className="text-red-500">Erro: {error}</p>}
      {tarefas.length === 0 && !loading && <p>Nenhuma tarefa encontrada.</p>}
      <div className="mt-4">
        {tarefas.map(tarefa => (
          <CardTarefa key={tarefa._id} tarefa={tarefa} />
        ))}
      </div>
    </div>
  );
};
