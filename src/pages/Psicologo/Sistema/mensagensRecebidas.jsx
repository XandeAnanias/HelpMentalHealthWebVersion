import Sidebar from '../../../components/containers/psicologo/sidebar';
import SearchBar from '../../../components/containers/searchBar';
import ChatItem from '../../../components/containers/chatItem';
import useMensagensRecebidas from '../../../hook/mensagensrecebidas.js';

export default function MensagensRecebidas() {
  const { mensagensFiltradas, pesquisa, setPesquisa, loading } = useMensagensRecebidas();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#f1f5f9]">
        <div className="p-8 pb-2">
          <SearchBar
            placeholder="Pesquise por mensagens recebidas"
            onSearch={(valor) => setPesquisa(valor)}
            valor={pesquisa}
          />
        </div>

        <div className="space-y-4 p-6">
          {loading ? (
            <p className="text-gray-500 text-2xl flex justify-center">Carregando...</p>
          ) : mensagensFiltradas.length > 0 ? (
            mensagensFiltradas.map((mensagem) => (
              <ChatItem
                key={mensagem.id}
                nome={mensagem.nome}
                mensagem={mensagem.conteudo}
                hora={mensagem.data}
                path={`/chat-psicologo/${mensagem.id}`} 
              />
            ))
          ) : (
            <p className="text-gray-500 text-2xl flex justify-center">Nenhuma mensagem encontrada.</p>
          )}
        </div>
      </div>
    </div>
  );
}
