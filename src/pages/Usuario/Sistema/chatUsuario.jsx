import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChatHeader from '../../../components/containers/chat/Usuario/chatHeader.jsx';
import ChatMessage from '../../../components/containers/chat/Usuario/chatMessage.jsx';
import ChatFooter from '../../../components/containers/chat/Usuario/chatFooter.jsx';
import Walpaper from '../../../assets/imagens/Walpaper.png';
import { getRespostasUsuario } from '@/features/respostas/respostasUsuarioService.js';

const ChatUsuario = () => {
  const { id } = useParams();
  const respostaId = parseInt(id);

  const [psicologo, setPsicologo] = useState(null);
  const [messages, setMessages] = useState([]);
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const dados = getRespostasUsuario();
    const encontrado = dados.find(p => p.id === respostaId);
    setPsicologo(encontrado);

    if (encontrado) {
      // Adiciona mensagem inicial com base no conteúdo da resposta
      setMessages([
        { text: 'Mensagem do Usuário', isUser: true },
        { text: encontrado.conteudo, isUser: false }
      ]);
    }
  }, [respostaId]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleFeedback = (isLike) => {
    const feedbackMessage = {
      text: isLike ? '👍 Gostei, me ajudou' : '👎 Não me ajudou',
      isUser: true,
      isFeedback: true,
      feedbackType: isLike ? 'like' : 'dislike'
    };
    
    setMessages(prev => [...prev, feedbackMessage]);
    setFeedbackGiven(true);
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

      <ChatFooter 
        feedbackGiven={feedbackGiven} 
        onFeedback={handleFeedback} 
      />
    </div>
  );
};

export default ChatUsuario;
