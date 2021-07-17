import React from "react";
import Slider from "react-slick";
// Component 
import Poster from "../Poster/Poster.component";

export const Premier = () => {

    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow :5,
        slidesToScroll:2,
        InitialSlide: 0,
        responsive: [{
             breakpoints:1024,
             settings:{
                 slidesToShow: 3,
                 slidesToScroll: 2,
                 infinite:true,
             },
        },
    
        {
            breakpoints:768,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
                InitialSlide:1,
            },
       },
    
    
       {
        breakpoints:480,
        settings:{
            slidesToShow: 2,
            slidesToScroll: 1,
        },
    },
    ],
    };

 const PremierImages = [
 {
    src:"https://assets.mubicdn.net/images/notebook/post_images/28127/images-w1400.jpg?1558009751",
    alt:"Die",
    title:"The Dead Don't Die",
    subtitle:"english",
   },
   {
    src:"https://assets.mubicdn.net/images/notebook/post_images/28127/images-w1400.jpg?1558009751",
    alt:"Die",
    title:"The Dead Don't Die",
    subtitle:"english",
},
{
    src:"https://assets.mubicdn.net/images/notebook/post_images/28127/images-w1400.jpg?1558009751",
    alt:"Die",
    title:"The Dead Don't Die",
    subtitle:"english",
},
{
    src:"https://assets.mubicdn.net/images/notebook/post_images/28127/images-w1400.jpg?1558009751",
    alt:"Die",
    title:"The Dead Don't Die",
    subtitle:"english",
},
{
    src:"https://assets.mubicdn.net/images/notebook/post_images/28127/images-w1400.jpg?1558009751",
    alt:"Die",
    title:"The Dead Don't Die",
    subtitle:"english",
},

{
    src:"https://assets.mubicdn.net/images/notebook/post_images/28127/images-w1400.jpg?1558009751",
    alt:"Die",
    title:"The Dead Don't Die",
    subtitle:"english",
},

{
    src:"https://assets.mubicdn.net/images/notebook/post_images/28127/images-w1400.jpg?1558009751",
    alt:"Die",
    title:"The Dead Don't Die",
    subtitle:"english",
},

{
    src:"https://assets.mubicdn.net/images/notebook/post_images/28127/images-w1400.jpg?1558009751",
    alt:"Die",
    title:"The Dead Don't Die",
    subtitle:"english",
},

];

    return (
        <>
        <div className="flex  flex-col items-start ">
            <h3 className="text-white text-xl font-bold">Premiers</h3>
            <p className="text-white text-sm">Brand new release every friday</p>
        </div>
           <Slider {...settings}>
               {PremierImages.map((image) =>( 
               <Poster {...image} isDark/>
               
               ))}
               </Slider> 
        </>
    );
};

export default Premier;
