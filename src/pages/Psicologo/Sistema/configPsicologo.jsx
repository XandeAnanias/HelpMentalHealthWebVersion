import { useState } from 'react';
import SidebarConfigPsicologo from '../../../components/containers/config/configSidebarPsicologo.jsx';
import SecaoPerfil from '../../../components/containers/config/secaoPerfil.jsx';
import SecaoSeguranca from '../../../components/containers/config/secaoSeguranca.jsx';
import SecaoNotificacoes from '../../../components/containers/config/secaoNotificacao.jsx';
import SecaoPrivacidade from '../../../components/containers/config/secaoPrivacicade.jsx';

export default function ConfigPsicologo() {
  const [secaoAtiva, setSecaoAtiva] = useState('perfil');

  const renderConteudo = () => {
    switch (secaoAtiva) {
      case 'perfil': return <SecaoPerfil />;
      case 'seguranca': return <SecaoSeguranca />;
      case 'notificacoes': return <SecaoNotificacoes />;
      case 'privacidade': return <SecaoPrivacidade />;
      case 'sair': 
      default: return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f1f5f9]">
      <SidebarConfigPsicologo secaoAtiva={secaoAtiva} setSecaoAtiva={setSecaoAtiva} />
      <main className="flex-1 p-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          {renderConteudo()}
        </div>
      </main>
    </div>
  );
}
