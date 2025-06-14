import { useState, useEffect } from 'react';
import { buscarMensagens } from '../features/respostas/mensagensPsicologoService.js';

export default function useMensagensRecebidas() {
  const [mensagens, setMensagens] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarMensagens() {
      setLoading(true);
      const dados = await buscarMensagens();
      setMensagens(dados);
      setLoading(false);
    }
    carregarMensagens();
  }, []);

  const mensagensFiltradas = mensagens.filter((mensagem) =>
    mensagem.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
    mensagem.conteudo.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return {
    mensagensFiltradas,
    pesquisa,
    setPesquisa,
    loading,
  };
}
