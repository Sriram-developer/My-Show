import React from "react"
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {


 const settingsLG ={arrow: true, 
    autoplay:true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow:1,
    infinite: true,
    slidesToScroll:1,
  };         
           
           
const settings = {
    arrows:true,
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
  
  <div className="lg:hidden">
  <HeroSlider {...settings}>
      {
          images.map((image) =>(
              <div className="w-full h-56 md:h-80 py-3">
                  <img src={image} alt="test"className="w-full h-full"/>
              </div>
          ))
      }
  </HeroSlider>

  </div>
  <div className="hidden lg:block"><HeroSlider {...settingsLG}>
      {
          images.map((image) =>(
              <div className="w-full h-96 px-2 py-3">
                  <img src={image} alt="test"className="w-full h-full rounded-md"/>
              </div>
          ))
      }
  </HeroSlider>
</div>
  </>);
};

export default HeroCarousal;
