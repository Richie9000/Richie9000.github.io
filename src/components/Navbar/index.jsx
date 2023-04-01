import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Breakpoint } from 'react-socks';




 

const Navbar = () => {

  const [showNav, setShowNav] = useState(false)
  const [colorNav, setColorNav] = useState(false)
  const handleClick = () => {
    setColorNav(true)
  }
  const onClick = () => {setShowNav(true)}
  const myContainer = useRef(null);

  const PopHamb =() =>{
    const closed = useRef();
     function CloseNav (){
       closed.current.style.display = "none"
   
     }
     
     return(
       <div ref={closed} className="containerS" style={{ top: 0, height: "100vh", width: "100%", backgroundColor:"black", zIndex: "3", position: "absolute", opacity:"95%"}}>
         <ul style={{margin: "25px", paddingTop:"20px", display:"grid"}} >
      <Link className="list-group-item" onClick= {() => { setShowNav(false); CloseNav()}} to="/" style={{margin: "15px", backgroundColor: "Transparent", fontSize:"19px", color: "white", opacity: "25%"}}  >Home</Link>
      <Link className="list-group-item" to="/house"  onClick= {() => {setShowNav(false); CloseNav(); }} style={{margin: "15px", backgroundColor: "Transparent", fontSize:"19px", color: "white", opacity: "25%"}} >3D House</Link>
      <Link className="list-group-item" to="/scroll"  onClick= {() => {setShowNav(false); CloseNav()}} style={{  margin: "15px", backgroundColor: "Transparent", fontSize:"19px", color: "white", opacity: "25%"}} >Contact</Link>
         </ul>
         <button  className="closebtn" onClick= {() => {setShowNav(false); CloseNav()}} style={{   backgroundColor: "Transparent", backgroundRepeat:"no-repeat",
        border: "none", cursor: "pointer", overflow: "hidden", color: "white", top: 0, position:"absolute", right: 2,
        fontSize: "33px", margin:"15px" }} >&times;</button>
           
       </div>
     )
    }

 
  return (
    <div ref={myContainer} style={{position: "relative", zIndex: "9999",}}>

    <Breakpoint large up>
    <div className="navbar" style={{   color: colorNav ? "black" : "", zIndex: colorNav ? "5" : ""}}  >
    <ul style={{margin: "15px"}}  >
    <Link className="nav-list" to="/" style={{margin: "15px"}}  >Home</Link>
      <Link className="nav-list" onClick={()=> handleClick()} to="/house" style={{margin: "15px"}} >3D House</Link>
      <Link className="nav-list" to="/scroll" style={{  margin: "15px"}} >Contact</Link>
      
    </ul>
  </div>
     
  </Breakpoint>
  
   <Breakpoint small down>
   <button showNav={showNav} onClick={onClick} style={{   backgroundColor: "Transparent", backgroundRepeat:"no-repeat",
        border: "none", cursor: "pointer", overflow: "hidden", color: "white", opacity: "25%",
        fontSize: "30px", margin:"15px" }}>☰</button> 
     { showNav ? <PopHamb /> : null }
   
 </Breakpoint>
    </div>
  )
}

export default Navbar