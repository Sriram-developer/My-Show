import React from "react"
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {

const settings = {
    arrows:true,
    centerMode:true,
    centerpadding:"200px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  const images = ["https://www.eastcoastdaily.in/wp-content/uploads/2021/05/3-2.jpg",
  "https://www.eastcoastdaily.in/wp-content/uploads/2021/05/3-2.jpg",
  "https://www.eastcoastdaily.in/wp-content/uploads/2021/05/3-2.jpg",
  "https://www.eastcoastdaily.in/wp-content/uploads/2021/05/3-2.jpg",
  "https://www.eastcoastdaily.in/wp-content/uploads/2021/05/3-2.jpg",
  "https://www.eastcoastdaily.in/wp-content/uploads/2021/05/3-2.jpg",
  

  ];
  

  return (<>
  
  <HeroSlider {...settings}>
      {
          images.map((image) =>(
              <div className="w-20 h-80">
                  <img src={image} alt="test"className="w-full h-full"/>
              </div>
          ))
      }
  </HeroSlider>

  </>);
};

export default HeroCarousal;
