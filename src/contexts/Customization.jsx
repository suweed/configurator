import { createContext, useContext, useEffect, useState } from "react";

const CustomizationContext = createContext();

export const chairColors = [
    {
        color: "#ffffff",
        name: "White"
    },
    {
        color: "#000000",
        name: "Black"
    },
    {
        color: "#a8a8a8",
        name: "Gray"
    },
    {
        color: "#ff0000",
        name: "Red"
    },
    {
        color: "#00ff00",
        name: "Green"
    },
    {
        color: "#0000ff",
        name: "Blue"
    }
];

export const CustomizationProvider = (props) => {
    const [material, setMaterial] = useState('plastico');
    const [legs, setLegs] = useState(1);
    const [chairColor, setChairColor] = useState(chairColors[0]);
    
    return (
        <CustomizationContext.Provider
            value={{
                material,
                setMaterial,
                legs,
                setLegs,
                chairColor,
                setChairColor
            }}
        >
            {props.children}
        </CustomizationContext.Provider>
    )
}

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
}