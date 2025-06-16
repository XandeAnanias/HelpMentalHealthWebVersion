import { useNavigate } from 'react-router-dom';

export default function ChatItem({ nome, mensagem, hora, path, foto }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="flex items-center justify-between p-3 bg-white rounded-lg shadow mx-4 cursor-pointer hover:bg-gray-50 transition"
    >
      <div className="flex items-center space-x-4">
        {foto ? (
          <img
            src={foto}
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center text-white text-lg">
            {nome.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <p className="font-semibold text-[#264466]">{nome}</p>
          <p className="text-sm text-gray-500">{mensagem}</p>
        </div>
      </div>
      <p className="text-xs text-gray-400">{hora}</p>
    </div>
  );
}