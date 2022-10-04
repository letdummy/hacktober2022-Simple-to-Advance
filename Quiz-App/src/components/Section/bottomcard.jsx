import bottomcard from '../../assets/bottomcard.jpg'
const BottomCard =()=>{
    return(
<div class="flex justify-center mt-12 mb-12">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={bottomcard} alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-[#0B6E4F] text-2xl font-medium mb-2">Gate XE Thermodynamics</h5>
      <p class="text-gray-700 text-base mb-2">
        General Aptitude
      </p>
      <p class="text-gray-700 text-base mb-2">
        Fluid Mechanics 
      </p>
      <p class="text-gray-700 text-base mb-2">
        Food technology
      </p>
      <p class="text-gray-700 text-base mb-2">
      Engineering Mathematics
      </p>
      <button className='font-bold bg-[#13AE7E] rounded-lg text-white py-2'>View Package</button>
    </div>
  </div>
</div>
    )
}

export default BottomCard;