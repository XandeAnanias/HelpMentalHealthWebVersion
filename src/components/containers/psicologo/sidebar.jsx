import { useNavigate, useLocation } from 'react-router-dom';
import { FaComments, FaFileAlt, FaHandHoldingUsd, FaInfoCircle, FaSignOutAlt, FaCog } from 'react-icons/fa';
import Logo from '../../../assets/imagens/Logo.png';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Pega o caminho atual de forma reativa
  const currentPath = location.pathname;

  const items = [
    { icon: FaComments, label: 'Mensagens', path: '/mensagens-recebidas' },
    { icon: FaFileAlt, label: 'Artigos', path: '/artigos-psicologo' },
    { icon: FaHandHoldingUsd, label: 'Doações', path: '/doacao-psicologo' },
    { icon: FaInfoCircle, label: 'Sobre Nós', path: '/about-psicologo' },
    { icon: FaCog, label: 'Configurações', path: '/configuracoes-psicologo' },
  ];

  return (
    <div className="h-screen w-1/5 bg-[#264466] p-5 flex flex-col">
      <div className="flex items-center gap-3 pb-8">
        <img src={Logo} className="w-16" alt="Logo" />
        <p className="text-2xl text-white font-bold">Help Mental Health</p>
      </div>

      <div className="flex flex-col justify-between h-[calc(100%-100px)]">
        <div className="space-y-4">
          {items.map(({ icon: Icon, label, path }) => {
            const isActive = currentPath === path;
            return (
              <div
                key={path}
                onClick={() => {
                  if (!isActive) {
                    navigate(path);
                  }
                }}
                className={`flex items-center gap-3 p-2 rounded-md hover:bg-[#3a628c] ${
                  isActive ? 'bg-[#3a628c] cursor-default' : 'cursor-pointer'
                }`}
              >
                <Icon className="text-white text-2xl" />
                <p className="text-lg text-white font-semibold">{label}</p>
              </div>
            );
          })}
        </div>

        <div
          className="p-2 rounded-md cursor-pointer hover:bg-[#3a628c] flex items-center gap-3"
          onClick={() => navigate('/')}
        >
          <FaSignOutAlt className="text-white text-2xl" />
          <p className="text-lg text-white font-semibold">Sair</p>
        </div>
      </div>
    </div>
  );
}
