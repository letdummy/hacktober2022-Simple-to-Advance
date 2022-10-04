import { useState } from "react";
import { useMediaQuery } from 'react-responsive';

const Sidebar = () => {
  const [geometrydropdownOpen, setgeometrydropdownOpen] = useState(false);
  const [algebra,setalgebra] = useState(false);
  const [trigonometry,settrigo] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 1530px)` });
  

  return (
    <>
      {!isMobile ? <div className='ml-28 justify-center text-center items-center'>
        <div className='ml-14 grid grid-rows-10 items-center justify-center text-center gap-y-2'>
        <button type="button" onClick={()=>setgeometrydropdownOpen(!geometrydropdownOpen)} className="rows-start-1 rows-end-3 w-[300px]  inline-block px-12 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Geometry</button>
        <div id="dropdown" className={(geometrydropdownOpen ? 'hidden z-10 w-[300px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700':'z-10 w-[300px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700')}>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
      <li>
        <a href="#" className="block py-2 px-4 bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Circle</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Triangle</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Quadilateral</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Parabolas</a>
      </li>
    </ul>
    
    
</div>
<button type="button" onClick={()=> setalgebra(!algebra)} className="rows-start-1 rows-end-3 w-[300px]  inline-block px-12 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Algebra</button>
        <div id="dropdown" className={(algebra ? 'hidden z-10 w-[300px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700':'z-10 w-[300px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700')}>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
      <li>
        <a href="#" className="block py-2 px-4 bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Circle</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Triangle</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Quadilateral</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Parabolas</a>
      </li>
    </ul>
    
    
</div>
<button type="button" onClick={()=> settrigo(!trigonometry)} className="rows-start-1 rows-end-3 w-[300px]  inline-block px-12 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Trignometry</button>
        <div id="dropdown" className={(trigonometry ? 'hidden z-10 w-[300px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700':'z-10 w-[300px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700')}>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
      <li>
        <a href="#" className="block py-2 px-4 bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Circle</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Triangle</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Quadilateral</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Parabolas</a>
      </li>
    </ul>
    
    
</div>

        </div>
      </div>: <div className=' justify-center text-center items-center'>
        <div className=' grid grid-rows-10 items-center justify-center text-center gap-y-2'>
        <button type="button" onClick={()=>setgeometrydropdownOpen(!geometrydropdownOpen)} className="rows-start-1 rows-end-3 w-[300px]  inline-block px-12 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Geometry</button>
        <div id="dropdown" className={(geometrydropdownOpen ? 'hidden z-10 w-[300px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700':'z-10 w-[300px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700')}>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
      <li>
        <a href="#" className="block py-2 px-4 bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Circle</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Triangle</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Quadilateral</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Parabolas</a>
      </li>
    </ul>
    
    
</div>
<button type="button" onClick={()=> setalgebra(!algebra)} className="rows-start-1 rows-end-3 w-[300px]  inline-block px-12 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Algebra</button>
        <div id="dropdown" className={(algebra ? 'hidden z-10 w-[300px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700':'z-10 w-[300px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700')}>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
      <li>
        <a href="#" className="block py-2 px-4 bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Circle</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Triangle</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Quadilateral</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Parabolas</a>
      </li>
    </ul>
    
    
</div>
<button type="button" onClick={()=> settrigo(!trigonometry)} className="rows-start-1 rows-end-3 w-[300px]  inline-block px-12 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Trignometry</button>
        <div id="dropdown" className={(trigonometry ? 'hidden z-10 w-[300px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700':'z-10 w-[300px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700')}>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
      <li>
        <a href="#" className="block py-2 px-4 bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Circle</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Triangle</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Quadilateral</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4  bg-gray-600 text-white font-bold hover:bg-blue-500 dark:hover:bg-gray-600 dark:hover:text-white">Parabolas</a>
      </li>
    </ul>
    
    
</div>

        </div>
      </div>}
    </>
  );
};
export default Sidebar;
