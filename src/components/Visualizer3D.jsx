import { Canvas } from '@react-three/fiber'
import './Visualizer3D.css'
import Experience from './Experience'

function Visualizer3D() {
  return (
      <div className='Visualizer3D'>
        <Canvas>
          <color attach="background" args={["#141414"]} />
          <fog attach="fog" args={["#141414", 10, 20]} />
          <Experience />
        </Canvas>
      </div>
  );
}

export default Visualizer3D
