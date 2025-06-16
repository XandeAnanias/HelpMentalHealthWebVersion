import { createContext, useState, useContext, useEffect } from 'react';

const ArtigosContext = createContext();

const artigosIniciais = [
  {
    id: 1,
    titulo: "Entendendo a Depressão",
    descricao: "Um guia completo sobre depressão e seus sintomas",
    categoria: "Depressão",
    data: "15/03/2023",
    arquivo: "", // não há arquivo base64 inicialmente
    nomeArquivo: "depressao.pdf"
  },
  {
    id: 2,
    titulo: "Gerenciando a Ansiedade",
    descricao: "Técnicas para controlar crises de ansiedade",
    categoria: "Ansiedade",
    data: "22/04/2023",
    arquivo: "",
    nomeArquivo: "ansiedade.pdf"
  },
  {
    id: 3,
    titulo: "Vivendo com TEA",
    descricao: "Abordagens e compreensão do Transtorno do Espectro Autista",
    categoria: "TEA",
    data: "01/02/2023",
    arquivo: "",
    nomeArquivo: "tea.pdf"
  }
];

export function ArtigosProvider({ children }) {
  const [artigos, setArtigos] = useState(() => {
    const armazenado = localStorage.getItem('artigos');
    return armazenado ? JSON.parse(armazenado) : artigosIniciais;
  });

  useEffect(() => {
    localStorage.setItem('artigos', JSON.stringify(artigos));
  }, [artigos]);

  const adicionarArtigo = (novoArtigo) => {
    setArtigos(prev => [...prev, { ...novoArtigo, id: prev.length + 1 }]);
  };

  const removerArtigo = (id) => {
    setArtigos(prev => prev.filter(artigo => artigo.id !== id));
  };

  return (
    <ArtigosContext.Provider value={{ artigos, adicionarArtigo, removerArtigo }}>
      {children}
    </ArtigosContext.Provider>
  );
}

export function useArtigos() {
  return useContext(ArtigosContext);
}