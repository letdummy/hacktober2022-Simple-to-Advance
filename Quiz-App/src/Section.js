import  Header from './components/Section/header.jsx'
import Slider from './components/Section/slider.jsx'
import Tagline from './components/Section/tagline.jsx'
import Center from './components/Section/center.jsx'
import BottomCard from './components/Section/bottomcard'
import { useMediaQuery } from 'react-responsive';


const Section=()=>{
    const isMobile = useMediaQuery({ query: `(max-width: 1120px)` });

    return(
        <>
        <Header/>
        <Slider/>
        <hr className='mt-10 bold'/>
        <Tagline className='mb-8'/>
        <br/>
       
        <Center className='mt-8'/>
        {!isMobile ? <div className='mt-[500px] text-center font-bold text-4xl text-[#0B6E4F]'>Checkout Other Packages</div>:     
           <div className='mt-[550px] text-center font-bold text-2xl text-[#0B6E4F]'>Checkout Other Packages</div>}
        <BottomCard />
       
        
        </>
    )
}
export default Section