import { useState } from 'react';
import Sidebar from '../../../components/containers/psicologo/sidebar.jsx';

export default function ArtigosPsicologo() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [temas, setTemas] = useState([]);
  const [arquivo, setArquivo] = useState(null);

  const temasDisponiveis = ['Depressão', 'Ansiedade', 'TEA', 'Burnout', 'Outro'];

  const handleTemaChange = (tema) => {
    setTemas((prev) =>
      prev.includes(tema) ? prev.filter((t) => t !== tema) : [...prev, tema]
    );
  };

  const handleArquivoChange = (e) => {
    setArquivo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Artigo enviado com sucesso!');
    // aqui entraria a lógica de envio para o backend
  };

  return (
    <div className="flex min-h-screen">
    <Sidebar />
    <div className='flex-1'>
    <div className="min-h-screen bg-[#f1f5f9] flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-5xl p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-[#264466] mb-6">Enviar Novo Artigo</h2>
        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Título do Artigo</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:ring-[#264466] focus:border-[#264466]"
              placeholder="Digite o título"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded focus:ring-[#264466] focus:border-[#264466]"
              placeholder="Descreva o conteúdo do artigo"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Selecione os temas:</label>
            <div className="grid sm:grid-cols-3 gap-3">
              {temasDisponiveis.map((tema) => (
                <label key={tema} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={temas.includes(tema)}
                    onChange={() => handleTemaChange(tema)}
                    className="h-4 w-4 text-[#264466] focus:ring-[#264466] border-gray-300 rounded cursor-pointer"
                  />
                  <span className="text-gray-700 cursor-pointer">{tema}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Selecionar Arquivo PDF</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleArquivoChange}
              className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:cursor-pointer file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#264466] file:text-white hover:file:bg-[#3a628c]"
              required
            />
            {arquivo && <p className="mt-2 text-sm text-gray-600">{arquivo.name}</p>}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-[#264466] text-white rounded-lg hover:bg-[#3a628c] transition font-medium cursor-pointer"
            >
              Enviar Artigo
            </button>
          </div>

        </form>
      </div>
    </div>
    </div>
    </div>
  );
}
