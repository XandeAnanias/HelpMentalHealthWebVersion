const Assinatura = () => {
  const planos = [
    {
      periodo: "Mensal",
      precoNormal: "R$7,90",
      descricao: "- Acesso geral aos artigos produzidos pelos Psicólogos \n- Escolhe qual psicologo enviar mensagem \n- Maior número de mensagens que pode enviar \n- Apoio aos profissionais",
      obs: "Por 1 mês",
    },
    {
      periodo: "3 Meses",
      precoSemDesconto: "R$23,70",
      preco: "R$21,33",
      desconto: "10% de desconto",
      descricao: "- Acesso geral aos artigos produzidos pelos Psicólogos \n- Escolhe qual psicologo enviar mensagem \n- Maior número de mensagens que pode enviar \n- Apoio aos profissionais",
      obs: "Por 3 meses",
    },
    {
      periodo: "Anual",
      precoSemDesconto: "R$94,80",
      preco: "R$85,32",
      desconto: "10% de desconto",
      descricao: "- Acesso geral aos artigos produzidos pelos Psicólogos \n- Escolhe qual psicologo enviar mensagem \n- Maior número de mensagens que pode enviar \n- Apoio aos profissionais",
      obs: "Fatura anual",
    },
  ];

  return (
    <div className="p-8 bg-[#f1f5f9] h-full">
      <h1 className="text-3xl font-bold mb-10 text-[#264466]">
        Prazos de Assinatura
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-150">
        {planos.map((plano) => (
          <div
            key={plano.periodo}
            className="border border-[#264466] rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition w-full flex flex-col justify-between"
          >
            <div className="text-xl bg-[#264466] text-white px-4 py-2 rounded-full inline-block">
              {plano.periodo}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Beneficios
            </h2>
            <p className="text-lg text-gray-500 whitespace-pre-line mb-4">{plano.descricao}</p>
            
            <div className="text-2xl font-bold text-red-800 line-through -mb-5">
              {plano.precoSemDesconto}
            </div>

            <div className="text-4xl font-bold text-green-800 mb-2">
              {plano.preco}
            </div>

            <div className="text-3xl font-bold text-gray-800">
              {plano.precoNormal}
            </div>

            <div className="text-2xl mb-2 text-green-800 font-bold -mt-6">
                {plano.desconto}
            </div>

            {plano.obs && (
              <p className="text-md text-gray-500 mb-6">{plano.obs}</p>
            )}

            <div className="w-full bg-[#264466] text-white py-2 rounded-lg text-center text-xl font-bold justify-self-end cursor-pointer hover:shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
              Assinar
            </div>
          </div>
        ))}
          </div>
    </div>
  );
};

export default Assinatura;
