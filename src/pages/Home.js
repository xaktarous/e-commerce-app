import { useState } from "react"
import Header from "../components/Header"
import HeaderPhone from "../components/HeaderPhone"
import Main from "../components/Main"
import Prod1 from "../images/image-product-1.jpg"
import Prod2 from "../images/image-product-2.jpg"
import Prod3 from "../images/image-product-3.jpg"
import Prod4 from "../images/image-product-4.jpg"
import prodth1 from "../images/image-product-1-thumbnail.jpg"
import prodth2 from "../images/image-product-2-thumbnail.jpg"
import prodth3 from "../images/image-product-3-thumbnail.jpg"
import prodth4 from "../images/image-product-4-thumbnail.jpg"
import close from "../images/icon-close.svg"
import "./home.css"
import MainPhone from "../components/MainPhone"
const Home = () => {
  const [item, setState] = useState(false);
  const [itemP,setItemP]=useState(false);
  const [istoggle,setToggle]=useState({th1:true,th2:false,th3:false,th4:false});
  const [counter,setCounter]=useState( localStorage.getItem("counter"));
  const handlePrev=()=>{
    if(istoggle.th2){
      setToggle({th1:true,th2:false,th3:false,th4:false});
    }else if(istoggle.th3){
      setToggle({th1:false,th2:true,th3:false,th4:false});
    }else if(istoggle.th4){
      setToggle({th1:false,th2:false,th3:true,th4:false});
    }
  }
  const handleNext=()=>{
    if(istoggle.th1){
      setToggle({th1:false,th2:true,th3:false,th4:false});
    }else if(istoggle.th2){
      setToggle({th1:false,th2:false,th3:true,th4:false});
    }else if(istoggle.th3){
      setToggle({th1:false,th2:false,th3:false,th4:true});
    }
  }
  const handleClose=()=>{
    setState(!item);
    setToggle({th1:true,th2:false,th3:false,th4:false})
  }
  const handleClosePhone=()=>{
    setItemP(!itemP);
  }

  return (
    <>
    
    {item && <aside className="aside"> 
     
    <div className="left-main-s">
   <div className="place-del"> <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" className="del" onClick={handleClose}><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg> </div>
      <div className="prev-next">
   
      <div className="cadre" onClick={handlePrev}>
      <svg   width="13" height="18" xmlns="http://www.w3.org/2000/svg" className="prev" ><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
      </div>
        <img className="image-prod1-s"  src={istoggle.th1?Prod1:istoggle.th2?Prod2:istoggle.th3?Prod3:Prod4} alt="affichage"/>
        
        <div className="cadre" onClick={handleNext}>
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg" className="prev" ><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
      </div>
      
        </div>

        <nav className="prod-nav-s">
        <ul className="nav-bar-prod">
       <li className="nav-link-pr"><img src={prodth1} onClick={()=>setToggle({th1:true,th2:false,th3:false,th4:false})}  className={istoggle.th1?"image-th image-th1":"image-th"} tabindex="0" alt="first"/></li>
       <li className="nav-link-pr"><img src={prodth2} onClick={()=>setToggle({th1:false,th2:true,th3:false,th4:false})} className={istoggle.th2?"image-th image-th1":"image-th"} tabindex="0" alt="second"/></li>
       <li className="nav-link-pr"><img src={prodth3} onClick={()=>setToggle({th1:false,th2:false,th3:true,th4:false})} className={istoggle.th3?"image-th image-th1":"image-th"} tabindex="0" alt="third"/></li>
       <li className="nav-link-pr"><img src={prodth4} onClick={()=>setToggle({th1:false,th2:false,th3:false,th4:true})} className={istoggle.th4?"image-th image-th1":"image-th"} tabindex="0" alt="for"/></li>
      </ul>
        </nav>
        </div>
        </aside>}
        {itemP && <aside className="aside-phone">
           <div className="my-menu">
            <img className="close" src={close} onClick={handleClosePhone}/>
            <nav className="first-nav">
             <ul className="nav-bar">
             <li className="nav-link-p "><a href="#">Collections</a></li>  
             <li className="nav-link-p "><a href="#">Men</a></li>
             <li className="nav-link-p "><a href="#">Women</a></li>
             <li className="nav-link-p "><a href="#">About</a></li>
             <li className="nav-link-p "><a href="#">Contact</a></li>
             </ul>
             </nav>
           </div>
        </aside>}
    <Header  StateCounter={counter} setStateCounter={setCounter}/>
    <HeaderPhone setState={setItemP} StateCounter={counter} setStateCounter={setCounter}/>
    <Main setState={setState} setStateCounter={setCounter} />
    <MainPhone   setStateCounter={setCounter}/>
    </>
  )
}
export default Home