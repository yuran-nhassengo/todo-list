import React, { useState } from 'react';
import axios from 'axios'; 

export const CreateTarefa = () => {
  const [título, setTítulo] = useState('');
  const [descrição, setDescrição] = useState('');
  const [dataDeVencimento, setDataDeVencimento] = useState('');
  const [status, setStatus] = useState('pendente');
  const [usuário, setUsuário] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/tarefa/create`, {
        título,
        descrição,
        dataDeVencimento
      });

      console.log('Tarefa criada com sucesso:', response.data);
      setTítulo('');
      setDescrição('');
      setDataDeVencimento('');
      setStatus('pendente');
      setUsuário('');
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Criar Tarefa</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="título" className="block text-sm font-medium text-gray-700">Título:</label>
          <input
            type="text"
            id="título"
            value={título}
            onChange={(e) => setTítulo(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="descrição" className="block text-sm font-medium text-gray-700">Descrição:</label>
          <textarea
            id="descrição"
            value={descrição}
            onChange={(e) => setDescrição(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="dataDeVencimento" className="block text-sm font-medium text-gray-700">Data de Vencimento:</label>
          <input
            type="date"
            id="dataDeVencimento"
            value={dataDeVencimento}
            onChange={(e) => setDataDeVencimento(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        {/* <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <option value="pendente">Pendente</option>
            <option value="em progresso">Em Progresso</option>
            <option value="concluída">Concluída</option>
          </select>
        </div> */}
        <div>
          <label htmlFor="usuário" className="block text-sm font-medium text-gray-700">Usuário:</label>
          <input
            type="number"
            id="usuário"
            value={usuário}
            onChange={(e) => setUsuário(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Criar Tarefa
        </button>
      </form>
    </div>
  );
};
