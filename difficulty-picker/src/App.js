import { DisplayDifficulty } from './components/DisplayDifficulty/displayDifficulty';
import { MenuList } from './components/MenuList/MenuList';
import { useState } from 'react';
import "./module.css";
function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  const onMenuListItemClick = (difficulty)=>{
    setCurrentDifficulty(difficulty);
  }
  return (
    <div >
      <h1>Select your difficulty level</h1>
      <div className='workspace'>
      <MenuList onMenuClick ={onMenuListItemClick} difficulty={currentDifficulty}/>
      <DisplayDifficulty  difficulty={currentDifficulty}/>
      </div>
      
    </div>
  );
}

export default App;
