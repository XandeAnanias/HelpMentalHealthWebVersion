import { useState } from 'react';
import Logo from '../../assets/imagens/Logo.png';

export default function WriteMensagem() {
    const [mensagem, setMensagem] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleEnviar = () => {
        if (mensagem.trim() !== '') {
            setShowModal(true);
            // Aqui você pode adicionar o envio da mensagem para o backend
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f1f5f9] px-4">
            <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-2xl">
                {/* Logo e título */}
                <div className="flex flex-col items-center mb-8">
                    <img src={Logo} alt="Logo" className="w-28 mb-3" />
                    <h1 className="text-3xl font-bold text-[#264466]">Compartilhe sua Mensagem</h1>
                    <p className="text-center text-gray-600 mt-3 text-base">
                        Este é um espaço seguro. Escreva seu relato, desabafo ou mensagem.
                        Nossa equipe irá te ouvir com empatia.
                    </p>
                </div>

                {/* Textarea */}
                <textarea
                    className="w-full h-60 p-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#264466] resize-none text-base"
                    placeholder="Como você está se sentindo hoje? Conte-nos sua história..."
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                ></textarea>

                {/* Botão */}
                <button
                    onClick={handleEnviar}
                    className="mt-6 w-full bg-[#264466] text-white font-semibold py-4 rounded-2xl hover:bg-[#3a628c] transition-colors cursor-pointer text-lg"
                >
                    Enviar Mensagem
                </button>
            </div>

            {/* Modal de confirmação */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
                    <div className="bg-white p-10 rounded-lg shadow-xl text-center w-[90%] max-w-lg">
                        <h2 className="text-2xl font-bold mb-5 text-[#264466]">
                            Mensagem Enviada!
                        </h2>
                        <p className="mb-7 text-gray-700 text-base">
                            Agradecemos por compartilhar. Nossa equipe irá analisar sua mensagem com carinho e atenção.
                        </p>
                        <button
                            onClick={() => {
                                setShowModal(false);
                                setMensagem('');
                            }}
                            className="bg-[#264466] text-white px-8 py-3 rounded-2xl hover:bg-[#3a628c] transition-colors text-lg cursor-pointer"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
