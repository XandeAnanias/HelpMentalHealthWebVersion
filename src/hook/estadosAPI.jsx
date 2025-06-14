import { useEffect, useState } from "react";

export function useEstadosIBGE() {
  const [estados, setEstados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((res) => res.json())
      .then((data) => {
        const estadosOrdenados = data
          .map((estado) => ({
            sigla: estado.sigla,
            nome: estado.nome,
          }))
          .sort((a, b) => a.nome.localeCompare(b.nome));

        setEstados(estadosOrdenados);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { estados, loading };
}
