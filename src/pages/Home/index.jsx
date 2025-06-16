import './index.css'
import Logo from '../../assets/imagens/Logo.png'
import foto1 from '../../assets/imagens/work.jpg'
import foto2 from '../../assets/imagens/terapeuta.jpg'


function Home(){

    return  (
       <>
    {/* <!-- Cabeçalho --> */}
    <header className="hero-gradient text-white py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Help Mental Health"
            className="h-14 mr-4"
          />
          <h1 className="text-2xl font-bold">Help Mental Health</h1>
        </div>
        <nav>
          <a href="#voce" className="text-white hover:text-gray-200 mx-3 font-bold"
            >Usuários</a
          >

          <a href="#profissional" className="text-white hover:text-gray-200 mx-3 font-bold"
            >Profissionais</a
          >
        </nav>
      </div>
    </header>

    {/* <!-- Seção Hero --> */}
    <section className="hero-gradient text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Help Mental Health, o ecossistema digital de saúde mental
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Nossos usuarios têm acesso a materiais online produzido por psicologos
          e chat de resposta, tudo na palma da mão.
        </p>
        <div className="space-x-4 space-y-2">
          <a
            href="/login-usuario"
            className="bg-white text-[#264466] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 inline-block"
            ><p className='font-bold'>Entrar como usuário</p></a>
          <a
            href="/login-psicologo"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#264466] inline-block ml-0"
            ><p className='font-bold'>Entrar como Psicólogo</p></a
          >
        </div>
      </div>
    </section>

    <span  id="voce"></span>

    {/* <!-- Seção Para Você --> */}
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src={foto1}
              alt="Saúde mental para você"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h3 className="text-3xl font-bold text-[#264466] mb-6">Para você</h3>
            <p className="text-lg text-gray-700 mb-6">
              Tenha acesso a materiais online de psicólogos e terapeutas
              especializados e mande uma mensagem para eles quando e onde
              precisar.
            </p>
            <a
              href="cadastro-usuario"
              className="bg-[#264466] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1a2f45] inline-block"
              ><p className='font-bold'>Quero ajuda agora</p></a
            >
          </div>
        </div>
      </div>
    </section>

    <span id="profissional"></span>

    {/* <!-- Seção Para Profissionais --> */}
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src={foto2}
              alt="Saúde mental para você"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-10 text-end">
            <h3 className="text-3xl font-bold text-[#264466] mb-6 mr-10">
              Para Profissionais
            </h3>
            <p className="text-lg text-gray-700 mb-6 mr-10">
              Produza materiais na plataforma, responda usuarios, compartilhe
              seus artigos e seja reconhecido e monetizado
            </p>
            <a
              href="cadastro-psicologo"
              className="bg-[#264466] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1a2f45] inline-block mr-10"
              ><p className='font-bold'>Quero começar agora</p></a
            >
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Rodapé --> */}
    <footer className="bg-[#264466] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 mr-3">
            <div className="flex items-center mb-4">
              <img
                src={Logo}
                alt="Help Mental Health"
                className="h-10 mr-3"
              />
              <span className="text-xl font-bold">Help Mental Health</span>
            </div>
            <p className="max-w-sm">
              Acreditamos que saúde mental <br />
              é primordial para nos conectarmos com o que realmente importa.
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 sm:grid-cols-2">
            <div>
              <h4 className="font-bold mb-4">Links úteis</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#voce" className="hover:text-gray-300">Para usuários</a>
                </li>
                <li>
                  <a href="#profissional" className="hover:text-gray-300"
                    >Para profissionais</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li>helpmentalhealth@gmail.com</li>
                <li>(XX) XXXX-XXXX</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Redes sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="hover:text-gray-300"
                  >Instagram</a
                >
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm">
          <p>© 2025 Help Mental Health.</p>
        </div>
      </div>
    </footer>
       </>
            )
}

export default Home