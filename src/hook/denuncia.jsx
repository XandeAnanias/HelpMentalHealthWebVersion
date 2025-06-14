// hooks/useDenuncia.js

import { useState } from 'react';

export default function useDenuncia() {
  const [hasReported, setHasReported] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);

  const solicitarDenuncia = () => {
    if (hasReported) {
      alert('Você já realizou uma denúncia para este psicólogo.');
    } else {
      setMostrarModal(true);
    }
  };

  const confirmarDenuncia = () => {
    setHasReported(true);
    setMostrarModal(false);
    alert('Denúncia realizada com sucesso!');
  };

  const cancelarDenuncia = () => {
    setMostrarModal(false);
  };

  return {
    hasReported,
    mostrarModal,
    solicitarDenuncia,
    confirmarDenuncia,
    cancelarDenuncia
  };
}
