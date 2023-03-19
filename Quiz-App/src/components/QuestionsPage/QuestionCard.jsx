import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Correctanswerbox from './Correctanswerbox'
import {useState} from 'react';
import { useMediaQuery } from 'react-responsive';


const QuestionCard =(props)=>{
    const isMobile = useMediaQuery({ query: `(max-width: 1120px)` });

    const [answer,setanswer]=useState('0');
    const [correctanswer,setcorrectanswer]=useState(false);
    const [correctvalue,setcorrectvalue]=useState(false);
    const answerCheck = ()=>{
        if(answer==props.ans){
            setcorrectanswer(true);
            setcorrectvalue(true);
        }else if(answer==='0'){
            return
        }
        else{
            setcorrectanswer(true);
            setcorrectvalue(false);
        }
    }


    return(
        <>
        {!isMobile ? <div className='bg-[#F8F8F8] h-[480px]'>
            <div className='flex gap-8 mt-4 ml-4 pt-4 mb-8'>
                <h1 className='text-4xl text-[#0B6E4F] '>{props.num}</h1>
                <h1 className='text-[#5F5F5F] text-2xl'>{props.question}</h1>
            </div>
            <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        className='ml-24 text-[#5F5F5F]'
      >
        <FormControlLabel value="A" control={<Radio />} onClick={()=>setanswer('1')} label={props.option1}/>
        <FormControlLabel value="B" control={<Radio />} onClick={()=>setanswer('2')} label={props.option2} />
        <FormControlLabel value="C" control={<Radio />} onClick={()=>setanswer('3')} label={props.option3}/>
        <FormControlLabel value="D" control={<Radio />} onClick={()=>setanswer('4')} label={props.option4} />
      </RadioGroup>
    </FormControl>
    {!correctanswer ? <div className='flex flex-rows gap-12 items-center text-center justify-center mt-8'>
    <button onClick={()=> answerCheck()} className="bg-[#13AE7E] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">
  Answer & Solution
</button>

<button class="bg-[#3362AB] text-white  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">
  Save For Later
</button>
    </div> : <Correctanswerbox correctvalue={correctvalue} ans={props.ans}/>}
    
    

        </div>:<div className='bg-[#F8F8F8] h-[500px]'>
            <div className='flex gap-8 mt-4 ml-4 pt-4 mb-8'>
                <h1 className='text-2xl text-[#0B6E4F] '>{props.num}</h1>
                <h1 className='text-[#5F5F5F] text-1xl'>{props.question}</h1>
            </div>
            <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        className='ml-24 text-[#5F5F5F]'
      >
        <FormControlLabel value="A" control={<Radio />} onClick={()=>setanswer('1')} label={props.option1}/>
        <FormControlLabel value="B" control={<Radio />} onClick={()=>setanswer('2')} label={props.option2} />
        <FormControlLabel value="C" control={<Radio />} onClick={()=>setanswer('3')} label={props.option3}/>
        <FormControlLabel value="D" control={<Radio />} onClick={()=>setanswer('4')} label={props.option4} />
      </RadioGroup>
    </FormControl>
    {!correctanswer ? <div className='flex flex-rows gap-2 items-center text-center justify-center mt-8'>
    <button onClick={()=> answerCheck()} className="bg-[#13AE7E] text-white font-semibold hover:text-white py-2 px-1 border border-blue-500 hover:border-transparent rounded-lg">
  Answer & Solution
</button>
<button class="bg-[#3362AB] text-white  font-semibold hover:text-white py-2 px-1 border border-blue-500 hover:border-transparent rounded-lg">
  Save For Later
</button>
    </div> : <Correctanswerbox correctvalue={correctvalue} ans={props.ans}/>}
    
    

        </div>}
        
        </>
    )
}

export default QuestionCard