import { useState } from 'react';

export default function SecaoPerfil() {
  const [dados, setDados] = useState({
    nome: 'Daniel José Bernardo',
    email: 'c1203251@g.unicamp.br',
    telefone: '',
    nascimento: '',
  });

  const [mensagem, setMensagem] = useState('');
  const [erros, setErros] = useState({});

  const validar = () => {
    const novosErros = {};
    if (!dados.nome.trim() || dados.nome.trim().length < 3) {
      novosErros.nome = 'Nome deve conter ao menos 3 caracteres';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(dados.email)) {
      novosErros.email = 'E-mail inválido';
    }

    return novosErros;
  };

  const formatarTelefone = (valor) => {
    const numeros = valor.replace(/\D/g, '').slice(0, 11);
    
    if (numeros.length === 0) return '';
    
    //Formato: (99) 99999-9999
    if (numeros.length <= 2) {
      return `(${numeros}`;
    }
    if (numeros.length <= 7) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    }
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`;
  };

  const formatarNascimento = (valor) => {
    const numeros = valor.replace(/\D/g, '').slice(0, 8);
    if (numeros.length <= 2) return numeros;
    if (numeros.length <= 4) return `${numeros.slice(0, 2)}/${numeros.slice(2)}`;
    return `${numeros.slice(0, 2)}/${numeros.slice(2, 4)}/${numeros.slice(4)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'telefone') {
      const formatado = formatarTelefone(value);
      setDados({ ...dados, telefone: formatado });
    } else if (name === 'nascimento') {
      const formatado = formatarNascimento(value);
      setDados({ ...dados, nascimento: formatado });
    } else {
      setDados({ ...dados, [name]: value });
    }
  };

  const handleSubmit = () => {
    const errosValidados = validar();
    if (Object.keys(errosValidados).length > 0) {
      setErros(errosValidados);
      setMensagem('');
      return;
    }

    setErros({});
    setMensagem('Dados atualizados com sucesso!');
    setTimeout(() => setMensagem(''), 3000);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#264466] mb-6">Informações do Perfil</h2>
      <div className="grid md:grid-cols-2 gap-6 text-gray-800">
        {/*Nome*/}
        <div>
          <label className="block text-sm font-medium text-gray-600">Nome</label>
          <input
            type="text"
            name="nome"
            value={dados.nome}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded bg-white"
          />
          {erros.nome && <p className="text-red-600 text-sm mt-1">{erros.nome}</p>}
        </div>

        {/*Email*/}
        <div>
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={dados.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded bg-white"
          />
          {erros.email && <p className="text-red-600 text-sm mt-1">{erros.email}</p>}
        </div>

        {/*Telefone*/}
        <div>
          <label className="block text-sm font-medium text-gray-600">Telefone</label>
          <input
            type="text"
            name="telefone"
            value={dados.telefone}
            onChange={handleChange}
            maxLength={15} // (2) + espaço + 5 + hífen + 4 = 15 caracteres
            placeholder="(99) 99999-9999"
            className="w-full mt-1 p-2 border rounded bg-white"
          />
        </div>

        {/*Nascimento*/}
        <div>
          <label className="block text-sm font-medium text-gray-600">Data de Nascimento</label>
          <input
            type="text"
            name="nascimento"
            value={dados.nascimento}
            onChange={handleChange}
            maxLength={10}
            placeholder="dd/mm/aaaa"
            className="w-full mt-1 p-2 border rounded bg-white"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 px-4 py-2 bg-[#264466] text-white rounded hover:bg-[#3a628c] transition cursor-pointer"
      >
        Atualizar dados
      </button>

      {mensagem && <p className="mt-4 text-green-600 font-semibold">{mensagem}</p>}
    </div>
  );
}