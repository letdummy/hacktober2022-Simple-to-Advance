import Center from './components/QuestionsPage/center.jsx'
import BottomCard from './components/QuestionsPage/bottomcard'
import { useMediaQuery } from 'react-responsive';



const QuestionsPage =()=>{
    const isMobile = useMediaQuery({ query: `(max-width: 1500px)` });

    return(
        <div className='w-full'>
            <Center/>
            {!isMobile ? <div className='mt-[500px] text-center font-bold text-4xl text-[#0B6E4F]'>Checkout Other Packages</div>:     
           <div className='mt-[900px]  text-center font-bold text-2xl text-[#0B6E4F]'>Checkout Other Packages</div>}
        <BottomCard />
        </div>
        
    )
}

export default QuestionsPage