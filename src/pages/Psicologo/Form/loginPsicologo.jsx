import './loginPsicologo.css';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../schemas/Psicologo/validationLogin.jsx";
import Logo from '../../../assets/imagens/Logo.png';
import img from '../../../assets/imagens/equipe-medica (1).png';
import InputCpf from '../../../components/Inputs/inputCpf.jsx';
import InputSenha from '../../../components/Inputs/inputSenha.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPsicologo() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    control,
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const dadosFinal = {
      cpf: data.cpf,
      senha: data.senha,
    };

    try {
      const response = await axios.post('http://localhost:8080/api-hmh/psicologo/login', dadosFinal, {withCredentials:true} );
      
      console.log('Login realizado com sucesso:', response.data);

      navigate('/welcome-psicologo');  
      
    } catch (error) {
      console.error('Erro ao fazer login:', error);

      if (error.response && error.response.status >= 401) {
        setError('geral', {
          type: 'manual',
          message: 'CPF ou senha incorretos.',
        });
      } else {
        setError('geral', {
          type: 'manual',
          message: 'Erro no servidor. Tente novamente mais tarde.',
        });
      }
    }
  };

  const handleBlur = async (field) => {
    const result = await trigger(field);
    if (!result) {
      console.log(`Erro na validação do campo ${field}`);
    }
  };

  return (
    <div className="flex flex-1 min-h-screen">
      {/* Lado esquerdo */}
      <div className="hidden md:block md:w-2/3 bg-blue-100 bg-opacity-10">
        <div className="h-full flex items-center justify-center p-12">
          <div className="max-w-full">
            <div className="flex justify-center">
              <img src={img} className="w-70" alt="Equipe médica" />
            </div>
            <h1 className="text-4xl font-bold text-[#264466] mb-4 text-center">
              Boas vindas à Help Mental Health
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Conecte-se com pessoas e permita que apreciem seu trabalho.
            </p>
          </div>
        </div>
      </div>

      {/* Lado direito */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 flex justify-center items-center">
            <img src={Logo} alt="Logo" className="h-20 mr-5" />
            <h2 className="text-2xl font-bold text-[#264466] text-center">
              Help Mental Health
            </h2>
          </div>

          {errors.geral && (
            <div className="mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
              <p>{errors.geral.message}</p>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div className='block h-47'>
              <Controller
                name="cpf"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputCpf
                    label="CPF"
                    id="cpf"
                    name="cpf"
                    placeholder="Digite seu CPF"
                    error={errors.cpf}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={() => handleBlur("cpf")}
                  />
                )}
              />

              <InputSenha
                label="Senha"
                id="senha"
                name="senha"
                placeholder="Digite sua senha"
                error={errors.senha}
                {...register("senha")}
                onBlur={() => handleBlur("senha")}
              />
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[#264466] hover:text-[#1a2f45] underline"
                >
                  Esqueceu sua senha?
                </a>
              </div>
            </div>

            <div>
              <button type='submit'
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#264466] 
                hover:bg-[#1a2f45] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#264466] transition duration-200 cursor-pointer"
              >
                Entrar
              </button>
            </div>

            <div>
              <button
                type="button"
                onClick={() => navigate('/cadastro-psicologo')} 
                className="w-full flex justify-center py-3 px-4 border-2 rounded-lg shadow-sm text-sm 
                font-medium text-[#264466] bg-white border-[#264466] hover:bg-[#1a2f45]
                hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-[#264466] transition duration-200 cursor-pointer"
              >
                Criar Cadastro
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="font-medium text-[#264466] hover:text-[#1a2f45] underline"
            >
              Voltar para a Página Inicial
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Precisa de ajuda?
              <br />
              Apoio pelo email:{" "}
              <a
                href="mailto:helpmentalhealth@gmail.com"
                className="underline"
              >
                helpmentalhealth@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPsicologo;
