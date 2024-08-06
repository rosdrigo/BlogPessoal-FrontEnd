import React from "react";

function Flex(){
    return(
        <div className='border-4 border-red-600
        m-8 p-8 flex justify-center items-center'>
            <div className='w-[250px]'>
                <h1 className='text-2xl'>Veiga/ Vhagar</h1>
                <p>O Dragão mais feio que existe</p>
            </div>
            <div className='w-[250px] rounded-lg'>
                <img className='rounded-lg' src="https://linkcultural.com.br/images/noticias/98/0f2d4a3563fe0eb0151dab005d5db64b.jpg" alt="Dragao feio demais" />
            </div>
        </div>
    )
}
export default Flex