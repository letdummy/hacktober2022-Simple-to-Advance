import { useState } from 'react';
import './App.css';
const sprites = ["male", "female", "human", "identicon", "bottts", "avataaars", "adventurer-neutral", "jdenticon", "gridy", "micah", "open-peeps", "initials"]

function App() {
  const [imgUrl, setImgUrl] = useState('')
  const [myInput, setInput] = useState('')
  const [currentSprite, setCurrentSprite] = useState(sprites[0])

  const inputChange = (e) => {
    setInput(() => {
      if (e.target.value.length > 0){
        setImgUrl(`https://avatars.dicebear.com/api/${currentSprite}/${e.target.value}.svg`)
      }
      return (e.target.value)
    })
    console.log(myInput)
  }

  const changeSprtie = (e) => {
    setCurrentSprite(() => {
      if (e.target.value.length > 0) {
        setImgUrl (`https://avatars.dicebear.com/api/${e.target.value}/${myInput}.svg`)
      } 
      return (e.target.value)
    })
    console.log(currentSprite)
  }
  return (
    <div className="App  h-screen bg-slate-300 flex flex-col">

      <div className='p-[20px] w-[74vw] m-auto rounded overflow-hidden shadow-lg pattern'>
        <h1 className='font-bold text-[2em]'>Avatar Generator</h1>
        <div>
          <div className="pt-2 relative mx-auto text-gray-600">
            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search" name="search" value={myInput} onChange={inputChange} placeholder="Enter your text" />

            <select onChange={changeSprtie} className='bg-[#4c4949] p-[6px] ml-[4px] rounded-[5px] text-[white]'>
              {sprites.map((mySprite, i) => {
                return (
                  <option value={mySprite} key={i}>{mySprite}</option>
                )
              })}
            </select>
          </div>
 
        </div>

        <div className='flex items-center justify-around mt-[9%]'>
            <img className='w-[20vw]' src={imgUrl} />
        </div>
    
      </div>
      <a href='https://github.com/Mahich123'><p className='mb-[2rem] font-bold'>Made by Mahi</p></a>
    </div>
  );
}

export default App;
