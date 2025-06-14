import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs';

const ChatFooter = ({ feedbackGiven, onFeedback }) => {
  return (
    <div className="bg-[#264466] sticky bottom-0 flex items-center gap-3 border-t border-gray-200 shadow-lg p-5">
      <span className="text-white font-bold text-2xl">
        {feedbackGiven ? 'Agradecemos seu feedback' : 'A mensagem te ajudou?'}
      </span>
      {!feedbackGiven && (
        <>
          <button
            onClick={() => onFeedback(true)}
            className="w-10 h-10 rounded-full bg-white text-[#264466] flex items-center justify-center hover:bg-[#51ef84] hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <BsHandThumbsUp className="text-xl" />
          </button>
          <button
            onClick={() => onFeedback(false)}
            className="w-10 h-10 rounded-full bg-white text-[#264466] flex items-center justify-center hover:bg-[#ff5036] hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <BsHandThumbsDown className="text-xl" />
          </button>
        </>
      )}
    </div>
  );
};

export default ChatFooter;