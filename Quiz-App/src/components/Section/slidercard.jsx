import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SliderEnglish from '../../assets/SliderEnglish.jpg'
import SliderMath from '../../assets/SliderMath.jpg'

const Cards=(props)=> {
  
 

  return (
    <Card sx={{ maxWidth: 200 }}  style={{backgroundColor: '#13AE7E'}} className='mr-10 ml-10 border-4 border-slate-500 rounded-2xl'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.copy==='English' ? SliderEnglish : SliderMath}
        className='bg-[#13AE7E]'
        
      />
      <CardContent className='text-center '>
        <Typography gutterBottom style={{color:'white'}} variant="h5" component="div">
          {props.copy}
        </Typography>
        
      </CardContent>
      <CardActions className='justify-center'>
        <Button style={{color:'white'}} size="small" className='text-1xl hover:font-bold hover:text-2xl'><a href='/questionspage'>View Quiz</a></Button>
        
      </CardActions>
    </Card>
  );
}

export default Cards