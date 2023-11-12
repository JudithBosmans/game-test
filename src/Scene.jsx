import React, { Suspense } from "react";
import Track from "./Track.jsx";
import Ground from "./Ground.jsx";
import Car from "./Car.jsx";

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

const Scene = () => {
  return (
    // <Suspense> - Dient vr iets terwijl assets downloaden
    <Suspense fallback={null}>
      <Environment
        files={process.env.PUBLIC_URL + "./pics/envmap.hdr"}
        background={"both"}
      />

      <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40} />
      <OrbitControls target={[-2.64, -0.71, 0.03]} />
      <Track />
      <Ground />
      <Car />
    </Suspense>
  );
};

export default Scene;
