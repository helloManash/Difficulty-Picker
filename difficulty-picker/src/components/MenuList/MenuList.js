import { MenuListItem } from "../MenuListItem/MenuListItem"

export function MenuList({onMenuClick,difficulty}){
    return <div className="menuList">
        <MenuListItem isSelect={difficulty=== "Low"} onMenu={onMenuClick} difficulty="Low"/>
        <MenuListItem isSelect={difficulty==="medium"} onMenu={onMenuClick} difficulty="medium"/>
        <MenuListItem isSelect={difficulty==="High"} onMenu={onMenuClick} difficulty="High"/>
        <MenuListItem isSelect={difficulty==="Ultra high"} onMenu={onMenuClick} difficulty="Ultra high"/>
    </div>
}