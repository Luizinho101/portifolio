import React from 'react';

const certificado = () => {
  return (
    <div className='grid grid-cols-12 gap-4'>
        
            <h1 className="text-center text-[20px] text-white mb-4 mt-16 col-start-2 col-span-10 text-base sm:text-base md:text-base lg:text-2xl xl:text-3xl">
                 Certificados
            </h1>
            <div className='col-start-2 col-span-10'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className="bg-gradient-to-r from-[#777CF4] via-[#BD79AF] to-[#F47777] p-2 rounded-[40px] text-center mb-8 col-start-1 col-span-12 md:col-start-1 md:col-span-6">
                        <img 
                            src='/imagens/certificados/Certificado_potencial.png' 
                            alt="Certificado" 
                            className="mx-auto mt-8 mb-8 "
                        />
                    </div>
                    <div className="bg-gradient-to-r from-[#777CF4] via-[#BD79AF] to-[#F47777] p-2 rounded-[40px] text-center mb-8 col-start-1 col-span-12 md:col-start-7 md:col-span-6">
                        <img 
                            src='/imagens/certificados/POO.png' 
                            alt="Certificado" 
                            className="mx-auto mt-8 mb-8"
                        />
                    </div>
                    <div className="bg-gradient-to-r from-[#777CF4] via-[#BD79AF] to-[#F47777] p-2 rounded-[40px] text-center mb-8 col-start-1 col-span-12 md:col-start-1 md:col-span-6">
                        <img 
                            src='/imagens/certificados/ASPNET.png' 
                            alt="Certificado" 
                            className="mx-auto mt-8 mb-8"
                        />
                    </div>
                    <div className="bg-gradient-to-r from-[#777CF4] via-[#BD79AF] to-[#F47777] p-2 rounded-[40px] text-center mb-8 col-start-1 col-span-12 md:col-start-7 md:col-span-6">
                        <img 
                            src='/imagens/certificados/Bando_de_dados.png' 
                            alt="Certificado" 
                            className="mx-auto mt-8 mb-8"
                        />
                    </div>
                </div>
            </div>
    </div>
  );
};

export default certificado;
