import Img from "../images/logo.svg"
import Icon from "../images/icon-cart.svg"
import Image from "../images/image-avatar.png"
import prodth1 from "../images/image-product-1-thumbnail.jpg"
import del from "../images/icon-delete.svg"
import {  useEffect, useState } from "react"
const Header = ({StateCounter,setStateCounter}) => {
  const[show,setShow]=useState(false);
  const [pbl,setPbl]=useState(true);
 
 
  return (
    <header className="header" >
    <div className="Header">
   <div className="left-header">
    <img src={Img} alt="image_1" className="logo"/>
    <nav className="first-nav">
      <ul className="nav-bar">
      <li className="nav-link "><a href="#">Collections</a></li>  
       <li className="nav-link "><a href="#">Men</a></li>
       <li className="nav-link "><a href="#">Women</a></li>
       <li className="nav-link "><a href="#">About</a></li>
       <li className="nav-link "><a href="#">Contact</a></li>
      </ul>
      </nav>
      </div>
      <div className="right-header">
      {show && <div className="carte">
        <p className="title-carte">Cart</p><hr/>
     {StateCounter ==0 || StateCounter==null?<div className="carte-vide"> <p className="vide">Your cart is empty.</p> </div>:
     <div className="cadre-product">
     { pbl ? <div className="product">
      <img className="prod-img" src={prodth1} alt="prod-sale"/>
      <p className="text-price">fall limited edition sneakers<br/>$125.00 x {StateCounter} <span className="span-parse">${parseFloat(StateCounter)*125}.00</span></p>
       <button onClick={()=>{setStateCounter(0); localStorage.removeItem("counter")}} className="bt-pbl" ><img src={del} className="delt" /></button>
     </div>:""}
     <button className="btn" onClick={()=>setShow(!show)}>checkout</button>
     </div>}
      </div>}
        <nav className="second-nav">
        <ul className="nav-bar-r">
      {StateCounter >0 &&  <p className="counte">{StateCounter}</p>}
       <li className="nav-link-r"><img src={Icon} alt="icon" onClick={()=>setShow(!show)}/></li>
      
       <li className="nav-link-r"><img src={Image} className="avatar" alt="avatar"/></li>
      </ul>
        </nav>
      </div>
      </div>
      <hr/>
    </header>
  )
}
export default Header