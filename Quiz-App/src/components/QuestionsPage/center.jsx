import Sidenavbar from "./Sidenavbar"
import Question from './question'
import Chips from './Chips'
import { useMediaQuery } from 'react-responsive';

const Center =()=>{
    const isMobile = useMediaQuery({ query: `(max-width: 1500px)` });

    return(
        <>
        
        {!isMobile ? <div className='grid  grid-cols-10 mt-4 h-[800px] gap-12  '>
            <div className='col-start-1 ml-2 col-end-3 h-[1280px] rounded-lg bg-[#0B6E4F]'><Sidenavbar/></div>
            <div className='col-start-3 col-end-11 w-[95%] h-[800px]'>
                <div className='grid grid-rows-8'>
                    <div className='bg-slate-500 mb-12'><Chips/></div>
                <Question className='rounded-lg'/>
                    </div></div>
        </div>: <div className='mt-2 grid grid-rows-10  '>
            <div className='mb-5 rows-start-0 ml-2  w-[95%] rows-end-3 h-[100%] rounded-lg bg-[#0B6E4F]'><Sidenavbar/></div>
            <div className='mt-5 rows-start-3 ml-2 rows-end-11 h-[500px]'> <div className='grid grid-rows-8'>
                    <div className='bg-slate-500 mb-12'><Chips/></div>
                <Question/>
                    </div></div>
        </div> }
        </>
    )
}
export default Center