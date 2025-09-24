import { Suspense, useState } from 'react';
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import Navbar from './components/navbar/Navbar';
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer';
function App() {
  const [toggle, setToggle] = useState(true);


  const playerFetch = async () => {
    const res = await fetch('/player.json');
    return res.json();
  }
  const playerPromise = playerFetch();
  return (

    <>
      {/* navbar */}
      <Navbar></Navbar>
      <div className='flex justify-between items-center max-w-[1360px] mx-auto'>
        <h1>Available Players</h1>
        <div>
          <button onClick={() => setToggle(true)} className={`py-2 px-4 border-1 border-gray-300 border-r-0 rounded-l-2xl ${toggle === true ?"bg-[#E7FE29]":""}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-2 px-4 border-1 border-gray-300 border-l-0 rounded-r-2xl ${toggle === false ?"bg-[#E7FE29]":""}`}>Selected(<span>0</span>)</button>
        </div>
      </div>
      {
        toggle === true ? 
          <Suspense fallback={<div className='text-center'><span className="loading loading-ring loading-xl"></span></div>}>
          <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayer></SelectedPlayer>
      }

      
    </>
  )
}

export default App
