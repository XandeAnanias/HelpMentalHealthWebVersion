// components/ModalConfirmacao.jsx

export default function ModeloConfirmacao({ titulo, mensagem, onConfirmar, onCancelar }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md text-center">
        <h2 className="text-xl font-bold mb-4 text-[#264466]">{titulo}</h2>
        <p className="mb-6 text-gray-700">{mensagem}</p>
        <div className="flex justify-center gap-4">
          <button
            className="px-6 py-2 rounded bg-[#264466] text-white hover:bg-[#3a628c] cursor-pointer transition"
            onClick={onConfirmar}
          >
            Confirmar
          </button>
          <button
            className="px-6 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400 cursor-pointer transition"
            onClick={onCancelar}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
