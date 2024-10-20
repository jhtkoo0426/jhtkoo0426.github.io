// Displays a carousel of images with their descriptions.
import React from "react";


const ProjectImageCarousel = ({ carouselItems }) => {
    return (
        <div className="carousel">
            {
                carouselItems && carouselItems.map((element, index) => (
                    <div key={index}>
                        <img className="carousel-item-img" src={element.img} alt={element.desc} />
                        <p className="carousel-item-desc">{element.desc}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ProjectImageCarousel;