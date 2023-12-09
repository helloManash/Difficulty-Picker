import { useState } from "react";

export const MenuListItem = ({ difficulty, onMenu, isSelect}) => {
  const [isHover, setIsHover] = useState(false);

  function activate() {
    setIsHover(true);
  }

  function deactivate() {
    setIsHover(false);
  }
  function onHandleClick (){
    onMenu(difficulty);
  }
  const getBackgroundColor = () => {
    if (isHover) {
      return "#E8E5E5";
    } else if(isSelect){
      return "#F9F8F8";
    }
  };
  return (
    <div onClick ={onHandleClick} className="listItem" onMouseEnter={activate} onMouseLeave={deactivate} style={{backgroundColor: getBackgroundColor()}}>
      Set to : {difficulty}
    </div>
  );
};
