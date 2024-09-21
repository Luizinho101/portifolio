

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
                            src="/imagens/projetos/Capa_Automacao.png" 
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