import QuestionCard from './QuestionCard'
import { useMediaQuery } from 'react-responsive';


const questions =[
    {
        num:'1.',
        question:'Courses Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        option1:'option A',
        option2:'option B',
        option3:'option C',
        option4:'option D',
        ans:'1'
    },
    {
        num:'2.',
        question:'Courses Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        option1:'option A',
        option2:'option B',
        option3:'option C',
        option4:'option D',
        ans:'2'
    },
    {
        num:'3.',
        question:'Courses Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        option1:'option A',
        option2:'option B',
        option3:'option C',
        option4:'option D',
        ans:'3'
    },
    {
        num:'4.',
        question:'Courses Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        option1:'option A',
        option2:'option B',
        option3:'option C',
        option4:'option D',
        ans:'1'
    },
]

const Question = ()=>{
    const isMobile = useMediaQuery({ query: `(max-width: 1120px)` });

    return(
        <>
        {!isMobile ? <div className='border-4 h-[1200px] overflow-scroll border-[#5F5F5F] rounded '>
    {questions.map((data,index)=>
        <QuestionCard key={index} ans={data.ans} num={data.num} question={data.question} option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} />
    )}
</div>:<div className='border-4 h-[1000px] overflow-scroll border-[#5F5F5F] rounded '>
    {questions.map((data,index)=>
        <QuestionCard key={index} ans={data.ans} num={data.num} question={data.question} option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} />
    )}
</div>}
        </>
    )
}
export default Question