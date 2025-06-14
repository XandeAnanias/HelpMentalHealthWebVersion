import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputContaSenha from '../../../components/Inputs/inputContaSenha.jsx';

export default function SecaoSeguranca() {
  const navigate = useNavigate();
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erros, setErros] = useState({});
  const [mensagem, setMensagem] = useState('');

  const handleDesconectar = () => {
    //Lógica para logout (limpar tokens, estado, etc.)
    navigate('/'); //Redireciona para a página inicial
  };

  const handleAlterarSenha = () => {
    //Validação dos campos
    const novosErros = {};
    
    if (!senhaAtual) {
      novosErros.senhaAtual = 'Digite sua senha atual';
    }
    
    if (!novaSenha || novaSenha.length < 8) {
      novosErros.novaSenha = 'A senha deve ter pelo menos 8 caracteres';
    }
    
    if (novaSenha !== confirmarSenha) {
      novosErros.confirmarSenha = 'As senhas não coincidem';
    }
    
    setErros(novosErros);
    
    if (Object.keys(novosErros).length === 0) {
      //Lógica para alterar a senha (chamar API, etc.)
      setMensagem('Senha alterada com sucesso!');
      setTimeout(() => {
        setMensagem('');
        setSenhaAtual('');
        setNovaSenha('');
        setConfirmarSenha('');
      }, 3000);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-[#264466] mb-6">Gerenciar Conta</h2>
      <div className="space-y-6 text-gray-800">
        <p>Você pode ajustar dados de login, redes conectadas e preferências da conta.</p>
        
        {/*Seção Alterar Senha*/}
        <div className="border rounded-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Alterar Senha</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Senha Atual</label>
              <InputContaSenha 
                value={senhaAtual}
                onChange={(e) => setSenhaAtual(e.target.value)}
              />
              {erros.senhaAtual && <p className="text-red-500 text-sm mt-1">{erros.senhaAtual}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Nova Senha</label>
              <InputContaSenha 
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
              />
              {erros.novaSenha && <p className="text-red-500 text-sm mt-1">{erros.novaSenha}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Confirmar Nova Senha</label>
              <InputContaSenha 
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
              {erros.confirmarSenha && <p className="text-red-500 text-sm mt-1">{erros.confirmarSenha}</p>}
            </div>
            
            <button
              onClick={handleAlterarSenha}
              className="px-4 py-2 bg-[#264466] text-white rounded hover:bg-[#3a628c] transition cursor-pointer"
            >
              Confirmar Alteração
            </button>
            
            {mensagem && <p className="text-green-600 font-medium mt-2">{mensagem}</p>}
          </div>
        </div>
        
        {/*Botão Sair*/}
        <div className="border-t pt-4">
          <button 
            onClick={handleDesconectar}
            className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition cursor-pointer"
          >
            Sair da Conta
          </button>
        </div>
      </div>
    </>
  );
}