import Cards from './slidercard'
import SliderEnglish from '../../assets/SliderEnglish.jpg'
import SliderMath from '../../assets/SliderMath.jpg'
import React,{useEffect, useState} from 'react'
import { useMediaQuery } from 'react-responsive';




const items = [
    {
        icon:{SliderEnglish},
        copy:'English'
    },{
        icon:{SliderMath},
        copy:'Mathematics'
    },{
        icon:{SliderEnglish},
        copy:'English'
    },{
        icon:{SliderMath},
        copy:'Mathematics'
    },{
        icon:{SliderEnglish},
        copy:'English'
    },{
        icon:{SliderMath},
        copy:'Mathematics'
    }, {
        icon:{SliderEnglish},
        copy:'English'
    }, {
        icon:{SliderMath},
        copy:'Mathematics'
    },
];
const Slider =()=>{
    const isMobile = useMediaQuery({ query: `(max-width: 1120px)` });
    const [moveClass, setMoveClass] = useState('');
  const [carouselItems, setCarouselItems] = useState(items);


  const transitionslider = ()=>{
    if(moveClass === 'next'){
        shiftNext([...carouselItems]);
      }else{
        shiftPrev([...carouselItems]);
      }
      setMoveClass('')
    
  }

  useEffect(()=>{
    console.log(carouselItems);
  },[moveClass,carouselItems])

  const shiftPrev = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length,0,firstcard);
    setCarouselItems(copy);
    
  }
  
  const shiftNext = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0,0,lastcard);
    setCarouselItems(copy);
    
  }

    return (
        <>
        <div className='flex justify-center'>
        <button onClick={() =>{ setMoveClass('prev')
    transitionslider()}} className=''>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
</svg>
          </button>
       {!isMobile ? <ul className='flex'>{carouselItems.slice(0,5).map((data,index)=>
        <Cards key={index} icon={data.icon} copy={data.copy}/>
       )}</ul> : <ul className='flex'>{carouselItems.slice(0,1).map((data,index)=>
        <Cards key={index} icon={data.icon} copy={data.copy}/>
       )}</ul>}
          <button onClick={() => {setMoveClass('next'); transitionslider()}} className='mr-0'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
</svg>
          </button>
        </div>
        </>
    )
}

export default Slider