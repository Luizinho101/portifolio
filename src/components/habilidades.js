import React from 'react';



const Certificado = () => {
  return (
    <div className='grid grid-cols-12 gap-4'>
        <h1 className="text-center text-[20px] text-white mb-4 mt-16 col-start-2 col-span-10 text-base sm:text-base md:text-base lg:text-2xl xl:text-3xl">
          Habilidades
        </h1>
        <div className="bg-gradient-to-r from-[#777CF4] via-[#BD79AF] to-[#F47777] p-2 rounded-[40px] col-start-2 col-span-10">
        <div className='col-start-2 col-span-10'>
                <div className='grid grid-cols-12 gap-4'>
                        <img 
                            src='/imagens/habilidades/css.png' 
                            alt="Certificado" 
                            className="mx-auto mt-8 mb-8 w-32 h-32 col-start-1 col-span-12 md:col-start-1 md:col-span-4"
                        />
                        <img 
                            src='/imagens/habilidades/do-sustenido.png' 
                            alt="Certificado" 
                           className="mx-auto mt-8 mb-8  w-32 h-32 col-start-1 col-span-12 md:col-start-5 md:col-span-4"
                        />
                        <img 
                            src='/imagens/Habilidades/html-5.png' 
                            alt="Certificado" 
                            className="mx-auto mt-8 mb-8  w-32 h-32 col-start-1 col-span-12 md:col-start-9 md:col-span-4"
                        />
                        <img 
                            src='/imagens/habilidades/sql-server.png' 
                            alt="Certificado" 
                            className="mx-auto mt-8 mb-8 w-32 h-32 col-start-1 col-span-12 md:col-start-1 md:col-span-4"
                        />
                        <img 
                            src='/imagens/habilidades/icons8-.net-framework-48.png' 
                            alt="Certificado" 
                            className="mx-auto mt-8 mb-8 w-32 h-32 col-start-1 col-span-12 md:col-start-5 md:col-span-4"
                        />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Certificado;