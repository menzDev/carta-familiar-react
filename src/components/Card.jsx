import React from 'react'

const Card = () => {
     const perfiles = [
    {
      nombre: "Lenin jose",
      edad: "44 años"
    },
    {
      nombre: "Yolamis Chiquinquira",
      edad: "42 años"
    },
    {
      nombre: "Ayleen camil",
      edad: "17 años"
    },
    {
      nombre: "Jose Tomas",
      edad: "16 años"
    },
    {
      nombre: "abraham mendoza",
      edad: "15 años"
    },
    {
      nombre: "Mia alejandra",
      edad: "12 años"
    },
    {
      nombre: "Bryan mathias",
      edad: "5 años"
    }
  ] 

  return(

    <div>
      {perfiles.map((item, index)=>(
    <div className='w-[453px] h-[563px] bg-[#D9D9D9] rounded-[50px] overflow-hidden mb-[20px]' key={index}>
             
      <div className='grid place-items-center bg-[url("/montañas.jpg")] bg-center bg-cover w-auto h-[192px]'>
        {/* <img className='w-[453px] h-[192px] bg-[#8D8D8D] grid place-items-center ' src="./public/montañas.jpg" alt="" /> */}
        <img className='w-[210px] h-[210px] border-[3px bg-white] rounded-[100px] -mb-[40%]' src="./public/foto-perfil.jpg" alt="" />
      </div>
      <div className='grid place-items-center mt-[110px]'>
        <h1 className='text-black font-bold leading-[44px] text-[30px] mb-[13px]'>{item.nombre}</h1>
        <p className='text-black w-[349px] h-[117px] text-center'>{item.edad}</p>
      </div>
      <div className='flex justify-center flex-row gap-10'>
        <img className='w-[auto] h-[30px]' src="./public/facebook.png" alt="" />
        <img className='w-[auto] h-[30px]'  src="./public/twitter.png" alt="" />
        <img className='w-[auto] h-[30px]'  src="./public/linkeding.png" alt="" />
      </div>
    </div>))}
    
    </div>)
  
}

export default Card
{/* <div className='w-[514px] h-[599px] bg-white  rounded-[20px] overflow-hidden'>
  <section className='w-[514px] h-[227px] bg-[#3F71E6] mt-[372px] grid place-items-center shadow-md'>
    <div className='w-[200px] h-[200px] rounded-[100px] shadow-md bg-[#fff] mt-[44px]'></div>
  </section>
<h1>asdasdas</h1>
</div> */}


