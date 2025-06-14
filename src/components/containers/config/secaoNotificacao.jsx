import { useState } from 'react';

export default function SecaoNotificacoes() {
  const [notificacoesAtivas, setNotificacoesAtivas] = useState(true);
  const [emailNotificacoes, setEmailNotificacoes] = useState(false);
  const [somNotificacoes, setSomNotificacoes] = useState(true);

  const toggleNotificacoes = () => {
    setNotificacoesAtivas(!notificacoesAtivas);
    //Se desativar todas as notificações, desativa também as sub-opções
    if (notificacoesAtivas) {
      setEmailNotificacoes(false);
      setSomNotificacoes(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#264466] mb-6">Configurações de Notificação</h2>
      
      <div className="space-y-4">
        {/*Switch principal*/}
        <div className="flex items-center justify-between">
          <span className="text-gray-800 font-medium">Permitir Notificações</span>
          <button
            onClick={toggleNotificacoes}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#3a628c] focus:ring-offset-2 ${notificacoesAtivas ? 'bg-[#3a628c]' : 'bg-gray-200'}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notificacoesAtivas ? 'translate-x-6' : 'translate-x-1'}`}
            />
          </button>
        </div>

        {/*Sub-opções (só aparecem se notificações estiverem ativas)*/}
        {notificacoesAtivas && (
          <div className="space-y-4 pl-6 border-l-2 border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Notificações por Email</span>
              <button
                onClick={() => setEmailNotificacoes(!emailNotificacoes)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#3a628c] focus:ring-offset-2 ${emailNotificacoes ? 'bg-[#3a628c]' : 'bg-gray-200'}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailNotificacoes ? 'translate-x-6' : 'translate-x-1'}`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-700">Som de Notificação</span>
              <button
                onClick={() => setSomNotificacoes(!somNotificacoes)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#3a628c] focus:ring-offset-2 ${somNotificacoes ? 'bg-[#3a628c]' : 'bg-gray-200'}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${somNotificacoes ? 'translate-x-6' : 'translate-x-1'}`}
                />
              </button>
            </div>

            <div className="pt-2">
              <p className="text-sm text-gray-500">
                Personalize como deseja receber alertas sobre mensagens e respostas.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}