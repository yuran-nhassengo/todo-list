import React, { useState } from 'react';

export const CardTarefa = ({ tarefa }) => {
  const [status, setStatus] = useState(tarefa.status);

  const handleStatusChange = () => {
    const nextStatus = status === 'pendente' ? 'em progresso' : status === 'em progresso' ? 'concluída' : 'pendente';
    setStatus(nextStatus);
  };

  return (
    <div className="border p-4 m-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{tarefa.título}</h2>
      <p className="mt-2 text-gray-700">{tarefa.descrição}</p>
      <p className="mt-2 font-semibold">
        <span className="text-gray-600">Data de Vencimento:</span> {new Date(tarefa.dataDeVencimento).toLocaleDateString()}
      </p>
      <p className="mt-2 font-semibold">
        <span className="text-gray-600">Status:</span> {status}
      </p>
      <button 
        onClick={handleStatusChange} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Alterar Status
      </button>
    </div>
  );
};


