import { FiDownload } from "react-icons/fi";
import { useState } from "react";
import SearchBar from '../searchBar.jsx';

export default function Artigo() {
  const filtrosDisponiveis = ["Todos", "Depressão", "Ansiedade", "TEA", "Burnout"];

  const artigosOriginais = [
    {
      titulo: "Entendendo a Depressão",
      descricao: "Um guia completo sobre depressão e seus sintomas",
      categoria: "Depressão",
      data: "15/03/2023",
    },
    {
      titulo: "Gerenciando a Ansiedade",
      descricao: "Técnicas para controlar crises de ansiedade",
      categoria: "Ansiedade",
      data: "22/04/2023",
    },
    {
      titulo: "Vivendo com TEA",
      descricao: "Abordagens e compreensão do Transtorno do Espectro Autista",
      categoria: "TEA",
      data: "01/02/2023",
    },
    {
      titulo: "Superando o Burnout",
      descricao: "Como lidar com o esgotamento emocional no trabalho",
      categoria: "Burnout",
      data: "10/01/2023",
    },
  ];

  const [filtroAtivo, setFiltroAtivo] = useState("Todos");
  const [pesquisa, setPesquisa] = useState("");

  // ✅ Função de pesquisa vinda da SearchBar
  const handleSearch = (valor) => {
    setPesquisa(valor);
  };

  const artigosFiltrados = artigosOriginais.filter((artigo) => {
    const correspondeCategoria =
      filtroAtivo === "Todos" || artigo.categoria === filtroAtivo;

    const correspondePesquisa =
      artigo.titulo.toLowerCase().includes(pesquisa.toLowerCase()) ||
      artigo.descricao.toLowerCase().includes(pesquisa.toLowerCase()) ||
      artigo.categoria.toLowerCase().includes(pesquisa.toLowerCase());

    return correspondeCategoria && correspondePesquisa;
  });

  return (
    <div className="p-8 text-gray-800 bg-[#f1f5f9] min-h-screen">
      {/* Campo de busca */}
      <SearchBar onSearch={handleSearch} placeholder="Pesquise por artigos"/>

      {/* Filtros */}
      <div className="flex flex-wrap gap-3 my-6">
        {filtrosDisponiveis.map((filtro, index) => (
          <button
            key={index}
            onClick={() => setFiltroAtivo(filtro)}
            className={`px-4 py-1 rounded-full border text-sm transition cursor-pointer
              ${filtroAtivo === filtro
                ? "bg-[#264466] text-white border-white"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {filtro}
          </button>
        ))}
      </div>

      {/* Lista de artigos */}
      {artigosFiltrados.length > 0 ? (
        <div className="space-y-4">
          {artigosFiltrados.map((artigo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 flex items-start justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold mb-1">{artigo.titulo}</h2>
                <p className="text-sm text-gray-500 mb-3">{artigo.descricao}</p>
                <span className="bg-[#264466] text-white text-xs px-3 py-1 rounded-full">
                  {artigo.categoria}
                </span>
              </div>
              <div className="flex flex-col items-end text-sm text-gray-400">
                <span>{artigo.data}</span>
                <FiDownload className="mt-2 text-lg cursor-pointer hover:text-gray-600" />
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
