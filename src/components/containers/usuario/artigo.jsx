import { FiDownload, FiTrash } from "react-icons/fi";
import { useState } from "react";
import { useArtigos } from '@/context/artigoContext.jsx';
import SearchBar from '../searchBar.jsx';

export default function Artigo() {
  const { artigos, removerArtigo } = useArtigos();
  const filtrosDisponiveis = ["Todos", "Depressão", "Ansiedade", "TEA", "Burnout", "Outro"];
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");
  const [pesquisa, setPesquisa] = useState("");

  const handleSearch = (valor) => {
    setPesquisa(valor);
  };

  const handleExcluir = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este artigo?")) {
      removerArtigo(id);
    }
  };

  const artigosFiltrados = artigos.filter((artigo) => {
    const correspondeCategoria = filtroAtivo === "Todos" || artigo.categoria.includes(filtroAtivo);
    const correspondePesquisa =
      artigo.titulo.toLowerCase().includes(pesquisa.toLowerCase()) ||
      artigo.descricao.toLowerCase().includes(pesquisa.toLowerCase()) ||
      artigo.categoria.toLowerCase().includes(pesquisa.toLowerCase());
    return correspondeCategoria && correspondePesquisa;
  });

  return (
    <div className="p-8 text-gray-800 bg-[#f1f5f9] min-h-screen">
      <SearchBar onSearch={handleSearch} placeholder="Pesquise por artigos" />
      <div className="flex flex-wrap gap-3 my-6">
        {filtrosDisponiveis.map((filtro, index) => (
          <button
            key={index}
            onClick={() => setFiltroAtivo(filtro)}
            className={`px-4 py-1 rounded-full border text-sm transition cursor-pointer
              ${filtroAtivo === filtro ? "bg-[#264466] text-white border-white" : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"}`}
          >
            {filtro}
          </button>
        ))}
      </div>

      {artigosFiltrados.length > 0 ? (
        <div className="space-y-4">
          {artigosFiltrados.map((artigo) => (
            <div key={artigo.id} className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold mb-1">{artigo.titulo}</h2>
                <p className="text-sm text-gray-500 mb-3">{artigo.descricao}</p>
                <span className="bg-[#264466] text-white text-xs px-3 py-1 rounded-full">{artigo.categoria}</span>
              </div>
              <div className="flex flex-col items-end text-sm text-gray-400">
                <span>{artigo.data}</span>
                <div className="flex gap-3 mt-2 items-center">
                  {artigo.arquivo && (
                    <a href={artigo.arquivo} download={artigo.nomeArquivo} className="text-lg hover:text-gray-600">
                      <FiDownload className="cursor-pointer"/>
                    </a>
                  )}
                  <button onClick={() => handleExcluir(artigo.id)} className="text-lg text-red-500 hover:text-red-700">
                    <FiTrash className="cursor-pointer"/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">Nenhum artigo encontrado.</p>
      )}
    </div>
  );
}
