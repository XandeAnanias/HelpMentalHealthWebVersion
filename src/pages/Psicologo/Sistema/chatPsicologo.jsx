import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChatHeader from '../../../components/containers/chat/Psicologo/chatHeader.jsx';
import ChatMessage from '../../../components/containers/chat/Psicologo/chatMessage.jsx';
import ChatFooter from '../../../components/containers/chat/Psicologo/chatFooter.jsx';
import Walpaper from '../../../assets/imagens/Walpaper.png';
import { buscarMensagens } from '@/features/respostas/mensagensPsicologoService.js';

const ChatPsicologo = () => {
  const { id } = useParams();
  const psicologoId = parseInt(id);

  const [psicologo, setPsicologo] = useState(null);
  const [messages, setMessages] = useState([
    { text: 'Olá, estou me sentindo ansioso ultimamente.', isUser: true }
  ]);

  useEffect(() => {
    const dados = buscarMensagens();
    const encontrado = dados.find(p => p.id === psicologoId);
    setPsicologo(encontrado);
  }, [psicologoId]);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (newMessage) => {
    const messageObject = {
      text: newMessage,
      isUser: false,
      isFeedback: false, // adicionando para manter consistência com ChatUsuario
      feedbackType: null
    };
    setMessages(prev => [...prev, messageObject]);
  };

  const reportUser = () => {
    alert('Usuário reportado com sucesso');
  };

  return (
    <div className="flex flex-col h-screen" style={{ backgroundImage: `url(${Walpaper})`, backgroundSize: 'cover' }}>
      <ChatHeader 
        psychologistName={psicologo ? psicologo.nome : "Carregando..."}
        onReport={reportUser}
      />
      
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-3"
      >
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            text={message.text}
            isUser={message.isUser}
            isFeedback={message.isFeedback}
            feedbackType={message.feedbackType}
          />
        ))}
      </div>

      <ChatFooter onSend={handleSendMessage} />
    </div>
  );
};

export default ChatPsicologo;
