import React, { useState } from 'react';

export const LightDarkContext = React.createContext();

export const lightModeStyle = {
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(0, 0, 0)"
};

export const darkModeStyle = {
    backgroundColor: "rgb(115, 115, 115)",
    color: "rgb(255, 155, 155)"
};

export function LightDarkContextProvider({children}) {

    const [mode, setMode] = useState("light");
    const [style, setStyle] = useState(lightModeStyle);

    return (
        <LightDarkContext.Provider value={{mode, setMode, style, setStyle}}>
            {children}
        </LightDarkContext.Provider>
    );

}