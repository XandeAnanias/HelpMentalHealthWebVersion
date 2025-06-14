import React from 'react';
import Logo from '../../../assets/imagens/Logo.png';

export default function WelcomeContainer() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-full p-6 bg-[#f1f5f9]">
            {/* Imagem */}
            <div className="flex justify-center mb-8 md:mb-5 md:mr-10">
                <img 
                    src={Logo} 
                    alt="Saúde Mental" 
                    className="w-60 md:w-96 drop-shadow-lg" 
                />
            </div>

            {/* Texto de boas-vindas */}
            <div className="max-w-xl text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-[#264466] mb-4">
                    Bem-vindo(a) ao Help Mental Health
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                    Aqui você encontra apoio, acolhimento e informações para cuidar da sua saúde mental.
                    Nossa missão é te ajudar a trilhar um caminho mais leve, equilibrado e saudável.
                </p>
                <p className="text-md text-gray-600">
                    Explore nossos artigos, converse com especialistas e encontre respostas para as suas dúvidas. 
                    Lembre-se: cuidar da mente é um ato de amor próprio.
                </p>
            </div>
        </div>
    );
}
