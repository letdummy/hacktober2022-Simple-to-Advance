import * as React from "react";
import Banner from '../../assets/Banner.png'
import { useMediaQuery } from 'react-responsive';


const Header = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 1700px)` });

  return (
    <>
    {!isMobile ? <div className='w-full  bg-[#0B6E4F] mb-12 mt-2 text-center justify-center items-center'>
  <img src={Banner} className='z-2 ml-[450px] ' alt="BigCo Inc. logo"/>
</div>:<div className='bg-[#0B6E4F] mb-12 mt-2 '>
  <img src={Banner} className=' ' alt="BigCo Inc. logo"/>
</div>}
</>
  );
};
export default Header;
