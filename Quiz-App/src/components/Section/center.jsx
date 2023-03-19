import Sidebar from './sidebar'
import Question from './question'
import { useMediaQuery } from 'react-responsive';

const Center =()=>{
    const isMobile = useMediaQuery({ query: `(max-width: 1120px)` });
    return(
        <>
        {!isMobile ? <div className='grid  grid-cols-10 h-[800px]  '>
            <Sidebar className='col-start-0 col-end-3 bg-slate-700'>hello</Sidebar>
            <div className='col-start-3 col-end-11 w-[90%] h-[800px]'><Question/></div>
        </div>: <div className='mt-5 grid grid-rows-10  '>
            <Sidebar className='mb-5 rows-start-0 rows-end-3 bg-slate-700'>hello</Sidebar>
            <div className='mt-5 rows-start-3 rows-end-11 h-[500px] bg-zinc-500'><Question/></div>
        </div> }
        </>
    )
}
export default Center