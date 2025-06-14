import React from 'react';
import Logo from '../../../assets/imagens/Logo.png';

export default function WelcomeContainer() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-full p-6 bg-[#f1f5f9]">
            {/* Imagem */}
            <div className="flex justify-center mb-8 md:mb-5 md:mr-10">
                <img 
                    src={Logo} 
                    alt="Help Mental Health" 
                    className="w-60 md:w-96 drop-shadow-lg" 
                />
            </div>

            {/* Texto de boas-vindas */}
            <div className="max-w-xl text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-[#264466] mb-4">
                    Bem-vindo(a) ao Painel do Psicólogo
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                    Este é o seu espaço para acompanhar atendimentos, gerenciar informações dos pacientes e oferecer o melhor suporte possível.
                </p>
                <p className="text-md text-gray-600">
                    Utilize as ferramentas disponíveis para manter um atendimento humanizado, organizado e eficaz. 
                    Sua dedicação faz a diferença na jornada de quem busca acolhimento e equilíbrio emocional.
                </p>
            </div>
        </div>
    );
}
