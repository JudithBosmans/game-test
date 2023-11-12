import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";

import "./index.css";
import Scene from "./Scene.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Canvas>
      <Suspense fallback={null}>
        <Physics
          //SAP -> Sweep and Prune, een manier om te checken of er objects in de scene gaan colliden
          //gravity -> Duh, alleen y heeft een waarde omdat de objecten naar beneden getrokken moeten worden
          broadphase="SAP"
          gravity={[0, -2.6, 0]}
        >
          <Scene />
        </Physics>
      </Suspense>
    </Canvas>

    <div class="controls">
      <p>press w a s d to move</p>
      <p>press k to swap camera</p>
      <p>press r to reset</p>
      <p>press arrows for flips</p>
    </div>
  </>
);
