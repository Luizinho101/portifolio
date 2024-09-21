function Perfil() {
    return (
        <div className="bg-custom-gray grid grid-cols-12 gap-4">
            <div className=" bg-custom-gray space-y-4 col-start-2 col-span-10">
                <div className="md:grid md:grid-cols-12 gap-4 space-y-8">
                    <div className=" block md:hidden space-y-4">
                        <h1 className="text-white text-[22px] mt-8">Olá, sou Luiz Antônio 👋</h1>
                        <p className="text-white text-[18px]">Desenvolvedor Back-End</p>
                    </div>
                    <div className="md:col-start-1 md:col-span-6">
                        <img 
                        src="imagens/minha_imagem/imagem_luiz.jpg" 
                        alt="Descrição da Imagem" 
                        className="rounded-lg " 
                        />
                    </div>
                    <div className="space-y-8  md:col-start-8 md:col-span-5 sm:mt-2">
                        <div className="space-y-4 hidden md:block lg:space-y-8 lg:space-y-16 xl:space-y-32">
                            <div className="space-y-2">
                                <h2 className="text-white text-white text-base sm:text-base md:text-base lg:text-2xl xl:text-3xl ">Experiência</h2>
                                <p class="text-white text-base sm:text-base md:text-base lg:text-2xl xl:text-3xl">
                                    Participei por 2 anos de um projeto de iniciação científica, desenvolvendo softwares em equipe e 
                                    aprimorando minhas habilidades em programação e resolução de problemas. 
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-white text-white text-base sm:text-base md:text-base lg:text-2xl xl:text-3xl">Educação</h2>
                                <p className="text-white text-base sm:text-lg md:text-base lg:text-2xl xl:text-3x">Bacharelado em engenharia da computação - Universidade Potiguar</p>
                            </div>
                        </div>
                       <div className="">
                                <div className="flex space-x-6 flax flax-row justify-center items-center md:mt-4 lg:mt-8">
                                    <a href="https://www.instagram.com/seu_perfil" target="_blank" rel="noopener noreferrer">
                                        <img src="/imagens/Redes_sociais/instagram.png" alt="Instagram" className="w-8 h-8" />
                                    </a>
                                    <a href="https://github.com/Luizinho101" target="_blank" rel="noopener noreferrer">
                                        <img src="/imagens/Redes_sociais/github.png" alt="GitHub" className="w-8 h-8" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/luiz-antonio-b33861213/" target="_blank" rel="noopener noreferrer">
                                        <img src="/imagens/Redes_sociais/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                                    </a>
                                </div>

                                <div className="flex flex-row md:mt-4 lg:mt-8 mt-4">
                                    <button className="w-full bg-gradient-to-r from-[#777CF4] via-[#BD79AF] to-[#F47777] text-white p-2 rounded-xl flex items-center justify-center space-x-2">
                                        <span>Conecte-me</span>
                                        <img src="/imagens/Redes_sociais/e-mail.png" alt="Descrição da Imagem" className="w-4 h-4" />
                                    </button>
                                </div>
                       </div>
                        <div className="space-y-8 block  md:hidden">
                            <div>
                                <h2 className="text-white text-[18px] mt-16">Experiência</h2>
                                <p className="text-white text-base sm:text-lg md:text-base lg:text-2xl xl:text-3x">
                                    Participei por 2 anos de um projeto de iniciação científica, desenvolvendo softwares em equipe 
                                    e aprimorando minhas habilidades em programação e resolução de problemas.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-white text-[18px]">Educação</h2>
                                <p className="text-white text-base sm:text-lg md:text-[10px] lg:text-2xl xl:text-3x">Bacharelado em engenharia da computação - Universidade Potiguar</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:col-start-1 md:col-span-5 -mt-[200px]">
                        <h1 className="text-white text-[22px]">Olá, sou Luiz Antônio 👋</h1>
                        <p className="text-white text-[18px]">Desenvolvedor Back-End</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Perfil;