import { chairColors, useCustomization } from "../contexts/Customization";
import Visualizer3D from './Visualizer3D.jsx';
import SliderGallery from './SliderGallery';
import { useState } from 'react';

const VisualizerConfigurator = () => {
    const { material, setMaterial, legs, setLegs, chairColor, setChairColor } = useCustomization();
    const [isShown, setIsShown] = useState(false);
    
    const handleClick = event => {
        setIsShown(current => !current);
    };
    
    return <>
        <span className='btn_3d top-[12%] left-[85%] lg:top-[15%] lg:left-[45%] md:top-[12%] md:left-[80%]' onClick={handleClick}>
            <span>
                <span>
                    {!isShown ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    )}
                </span>
            </span>
        </span>
        {isShown ? (
            <Visualizer3D />
        ) : (
            <SliderGallery />
        )}
    </>

};

export default VisualizerConfigurator;