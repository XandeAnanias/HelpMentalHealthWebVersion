import { useState, useEffect } from 'react';
import Sidebar from '../../../components/containers/usuario/sidebar';
import SearchBar from '../../../components/containers/searchBar';
import ChatItem from '../../../components/containers/chatItem';
import { getRespostasUsuario } from '../../../features/respostas/respostasUsuarioService.js';

export default function RespostasUsuario() {
  const [pesquisa, setPesquisa] = useState('');
  const [respostas, setRespostas] = useState([]);

  useEffect(() => {
    // Aqui futuramente será sua chamada à API
    const dados = getRespostasUsuario();
    setRespostas(dados);
  }, []);

  const respostasFiltradas = respostas.filter((resposta) =>
    resposta.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
    resposta.conteudo.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#f1f5f9]">
        <div className="p-8 pb-2">
          <SearchBar
            placeholder="Pesquise pelas suas respostas"
            onSearch={valor => setPesquisa(valor)}
          />
        </div>

        <div className="space-y-4 p-6">
          {respostasFiltradas.length > 0 ? (
            respostasFiltradas.map((resposta) => (
              <ChatItem
                key={resposta.id}
                nome={resposta.nome}
                mensagem={resposta.conteudo}
                hora={resposta.data}
                path={`/chat-usuario/${resposta.id}`} // <-- Pronto para abrir um chat específico depois
              />
            ))
          ) : (
            <p className="text-gray-500 text-2xl flex justify-center">
              Nenhuma resposta encontrada.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
