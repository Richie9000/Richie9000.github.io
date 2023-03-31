import * as THREE from 'three'
import { useRef, startTransition } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'
import styles from "./ScrollWindow.module.css";
import ContactForm from './ContactForm';
import { Breakpoint } from 'react-socks';
import { useMediaQuery } from 'react-responsive';

function Item({ url, scale, ...props }) {
  const visible = useRef(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    startTransition(() => {
      ref.current.position.y = THREE.MathUtils.damp(
        ref.current.position.y,
        visible.current ? 0 : -height / 2 + 1,
        4,
        delta
      );
      ref.current.material.zoom = THREE.MathUtils.damp(
        ref.current.material.zoom,
        visible.current ? 1 : 1.5,
        4,
        delta
      );
    });
  });
  return (
    <group {...props}>
      <Image ref={ref} scale={scale} url={url} />
    </group>
  )
}

function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport);
  const isSmallViewport = useMediaQuery({ maxWidth: 768 }); // define small viewport based on device width

  // define different positions for items based on viewport size
  const itemPositions = isSmallViewport
    ? [
        [-w / 6, -h * 0.5, 0],
        [w / 30, -h, 0],
        [-w / 4, -h * 1.5, 0],
        [w / 4, -h * 1.8, 0],
        [w / 10, -h * 2.5, 0],
        [-w / 4, -h * 3.5, 0],
        [-w / 4, -h * 4.1, 0],
        [w / 4, -h * 4.6, 0],
        [-w / 6, -h * 5.6, 0],
      ]
    : [
        [-w / 6, 1,0],
        [ w / 30, -h *.64, 0],
        [-w / 3.3, -h * .57, 0],
        [w / 2.5, -h * .7, 0],
        [w / 10, -h * 1.39, 0],
        [-w / 4, -h * 2, 0],
        [-w / 4, -h * 2.8, 0],
        [w / 4, -h * 2.5, 0],
        [-w / 6, -h * 3.5, 0],
      ];

  return (
    <Scroll>
      {itemPositions.map((pos, index) => (
        <Item key={index} url={`/${index + 1}.jpg`} scale={[w / 3, w / 3, 1]} position={pos} />
      ))}
    </Scroll>
  );
}

export const ScrollWindow = () => (
  <div>

 <Breakpoint large up>

  <Canvas style={{height: '100vh', zIndex: '0' }} orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
    <color attach="background" args={['#f0f0f0']} />
    <ScrollControls damping={6} pages={5}>
      <Items />
      <Scroll html style={{ width: '100%',  height: '100vh', zIndex: '0' }}>
        <h2 style={{ position: 'absolute', top: `30vh`, right: '8vw', fontSize: '5em',  zIndex: '5', background: "linear-gradient(30deg, #c850c0, #ffcc70)", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>Would you like </h2>
        <h2 style={{ position: 'absolute', top: '180vh', left: '10vw', fontSize: '5em',  zIndex: '1', background: "linear-gradient(30deg, #c850c0, #ffcc70)", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>a web page</h2>
        <h2 style={{ position: 'absolute', top: '235vh', right: '30vw',fontSize: '5em',   zIndex: '1', background: "linear-gradient(30deg, #c850c0, #ffcc70)", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>like </h2>
        <h2 style={{ position: 'absolute', top: '350vh', right: '20vw', fontSize: '5em',  zIndex: '1', background: "linear-gradient(30deg, #c850c0, #ffcc70)", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>this one?</h2>
        <div style={{ position: 'absolute', top: '370vh', left: '50vw', fontSize: '1em',  zIndex: '1', margin: "10px" }}>
        <ContactForm />
       </div>
      </Scroll>
    </ScrollControls>
  </Canvas>
 </Breakpoint>

 
  <Breakpoint small down>
     <Canvas style={{height: '100vh', zIndex: '0' }} orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
    <color attach="background" args={['#f0f0f0']} />
    <ScrollControls damping={6} pages={5}>
      <Items />
      <Scroll html style={{ width: '100%',  height: '100vh', zIndex: '0' }}>
        <h2 style={{ position: 'absolute', top: `20vh`, right: '16vw', fontSize: '2em',  zIndex: '5', background: "linear-gradient(30deg, #c850c0, #ffcc70)"}}>Would you like </h2>
        <h2 style={{ position: 'absolute', top: '180vh', left: '10vw', fontSize: '2em',  zIndex: '1', background: "linear-gradient(30deg, #c850c0, #ffcc70)" }}>a web page</h2>
        <h2 style={{ position: 'absolute', top: '260vh', right: '10vw',fontSize: '2em',   zIndex: '1', background: "linear-gradient(30deg, #c850c0, #ffcc70)" }}>like </h2>
        <h2 style={{ position: 'absolute', top: '350vh', left: '3vw', fontSize: '2em',  zIndex: '1', background: "linear-gradient(30deg, #c850c0, #ffcc70)" }}>this one?</h2>
        <div style={{ position: 'absolute', top: '400vh', fontSize: '1em',  zIndex: '1', margin: "10px" }}>
        <ContactForm />
       </div>
      </Scroll>
    </ScrollControls>
  </Canvas>
  </Breakpoint>
  </div>
)