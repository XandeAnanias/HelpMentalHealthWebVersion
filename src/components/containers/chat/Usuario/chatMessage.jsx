import './chatMessage.css'

const ChatMessage = ({ text, isUser, isFeedback, feedbackType, timestamp }) => {
  // WhatsApp-like message styling
  const messageClasses = `max-w-[75%] min-w-[20%] p-2 px-3 rounded-lg relative break-words flex flex-col ${
    isUser
      ? 'ml-auto bg-[#264466] rounded-tr-none' // User message (green bubble)
      : 'mr-auto bg-white rounded-tl-none' // Other person's message (white bubble)
  } ${
    isFeedback
      ? feedbackType === 'like'
        ? 'border border-[#4CAF50]'
        : 'border border-[#F44336]'
      : ''
  } shadow-sm`;

  // WhatsApp-like timestamp styling
  const timeClasses = `text-xs mt-1 ml-auto ${
    isUser ? 'text-white' : 'text-[#999]'
  }`;

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2 px-2`}>
      <div className={messageClasses}>
        <div className={`${isUser ? 'text-white' : 'text-[#111]'} text-lg`}>
  {text}
</div>
        <div className={timeClasses}>
          {timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          {isUser && (
            <span className="ml-1">
              {feedbackType === 'like' ? '👍' : feedbackType === 'dislike' ? '👎' : '✓✓'}
            </span>
          )}
        </div>
        {/* WhatsApp-style message pointer */}
        <div className={`absolute top-0 w-5 h-5 ${
          isUser
            ? 'right-0 -mr-3 bg-[#264466] rounded-[8px] clip-path-user'
            : 'left-0 -ml-3 bg-white rounded-[8px] clip-path-other'
        }`}></div>
      </div>
    </div>
  );
};

export default ChatMessage;