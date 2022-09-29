import React, {useContext} from 'react';
import {LightDarkContext} from '../LightDarkContext/LightDarkContext.js';
import {lightModeStyle, darkModeStyle} from '../LightDarkContext/LightDarkContext.js';
import './ContentPage.css';

export function ContentPage(props) {

    const {mode, setMode, style, setStyle} = useContext(LightDarkContext);
    const {title, image, content} = props;

    function changeLightDarkMode() {
        if(mode === "light") {
            setMode("dark");
            setStyle(darkModeStyle);
        } else {
            setMode("light");
            setStyle(lightModeStyle);
        }
    }

    return (
        <div className="content-page" style={style}>
            <h1>{title}</h1>
            <img className="content-image" src={image}></img>
            <p>{content}</p>
            <button className="content-button" onClick={changeLightDarkMode}>{mode}</button>
        </div>
    );
}