import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import "./SliderGallery.css";
  
const imageData = [
    {
        id: 1,
        title: "Rowing",
        image: "https://dummyimage.com/600x400/000/fff",
        visor: false
    },
    {
        id: 2,
        title: "Italy",
        image: "https://dummyimage.com/600x400/000/f4f",
        visor: false
    },
    {
        id: 3,
        title: "Beach",
        image: "https://dummyimage.com/600x400/000/ff4",
        visor: false
    },
    {
        id: 4,
        title: "Beach",
        image: "https://dummyimage.com/600x400/000/5ff",
        visor: false
    },
    {
        id: 5,
        title: "3d",
        image: "https://dummyimage.com/600x400/000/5ff",
        visor: true
    }
];

const Image = ({ currentIndex }) => {
    let img = imageData[currentIndex].image;
    const texture = useLoader(THREE.TextureLoader, img);
    const ref = useRef();

    useFrame(({ clock }) => {
      ref.current.uTime = clock.getElapsedTime();
      ref.current.uProgress += (1 - ref.current.uProgress) * 0.1;
    });

    useEffect(() => {
      ref.current.uProgress = 0;
    }, [currentIndex]);

    return (
      <mesh>
        <planeGeometry attach="geometry" args={[2.5, 1.8]}  />
        <meshBasicMaterial ref={ref} attach="material" map={texture} toneMapped={false} />
      </mesh>
    )
}

const ImageContent = ({ currentIndex = 0 }) => {
    return (
        <group>
            <Image {...{ currentIndex }} />
        </group>
    );
};

function ImagesGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(0);
    const images = useLoader(
        THREE.TextureLoader,
        imageData.map((v) => v.image)
    );

    function move(dir, slideDir) {
        setLastIndex(currentIndex);
        setCurrentIndex((imageData.length + dir) % imageData.length);
        
        if (slideDir === "prev") {
            slide(-50);
        } else if (slideDir === "next") {
            slide(+50);
        }
    }

    let scrl = useRef();
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);

    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift);

        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };
    const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    useEffect(() => {
        function keydown(e) {
            switch (e.key) {
                case "ArrowLeft":
                    move(currentIndex - 1, "prev");
                break;
                case "ArrowRight":
                    move(currentIndex + 1, "next");
                break;
                default:
                break;
            }
        }

        window.addEventListener("keydown", keydown);

        return () => {
            window.removeEventListener("keydowm", keydown);
        };
    }, [currentIndex, lastIndex]);

    return (
        <>
            <Html>
                <div className="slider-controls">
                    <button
                        className="btn-option prev back"
                        style={{ visibility: scrollX !== 0 ? "visible" : "hidden" }}
                        onClick={() => move(currentIndex - 1, "prev")}
                    >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                    <div className="content-slider-images" ref={scrl} onScroll={scrollCheck}>
                        <div className="scroll-images" >
                            {imageData.map((element, index) => {
                                return element.visor ? (
                                    <button
                                        key={index}
                                        className={index === currentIndex ? "btn-option image selected" : "btn-option image"}
                                        onClick={() => move(index, "current")}
                                    >
                                        <img src={element.image} alt={element.title} />
                                    </button>
                                ) : (
                                    <button
                                        key={index}
                                        className={index === currentIndex ? "btn-option image selected" : "btn-option image"}
                                        onClick={() => move(index, "current")}
                                    >
                                        <img src={element.image} alt={element.title} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <button
                        className="btn-option next"
                        style={{ visibility: !scrolEnd ? "visible" : "hidden" }}
                        onClick={() => move(currentIndex + 1, "next")}
                    >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </button>
                </div>
            </Html>
            <ImageContent {...{ currentIndex }} />
        </>
    );
}

const SliderGallery = () => {
    return (
        <div className="carousel-images">
            <Canvas dpr={[2, 2]} camera={{ fov: 50, position: [0, 0, 2] }}>
                <ImagesGallery />
            </Canvas>
        </div>
    );
};

export default SliderGallery;