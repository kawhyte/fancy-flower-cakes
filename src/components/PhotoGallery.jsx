import React from "react";
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