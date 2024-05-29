import Prod1 from "../images/image-product-1.jpg"
import Prod2 from "../images/image-product-2.jpg"
import Prod3 from "../images/image-product-3.jpg"
import Prod4 from "../images/image-product-4.jpg"
import prodth1 from "../images/image-product-1-thumbnail.jpg"
import prodth2 from "../images/image-product-2-thumbnail.jpg"
import prodth3 from "../images/image-product-3-thumbnail.jpg"
import prodth4 from "../images/image-product-4-thumbnail.jpg"
import Minus from "../images/icon-minus.svg"
import Plus from "../images/icon-plus.svg"

import {useEffect, useState } from "react"
const Main = ({setState,setStateCounter}) => {
    const [istoggle,setToggle]=useState({th1:true,th2:false,th3:false,th4:false});
    const [count,setCount]=useState(0);
    const [onAsite,setOnAsite]=useState(false);
   const handleAside=()=>{
      setOnAsite(!onAsite);
      setState(true);
     
    } 
    const handleCart=()=>{
      if(count>0){
        localStorage.setItem("counter",count)
        setStateCounter(localStorage.getItem("counter"));
      }
    }
  
  return (
    <>
    
    <main className="main">
        <div className="left-main">
        <img className="image-prod1" onClick={handleAside} src={istoggle.th1?Prod1:istoggle.th2?Prod2:istoggle.th3?Prod3:Prod4} alt="affichage"/>
        <nav className="prod-nav">
        <ul className="nav-bar-prod">
       <li className="nav-link-pr"><img src={prodth1} onClick={()=>setToggle({th1:true,th2:false,th3:false,th4:false})}  className={istoggle.th1?"image-th image-th1":"image-th"} tabindex="0" alt="first"/></li>
       <li className="nav-link-pr"><img src={prodth2} onClick={()=>setToggle({th1:false,th2:true,th3:false,th4:false})} className={istoggle.th2?"image-th image-th1":"image-th"} tabindex="0" alt="second"/></li>
       <li className="nav-link-pr"><img src={prodth3} onClick={()=>setToggle({th1:false,th2:false,th3:true,th4:false})} className={istoggle.th3?"image-th image-th1":"image-th"} tabindex="0" alt="third"/></li>
       <li className="nav-link-pr"><img src={prodth4} onClick={()=>setToggle({th1:false,th2:false,th3:false,th4:true})} className={istoggle.th4?"image-th image-th1":"image-th"} tabindex="0" alt="for"/></li>
      </ul>
        </nav>
        </div>
        <div className="right-main">
         <p className="name-comapany">sneakers company</p>
         <h1 className="title-prod">fall limited edition sneakers</h1>
          <p className="desc">These low-profile sneakers are your perfect casual wear companion.
           Featuring a durable rubber outer sole, 
          they’ll withstand everything the weather can offer.</p>
          <div className="price-div">
          <h2 className="final-price">$125.00 <span className="pers">50%</span></h2>
          <h3 className="prev-price">$250.00</h3>
          </div>
          <div className="count-achat">
           <div className="count">
            <button className={count>0?"minus":"minus inter"} onClick={()=>count>0?setCount(count-1):setCount(count)}><img src={Minus} alt="minus"/></button>
            <div className="number">{count}</div>
            <button className="plus" onClick={()=>setCount(count+1)}><img src={Plus} alt="plus"/></button>
           </div>
           <button className="cart" onClick={handleCart}><svg className="icon-svg" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="black" fill-rule="nonzero"/></svg>Add to cart</button>
          </div>
        </div>
    </main>
    </>
  )
}
export default Main