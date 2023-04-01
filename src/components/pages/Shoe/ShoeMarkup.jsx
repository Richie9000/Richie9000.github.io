import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { Breakpoint } from 'react-socks'
import Navbar from '../../Navbar'
import Shoe from './Shoe'
import styles from "./Shoe.module.css"

const ShoeMarkup = () => {

    const [mesh, setMesh] = useState("#ffffff")
    const [stripes, setStripes] = useState("#ffffff")
    const [sole, setSole] = useState("#ffffff")
    const [laces, setLaces] = useState("#ffffff")

  return (
    <div>

    <Breakpoint large up>
    <div className={styles.containerST}  >
        <h1 className={styles.titleS} >Let your client customize your products!</h1>
    </div>

      <div className={styles.wrapper}>
      <div className={styles.card}>
          <div >
            
              <Canvas style={{ width: "35vw", height: "50vh",backgroundColor:"white", borderRadius:"10px"}}>
              <Suspense fallback={null}>
              <ambientLight intensity={.7} />
              <spotLight intensity={.7} angle={.1} penumbra={1} position={[10,25,10]} castShadow />
              <Shoe customColors={{mesh:mesh, stripes:stripes, sole:sole, laces:laces}}  />
              <directionalLight intensity={1} position={[0,0,50]} color="blue" />
  
              <OrbitControls />
              </Suspense>
  
              </Canvas>
  
          </div>
          <h1 className={styles.titleC}>Color chooser</h1>
          <div className={styles.colors}>
               <div>
                  <input onChange={(e) => setMesh(e.target.value)} type="color" id="mesh" name="mesh"
                         value={mesh} />
                  <label htmlFor="mesh">Main</label>
                </div>
  
              <div>
                  <input onChange={(e)=> setStripes(e.target.value)} type="color" id="stripes" name="stripes"
                          value={stripes} />
                  <label htmlFor="stripes">Stripes</label>
              </div>
               <div>
                  <input onChange={(e)=>setSole(e.target.value)} type="color" id="sole" name="sole"
                          value={sole} />
                  <label htmlFor="sole">Sole</label>
              </div>
               <div>
                  <input onChange={(e)=>setLaces(e.target.value)} type="color" id="laces" name="laces"
                          value={laces} />
                  <label htmlFor="sole">Laces</label>
              </div>
          </div>
      </div>
      </div>
   
    </Breakpoint>
    <Breakpoint small down>
    <div style={{display: "flex", justifyContent: "center", margin: "0 auto", alignItems: "center", textAlign:"center"}} >
        <h1 style={{margin:"20px", top: "14px", fontSize:"4vw"}}>Let your client customize your products!</h1>
       
    </div>
    <div style={{position: "absolute", top: "30%", left: "11vw"}}>
    <div style={{backgroundColor:"#16094e", borderRadius:"13px", padding:"1rem", width:"70vw"}}>
        <div >
            <Canvas style={{ width: "70vw", backgroundColor:"white", height:"40vh"}}>
            <Suspense fallback={null}>
            <ambientLight intensity={.7} />
            <spotLight intensity={.7} angle={.1} penumbra={1} position={[10,25,10]} castShadow />
            <Shoe customColors={{mesh:mesh, stripes:stripes, sole:sole}}  />
            <directionalLight intensity={1} position={[0,0,50]} color="blue" />

            <OrbitControls />
            </Suspense>

            </Canvas>

        </div>
        <h3 style={{color:"white"}} >Color chooser</h3>
        <div className='colors'>
             <div>
                <input className={styles.input} onChange={(e) => setMesh(e.target.value)} type="color" id="mesh" name="mesh"
                       value={mesh} />
                <label style={{color:"white"}} htmlFor="mesh">Main</label>
              </div>

            <div>
                <input className={styles.input}onChange={(e)=> setStripes(e.target.value)} type="color" id="stripes" name="stripes"
                        value={stripes} />
                <label style={{color:"white"}} htmlFor="stripes">Stripes</label>
            </div>
             <div>
                <input className={styles.input} onChange={(e)=>setSole(e.target.value)} type="color" id="sole" name="sole"
                        value={sole} />
                <label style={{color:"white"}} htmlFor="sole">Sole</label>
            </div>
        </div>
    </div>
    </div>
    </Breakpoint>
    </div>

  )
}

export default ShoeMarkup