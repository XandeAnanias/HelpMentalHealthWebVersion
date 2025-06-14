import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import LoginUsuario from './pages/Usuario/Form/loginUsuario.jsx'
import LoginPsicologo from './pages/Psicologo/Form/loginPsicologo.jsx'
import CadastroUsuario from './pages/Usuario/Form/cadastroUsuario'
import CadastroPsicologo from './pages/Psicologo/Form/cadastroPsicologo.jsx'
import SistemaUsuario from './pages/Usuario/Sistema/sistemaUsuario.jsx'
import RespostasUsuario from './pages/Usuario/Sistema/respostasUsuario'
import WelcomeUsuario from './pages/Usuario/Sistema/welcomeUsuario.jsx'
import AboutUsuario from './pages/Usuario/Sistema/aboutUsuario.jsx'
import WriteMsgUsuario from './pages/Usuario/Sistema/writeMsgUsuario.jsx'
import ChatUsuario from './pages/Usuario/Sistema/chatUsuario.jsx'
import AssinaturaUsuario from './pages/Usuario/Sistema/assinaturaUsuario.jsx'
import DonationUsuario from './pages/Usuario/Sistema/doacaoUsuario.jsx'
import ArtigoUsuario from './pages/Usuario/Sistema/artigosUsuario.jsx'
import ConfigUsuario from './pages/Usuario/Sistema/configUsuario.jsx'
import WelcomePsicologo from './pages/Psicologo/Sistema/welcomePsicologo.jsx'
import AboutPsicologo from './pages/Psicologo/Sistema/aboutPsicologo.jsx'
import MensagensRecebidas from './pages/Psicologo/Sistema/mensagensRecebidas.jsx'
import ArtigosPsicologo from './pages/Psicologo/Sistema/artigosPsicologo.jsx'
import DonationPsicologo from './pages/Psicologo/Sistema/doacaoPsicologo.jsx'
import ChatPsicologo from './pages/Psicologo/Sistema/chatPsicologo.jsx'
import ConfigPsicologo from './pages/Psicologo/Sistema/configPsicologo.jsx'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-usuario" element={<LoginUsuario />} />
        <Route path="/login-psicologo" element={<LoginPsicologo />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/cadastro-psicologo" element={<CadastroPsicologo />} />
        <Route path="/sistema-usuario" element={<SistemaUsuario />} />
        <Route path="/respostas-usuario" element={<RespostasUsuario />} />
        <Route path="/welcome-usuario" element={<WelcomeUsuario />} />
        <Route path="/about-usuario" element={<AboutUsuario />} />
        <Route path="/escrever-mensagem" element={<WriteMsgUsuario />} />
        <Route path="/chat-usuario/:id" element={<ChatUsuario />} />
        <Route path="/assinatura-usuario" element={<AssinaturaUsuario />} />
        <Route path="/doacao-usuario" element={<DonationUsuario />} />
        <Route path="/artigos-usuario" element={<ArtigoUsuario />} />
        <Route path="/welcome-psicologo" element={<WelcomePsicologo />} />
        <Route path="/configuracoes-usuario" element={<ConfigUsuario />} />
        <Route path="/about-psicologo" element={<AboutPsicologo />} />
        <Route path="/mensagens-recebidas" element={<MensagensRecebidas />} />
        <Route path="/artigos-psicologo" element={<ArtigosPsicologo />} />
        <Route path="/doacao-psicologo" element={<DonationPsicologo />} />
        <Route path="/chat-psicologo/:id" element={<ChatPsicologo />} />
        <Route path="/configuracoes-psicologo" element={<ConfigPsicologo />} />

        

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes