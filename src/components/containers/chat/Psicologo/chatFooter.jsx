import { useState, useRef, useEffect } from 'react';
import { IoMdSend } from 'react-icons/io';

const ChatFooter = ({ onSend }) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput('');
    }
  };

  // Função para ajustar a altura dinamicamente
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [input]);

  return (
    <div className="flex items-end bg-[#264466] p-4 w-full gap-4">
      <textarea
        ref={textareaRef}
        className="flex-1 rounded-lg p-3 resize-none outline-none bg-white text-black leading-6"
        placeholder="Digite sua resposta..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        rows={1}
        style={{ maxHeight: '150px' }}
      />

      <button
        onClick={handleSend}
        className="text-white text-4xl p-2 hover:opacity-80 transition active:scale-90 cursor-pointer"
      >
        <IoMdSend />
      </button>
    </div>
  );
};

export default ChatFooter;
