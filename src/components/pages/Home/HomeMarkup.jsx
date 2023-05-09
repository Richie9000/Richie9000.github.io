import { Canvas } from "@react-three/fiber";
import React from "react";
import Stars from "./Stars";


import styles from "./HomeMarkup.module.css";
import { Breakpoint } from "react-socks";
import ShoeMarkup from "../Shoe/ShoeMarkup";

 function Overlay() {
  return (
    <div  style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", width: "100%",height: "100%",}}>
      <Breakpoint large up>
        <div>
          <div style={{ position: "absolute",top: "25%", left: "50%", transform: "translate3d(-50%,-50%,0)",}}>
            <h1 style={{ marginTop: "5px", padding: 0, fontSize: "2.5em", fontWeight: 500, letterSpacing: "-0.05em"}} >
              Hi! I'm Ricardo Glad to see you!
            </h1>
            <br />
            <br />
            <h1 style={{ margin: "10 px",  padding: 0,  fontSize: "1.6em",  fontWeight: 500, letterSpacing: "-0.05em", lineHeight: "1.9em", }}>
              I’m a software developer! I can help you build a product, feature
              or website. <br />Look through some of my work and  experience! If you
              like what you see and <br />have a project you need coded, don’t
              hesitate to contact me.{" "}
            </h1>
          </div>
        </div>
      </Breakpoint>
      <Breakpoint small down>
        <div style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", width: "100%",height: "100%" }}>
          <div style={{ position: "absolute", top: "28%", left: "50%", transform: "translate3d(-50%,-50%,0)", }}>
            <h1 style={{ marginTop: "15px",padding: 0, fontSize: "2em", fontWeight: 500, letterSpacing: "-0.05em",}}>
              Hi! I'm Ricardo Glad to see you!
            </h1>
            <br />
            <h1
              style={{ margin: "10 px", padding: 0, fontSize: "1.2em", fontWeight: 500, letterSpacing: "-0.05em",lineHeight: "1.9em", }} >
              I’m a software developer! I can help you build a product, feature
              or website. Look through some of my work and experience! If you
              like what you see and have a project you need coded, don’t
              hesitate to contact me.{" "}
            </h1>
          </div>
        </div>
      </Breakpoint>
    </div>
  );
}

export default function HomeMarkup() {
  return (
    <div>
      <Breakpoint large up>
      <div >
        <div className={styles.container}>
          <div style={{position: "absolute", top: "calc(60vh - 15vw)", width: "100vw", height: "30vh", right:"25vw"}}>
  
        <Overlay  />
          </div>
          <Canvas className={styles.canvas} camera={{ position: [0, 0, 1] }}>
            <Stars />
          </Canvas>
        <div style={{ position: "absolute", top: "calc(60vh - 25vw)", width: "100vw", height: "30vh", left: "25vw"}}>
          <ShoeMarkup />
        </div>
        </div>
  
      </div>
      </Breakpoint>



      <div style={{height:"100%"}} >
        <Breakpoint small down>
            <div style={{ position: "absolute", top: "33vh", width: "100%" }}>
                  <Overlay />
                 </div>
        <Canvas style={{position:"absolute", top:"0", height:"130vh"}} camera={{ position: [0, 0, 1] }}>
            <Stars />
          </Canvas>
          <div style={{ position:"absolute", top:"60vh"}}>
                <ShoeMarkup />
              </div>
  
      </Breakpoint>

      </div>
    </div>
  );
}
