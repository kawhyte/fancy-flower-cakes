import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";



const PhotoGallery = () => {
    return ( 


<div className=" mx-12 my-12" >
        <Gallery  photos={photos} direction={"column"} />

</div>

     );
}
 
export default PhotoGallery;