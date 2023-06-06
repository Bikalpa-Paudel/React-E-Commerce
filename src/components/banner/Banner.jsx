import banner1 from "./banner1.jpg"
import banner2 from "./banner2.jpg"
import banner3 from "./banner3.jpg"
import "./Banner.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Banner() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1// optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          }
      };
  return (
    <Carousel responsive={responsive}
     className="carousel" 
     autoPlay={true}
     infinite={true}
     >
        <div className="banner-img-container">
            <img src={banner1} alt="banner" className="banner-img"/>
        </div>
        <div className="banner-img-container">
            <img src={banner2} alt="banner" className="banner-img"/>
        </div>
        <div className="banner-img-container">
            <img src={banner3} alt="banner" className="banner-img"/>
        </div>    
    </Carousel>
  )
}
