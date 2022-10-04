import { useMediaQuery } from 'react-responsive';

const Correctanswerbox = (props)=>{
    const isMobile = useMediaQuery({ query: `(max-width: 900px)` });

    return(
        <>
{!isMobile ? <div className='w-[30%] border-4 z-12 mt-12 ml-[450px] bg-[#FCFCFC] rounded-lg items-center text-center justify-center'>
<div>
{props.correctvalue ? <h1 className='text-[#13AE7E] text-2xl font-bold'>Correct Answer !!!</h1>:<h1 className='text-[#13AE7E] text-2xl font-bold'>Wrong Answer !!!</h1>}
<h1 className='font-bold'>Explanation</h1>
<h1 className='font-bold'>Answer: Option {props.ans}</h1>
</div>
</div>:
<div className='w-[60%] border-4  mt-12 ml-20 bg-[#FCFCFC] rounded-lg items-center text-center justify-center'>
<div>
{props.correctvalue ? <h1 className='text-[#13AE7E] text-2xl font-bold'>Correct Answer !!!</h1>:<h1 className='text-[#13AE7E] text-2xl font-bold'>Wrong Answer !!!</h1>}
<h1 className='font-bold'>Explanation</h1>
<h1 className='font-bold'>Answer: Option {props.ans}</h1>
</div>
</div>}
</>
    )
}

export default Correctanswerbox