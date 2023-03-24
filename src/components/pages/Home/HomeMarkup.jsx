import { Canvas } from "@react-three/fiber";
import React from "react";
import Stars from "./Stars";
import styles from "./HomeMarkup.module.css";
import { Breakpoint } from "react-socks";

 function Overlay() {
  return (
    <div  style={{
      position: "absolute",
      top: 0,
      left: 0,
      pointerEvents: "none",
      width: "100%",
      height: "100%",
    }}>
      <Breakpoint large up>
        <div
         
        >
          <div
            style={{
              position: "absolute",
              top: "39%",
              left: "50%",
              transform: "translate3d(-50%,-50%,0)",
            }}
          >
            <h1
              style={{
                marginTop: "5px",
                padding: 0,
                fontSize: "2.5em",
                fontWeight: 500,
                letterSpacing: "-0.05em",
              }}
            >
              Hi! I'm Ricardo Glad to see you!
            </h1>
            <br />
            <br />
            <h1
              style={{
                margin: "10 px",
                padding: 0,
                fontSize: "1.4em",
                fontWeight: 500,
                letterSpacing: "-0.05em",
                lineHeight: "1.9em",
              }}
            >
              I’m a software developer! I can help you build a product, feature
              or website. Look through some of my work and experience! If you
              like what you see and have a project you need coded, don’t
              hesitate to contact me.{" "}
            </h1>
          </div>
        </div>
      </Breakpoint>
      <Breakpoint small down>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate3d(-50%,-50%,0)",
            }}
          >
            <h1
              style={{
                marginTop: "15px",
                padding: 0,
                fontSize: "2em",
                fontWeight: 500,
                letterSpacing: "-0.05em",
              }}
            >
              Hi! I'm Ricardo Glad to see you!
            </h1>
            <br />
            <h1
              style={{
                margin: "10 px",
                padding: 0,
                fontSize: "1.2em",
                fontWeight: 500,
                letterSpacing: "-0.05em",
                lineHeight: "1.9em",
              }}
            >
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
    <div >
      <div className={styles.container}>
      <Overlay />
        <Canvas className={styles.canvas} camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>
    </div>
  );
}
