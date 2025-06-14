import Xande from '../../assets/imagens/Xande.png';
import Ana from '../../assets/imagens/Ana.png';
import Cat from '../../assets/imagens/Cat.png';
import Daniel from '../../assets/imagens/Daniel.png';

export default function About() {
    const devs = [
        {
            name: "Alexandre Ananias",
            img: Xande,
            role: "Front-end Developer",
            bio: "Responsável por transformar ideias em interfaces acessíveis, amigáveis e modernas.",
        },
        {
            name: "Ana Beatriz Menezes",
            img: Ana,
            role: "Mobile Developer",
            bio: "Focada em criar experiências acolhedoras que respeitam a jornada emocional dos usuários.",
        },
        {
            name: "Catarine Tenório",
            img: Cat,
            role: "Desktop Developer",
            bio: "Busca traduzir temas da psicologia em linguagem acessível e confiável.",
        },
        {
            name: "Daniel Bernardo",
            img: Daniel,
            role: "Back-end Developer",
            bio: "Integra funcionalidades e garante que tudo funcione com segurança e fluidez.",
        }
    ];

    return (
        <div className="bg-[#f1f5f9] min-h-screen p-6">

            {/* Texto Institucional */}
            <div className="bg-white shadow-md rounded-xl p-6 max-w-4xl mx-auto my-10">
                <p className="text-center text-lg md:text-2xl text-gray-700 font-semibold mb-8">
                    Somos um grupo de estudantes do <span className="text-[#264466]">Colégio Técnico de Limeira</span>.
                </p>
                <p className="text-center text-lg md:text-xl text-gray-700">
                    Buscamos solucionar um problema observado: a alta demanda pelo cuidado com a saúde mental.
                    Desenvolvemos este projeto com o intuito de proporcionar um espaço seguro, acolhedor e acessível
                    para quem busca informações, ajuda e apoio psicológico.
                </p>
            </div>

            {/* Grid de Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 justify-center px-4 max-w-7xl mx-auto">
                {devs.map((dev, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center transition hover:shadow-lg place-content-between"
                    >
                        <img
                            src={dev.img}
                            alt={dev.name}
                            className="w-30 h-30 rounded-full object-cover mb-4 shadow"
                        />
                        <h3 className="text-xl font-semibold text-[#264466]">{dev.name}</h3>
                        <p className="text-lg text-blue-900 font-medium mb-2">{dev.role}</p>
                        <p className="text-md text-gray-600">{dev.bio}</p>
                    </div>
                ))}
            </div>

            
        </div>
    );
}
