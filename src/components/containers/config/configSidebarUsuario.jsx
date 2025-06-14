import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUser, FaShieldAlt, FaBell, FaLock } from 'react-icons/fa';

export default function SidebarConfigUsuario({ secaoAtiva, setSecaoAtiva }) {
  const navigate = useNavigate();

  const opcoes = [
    { chave: 'perfil', label: 'Perfil', icon: <FaUser /> },
    { chave: 'seguranca', label: 'Segurança', icon: <FaShieldAlt /> },
    { chave: 'notificacoes', label: 'Notificações', icon: <FaBell /> },
    { chave: 'privacidade', label: 'Privacidade', icon: <FaLock /> },
  ];

  return (
    <aside className="bg-[#264466] text-white md:w-1/5 p-6 space-y-4">
      <div
        className="flex items-center gap-2 cursor-pointer hover:underline w-20"
        onClick={() => navigate('/welcome-usuario')}
      >
        <FaArrowLeft className="text-white" />
        <span>Voltar</span>
      </div>

      <h2 className="text-2xl font-bold mt-6">Configurações</h2>

      {opcoes.map((opcao) => (
        <div
          key={opcao.chave}
          className={`flex items-center gap-3 p-2 rounded-md cursor-pointer font-bold text-lg ${
            secaoAtiva === opcao.chave ? 'bg-[#3a628c]' : 'hover:bg-[#3a628c]'
          }`}
          onClick={() => setSecaoAtiva(opcao.chave)}
        >
          {opcao.icon}
          {opcao.label}
        </div>
      ))}
    </aside>
  );
}
