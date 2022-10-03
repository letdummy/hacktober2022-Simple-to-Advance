
import './App.css';
import Navbar from './components/Navbar';
import Thisfun from './components/TextForm';


function App() {
  return (
   <>
   
<Navbar title="TextUtils" abouttext="about us"></Navbar>
<div className='container my-3'>
<Thisfun heading="You can enter your text here!"></Thisfun>
</div>

</>
  );
}

export default App;
