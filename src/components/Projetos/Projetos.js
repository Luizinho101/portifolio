

function Projetos() {
    return (
        <div className=" grid grid-cols-12 gap-4">
            <h1 className="text-center text-[20px] text-white mb-4 col-start-2 col-span-10 text-base sm:text-base md:text-base lg:text-2xl xl:text-3xl">
                Projetos
            </h1>
            <div className="bg-gradient-to-r from-[#777CF4] via-[#BD79AF] to-[#F47777] text-white p-4 rounded-[40px] col-start-2 col-span-10">
                <div className="md:grid md:grid-cols-12 gap-4">
                     {/* Div para a imagem */}
                     <div className="md:col-start-1 md:col-span-2 flex items-center justify-center h-full">
                        <img 
                            src="/imagens/Projetos/Capa_Automacao.png" 
                            alt="Descrição da Imagem" 
                            className="w-full rounded-lg mb-4"
                        />
                    </div>

                    {/* Div para a descrição do projeto */}
                    <div className="md:col-start-3 md:col-span-6">
                        <h2 className="text-xl font-bold mb-2 ">Como Comecar Em Automação</h2>
                        <p className="col-start-1 col-span-12">
                            Este projeto foi desenvolvido como parte de uma avaliação acadêmica, onde aplicamos os conceitos 
                            aprendidos na disciplina, que combinava inglês técnico e automação. Para demonstrar nossa compreensão, 
                            minha equipe e eu criamos um blog focado em conteúdos de automação, utilizando HTML e CSS. 
                            Trabalhamos de forma colaborativa, dividindo tarefas e gerindo o grupo para garantir a entrega do 
                            projeto. Esse processo foi fundamental para o nosso desenvolvimento, tanto em termos técnicos quanto 
                            em trabalho em equipe.
                        </p>
                    </div>

                    {/* Div para os botões */}
                    <div className="md:col-start-9 space-y-4 md:col-span-4 p-4 md:space-y-4 flex flex-col justify-center h-full">
                        <a 
                            href="https://github.com/Luizinho101/Como_Comecar_Em_Automacao" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white p-2 rounded-lg flex items-center justify-center"
                        >
                            Ver Código
                        </a>
                        <a 
                            href="https://luizinho101.github.io/Como_Comecar_Em_Automacao/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white p-2 rounded-lg flex items-center justify-center"
                        >
                            Ver Projeto
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projetos;










{/*import React, { useState, useEffect } from 'react';

function Projetos() {
    const [repos, setRepos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const response = await fetch('https://api.github.com/users/Luizinho101/repos');
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados');
                }
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                setErro(error);
            } finally {
                setCarregando(false);
            }
        }

        fetchRepos();
    }, []);

    if (carregando) return <p>Carregando...</p>;
    if (erro) return <p>Erro: {erro.message}</p>;

    return (
        <div className="ml-8 mr-8 md:ml-24 lg:ml-24 lg:mr-8 mt-16">
            <h1 className="text-center text-[20px] text-white mb-4">Projetos</h1>
            {repos.map((repo) => (
                <div 
                    key={repo.id} 
                    className="bg-gradient-to-r from-[#777CF4] via-[#BD79AF] to-[#F47777] text-white p-4 rounded-[40px] flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8"
                >
                  
                    <div className="flex flex-col items-center md:w-1/2 mb-4 md:mb-0">
                        <img 
                            src={repo.owner.avatar_url} 
                            alt={repo.name} 
                            className="w-full rounded-lg"
                        />
                    </div>

                   
                    <div className="md:w-1/2 flex flex-col justify-center space-y-4">
                        <h2 className="text-xl font-bold mb-2">{repo.name}</h2>
                        <p>{repo.description || 'Sem descrição'}</p>
                    </div>

                   
                    <div className="flex flex-col md:w-1/2 space-y-4">
                        <a 
                            href={repo.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white p-2 rounded-lg flex items-center justify-center"
                        >
                            Ver Código
                        </a>
                        <a 
                            href={repo.homepage || repo.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white p-2 rounded-lg flex items-center justify-center"
                        >
                            Ver Projeto
                        </a>
                       
                        <a 
                            href="https://www.linkedin.com/in/seu-perfil" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-blue-700 text-white p-2 rounded-lg flex items-center justify-center"
                        >
                            Meu LinkedIn
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projetos;*/}



