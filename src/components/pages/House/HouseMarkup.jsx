import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import Mvdr from "./Mvdr";
import { Breakpoint} from "react-socks";
import Ocean from "./Water";
import styles from "./HouseMarkup.module.css"
import Stars from "../Home/Stars";


 const HouseMarkup = () => {


  return (
    <div>

       <Breakpoint large up>


     <Canvas style={{position: "absolute", top: 0, left: 0, fov: 70, width:"100%", height:"100%" }}>
       <OrbitControls />
       <Suspense fallback={null}>
      <ambientLight intensity={5} />

       <Mvdr scale={.15} />
       <Sky scale={1000} sunPosition={[500, 1, -1000]} turbidity={.1} />
       </Suspense>
     </Canvas>
     <div style={{position: "absolute", top: "9vh", right: "9vh"}}>
        <a
              style={{
                margin: "10 px",
                padding: 0,
                fontSize: "2em",
                fontWeight: 500,
                letterSpacing: "-0.05em",
                lineHeight: "1.9em",
                color: "black",
                opacity: "50%"
              }}
              //href="https://housedecentraland.herokuapp.com?realm=localhost-stub&renderer-branch=master"
            >
             This is an NFT created
             <br/> for Decentraland a virtual 3d World!
            </a>
     </div>

       </Breakpoint>
      <Breakpoint small down  style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "0 auto",
            alignItems: "center",
            textAlign: "center",
          }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: "20px", marginTop: "14px", fontSize: "24px" }}>
            NFT created for Decentraland Metaverse
          </h1>
        </div>
        <div style={{ width: "100%", height:"100vh" }}>
        <Canvas style={{position:"absolute", top:"0", height:"110vh"}} camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
          <OrbitControls enablePan={true} enableDamping enableZoom/>

            <Stars /> 
          <Mvdr scale={.017} position={[.1, 0, 0]} />
          </Suspense> 
          </Canvas>
         
          <footer
            style={{
              display:"flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10 px",
              padding: "10px",
              fontSize: "1em",
              fontWeight: 500,
              letterSpacing: "-0.05em",
              lineHeight: "1.9em",
            }}
          >
          
            <div style={{ alignItems:"center", zIndex:"1", color:"white"}}>
              If you wanna know
              more about visit....
              <a
                style={{
                  margin: "10 px",
                  padding: 0,
                  fontSize: "1.2em",
                  fontWeight: 500,
                  letterSpacing: "-0.05em",
                  lineHeight: "1.9em",
                }}
                href="https://decentraland.org/"
              >
                Decentraland
              </a>
            </div>
          </footer>
        </div>
      </Breakpoint>
    </div>
  );
};

export default HouseMarkup;
