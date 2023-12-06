import { MeshReflectorMaterial, PresentationControls, Stage } from "@react-three/drei";
import { extend, useFrame, useThree, } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Chaircolchon from "./Chaircolchon";

extend({ OrbitControls });

const CameraController = () => {
    const orbitRef = useRef();

    const { camera, gl } = useThree();

    useFrame(() => {
        orbitRef.current.update();
    });

    return <orbitControls
        args={[camera, gl.domElement]}
        ref={orbitRef}
        autoRotate={true}
        autoRotateSpeed={0.5}
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        enableDamping={false}
        minDistance={0.5}
        maxDistance={2}
        zoomToCursor={true}
    />;
};

const Experience = () => {

    return (
        <>
        <CameraController />
        <PresentationControls
            speed={1.5}
            global
            zoom={0.7}
            polar={[-0.1, Math.PI / 4]}
        >
            <Stage environment={"city"} intesity={0.6} contactShadow={false}>
                <Chaircolchon
                    position={[0, 1.31, 0]}
                    rotation={[-1.57, 0, 0.5]}
                    scale={[0.05, 0.05, 0.05]}
                />
            </Stage>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.49, 0]}>
                <planeGeometry args={[170, 170]} />
                <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={40}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#0f0f0f"
                    metalness={0.5}
                />
            </mesh>
        </PresentationControls>
        </>
    );
}
export default Experience;