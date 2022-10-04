import { Chip } from "@material-tailwind/react";
import { useMediaQuery } from 'react-responsive';

const Chips = ()=>{
    const isMobile = useMediaQuery({ query: `(max-width: 1500px)` });

    return(
        <>
        {!isMobile ? <div className='flex gap-12'>
            <h1 className='font-bold text-2xl text-[#0B6E4F]'>Topic :-</h1>
            <Chip value="Circles" className='bg-[rgba(255, 255, 255, 0.8)] border-2 rounded-lg text-[#0B6E4F] hover:bg-blue-600 hover:text-white ' />
            <Chip value="Triangles" className='bg-[rgba(255, 255, 255, 0.8)] border-2 rounded-lg text-[#0B6E4F] hover:bg-blue-600 hover:text-white ' />
            <Chip value="Quadrilateral" className='bg-[rgba(255, 255, 255, 0.8)] border-2 rounded-lg text-[#0B6E4F] hover:bg-blue-600 hover:text-white ' />
            <Chip value="Co-ordinatesy systems" className='bg-[rgba(255, 255, 255, 0.8)] border-2 rounded-lg text-[#0B6E4F] hover:bg-blue-600 hover:text-white ' />
            <Chip value="Co-ordinatesy systems" className='bg-[rgba(255, 255, 255, 0.8)] border-2 rounded-lg text-[#0B6E4F] hover:bg-blue-600 hover:text-white ' />
            <Chip value="Quadrilateral" className='bg-[rgba(255, 255, 255, 0.8)] border-2 rounded-lg text-[#0B6E4F] hover:bg-blue-600 hover:text-white ' />
            <Chip value="Co-ordinatesy systems" className='bg-[rgba(255, 255, 255, 0.8)] border-2 rounded-lg text-[#0B6E4F] hover:bg-blue-600 hover:text-white ' />

        </div>:<div className='flex flex-col gap-2'>
            <h1 className='font-bold text-2xl text-[#0B6E4F]'>Topic :-</h1>
            <Chip value="Circles" className='bg-[rgba(255, 255, 255, 0.8)] w-[90%] border-2 rounded-lg text-[#0B6E4F] hover:bg-blue-600 hover:text-white ' />
            <Chip value="Triangles" className='bg-[rgba(255, 255, 255, 0.8)] w-[90%] border-2 rounded-lg text-[#0B6E4F] hover:bg-blue-600 hover:text-white ' />
            <Chip value="Quadrilateral" className='bg-[rgba(255, 255, 255, 0.8)] w-[90%] border-2 rounded-lg text-[#0B6E4F] hover:bg-blue-600 hover:text-white ' />
            <Chip value="Co-ordinatesy systems" className='bg-[rgba(255, 255, 255, 0.8)] w-[90%] border-2 rounded-lg text-[#0B6E4F] hover:bg-blue-600 hover:text-white ' />
            <Chip value="Co-ordinatesy systems" className='bg-[rgba(255, 255, 255, 0.8)] w-[90%] border-2 rounded-lg text-[#0B6E4F] hover:bg-blue-600 hover:text-white ' />
            <Chip value="Quadrilateral" className='bg-[rgba(255, 255, 255, 0.8)] w-[90%] border-2 rounded-lg text-[#0B6E4F] hover:bg-blue-600 hover:text-white ' />
            <Chip value="Co-ordinatesy systems" className='bg-[rgba(255, 255, 255, 0.8)] w-[90%] border-2 rounded-lg text-[#0B6E4F] hover:bg-blue-600 hover:text-white ' />

        </div>}
        </>
    )
}
export default Chips