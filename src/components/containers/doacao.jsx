import React, { useState } from 'react';
import Logo from '../../assets/imagens/Logo.png';
import QrCode from '../../assets/imagens/QrCode.png'; 

export default function Doacao() {
  const [copiado, setCopiado] = useState(false);
  const chavePix = '19999694728';

  const copiarChave = () => {
    navigator.clipboard.writeText(chavePix)
      .then(() => {
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000); // feedback temporário de 2 segundos
      })
      .catch((err) => {
        console.error('Erro ao copiar:', err);
      });
  };

  return (
    <div className="min-h-screen bg-[#EDF2F7] flex flex-col items-center justify-center p-6">
      

      <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-4xl flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Parte de Informações */}
        <div className="flex flex-col items-center text-center max-w-md">
          <div className="mb-6">
            <img
              src={Logo}
              alt="Logo"
              className="w-36 h-36 rounded-full object-cover border-4 border-[#264466]"
            />
          </div>

          <p className="text-[#264466] text-2xl mb-2 ">
            Nos ajude a manter este projeto ativo e continuar oferecendo apoio a quem precisa.
          </p>
          <p className="text-[#264466] text-xl mb-6">
            Faça uma doação agora mesmo e contribua para o bem-estar de muitos.
          </p>

          <div className="mb-6">
            <p className="text-xl text-[#264466] font-medium">Chave Pix:</p>
            <p className="text-2xl font-semibold text-[#264466] mt-2 select-all">{chavePix}</p>
          </div>

          <button 
            onClick={copiarChave}
            className="bg-[#264466] text-white px-6 py-2 rounded hover:bg-[#3a628c] cursor-pointer transition"
          >
            {copiado ? 'Chave Copiada!' : 'Copiar Chave'}
          </button>
        </div>

        {/* QR Code */}
        <div className="flex justify-center">
          <img
            src={QrCode}
            alt="QR Code Pix"
            className="w-64 h-64 object-contain border-2 border-[#264466] rounded-lg p-2 bg-[#F7FAFC]"
          />
        </div>
      </div>
    </div>
  );
}
