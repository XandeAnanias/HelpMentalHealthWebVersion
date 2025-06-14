import { BsArrowLeft } from 'react-icons/bs';
import { BiCommentX } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import useDenuncia from '@/hook/denuncia.jsx';
import ModeloConfirmacao from '@/components/containers/confirmacao.jsx';

export default function ChatHeader({ psychologistName }) {
  const navigate = useNavigate();
  const {
    hasReported,
    mostrarModal,
    solicitarDenuncia,
    confirmarDenuncia,
    cancelarDenuncia
  } = useDenuncia();

  return (
    <>
      <div className="flex justify-between items-center p-5 bg-[#264466] text-white sticky top-0 z-10 shadow-md">
        <button 
          onClick={() => navigate('/respostas-usuario')} 
          className="text-xl hover:opacity-80 cursor-pointer"
        >
          <BsArrowLeft size={28} />
        </button>
        <span className="text-2xl font-bold">{psychologistName}</span>
        <button 
          onClick={solicitarDenuncia}
          className="text-xl hover:opacity-80 cursor-pointer"
          title="Denunciar psicólogo"
        >
          <BiCommentX size={28} />
        </button>
      </div>

      {mostrarModal && (
        <ModeloConfirmacao
          titulo="Confirmar denúncia"
          mensagem="Deseja realmente denunciar este psicólogo?"
          onConfirmar={confirmarDenuncia}
          onCancelar={cancelarDenuncia}
        />
      )}
    </>
  );
}
