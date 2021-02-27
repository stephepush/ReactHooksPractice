import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver 
            primaryImg="/static/speakers/bw/bmwFiverbw.jpg" 
            secondaryImg="/static/speakers/bmwFiver.jpg"
            alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver 
            primaryImg="/static/speakers/bw/OIPbw.jpg" 
            secondaryImg="/static/speakers/OIP.jpg"
            alt="" />
        </div>
    );
};

export default ImageChangeOnMouseOver;