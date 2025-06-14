import './chatMessage.css';

const ChatMessage = ({ text, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-start' : 'justify-end'} mb-2 px-2`}>
      <div
        className={`
          max-w-[50%] min-w-[100px] w-fit
          px-4 py-2 rounded-lg relative
          ${isUser ? 'bg-white text-black rounded-tl-none' : 'bg-[#264466] text-white rounded-tr-none'}
          break-words shadow-sm flex flex-col
        `}
      >
        <div className="text-base">
          {text}
        </div>

        {/* Cauda do balão estilo WhatsApp */}
        <div className={`absolute top-0 w-4 h-4 
          ${isUser 
            ? 'left-0 -ml-2 bg-white rounded-[6px] clip-path-other' 
            : 'right-0 -mr-2 bg-[#264466] rounded-[6px] clip-path-user'}
        `}></div>
      </div>
    </div>
  );
};

export default ChatMessage;
