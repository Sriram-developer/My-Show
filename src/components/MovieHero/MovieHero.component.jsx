import React from "react";

const MovieHero = () => {
    return (
        <>     
           <div>
               {/*Mobile*/}
               <div className="relative md:hidden w-full" style={{height: "calc(180vw)"}}>
                   <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0"/>
                   <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" alt="Poster" className="w-full h-full"/>
               </div>

               {/*Medium*/}
               <div className=" relative hidden md:block  w-full lg:hidden" style={{height: "calc(110vw)"}}>
               <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0"/>
               <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" alt="Poster" className="w-full h-full"/>
               </div>

               {/*Large*/}
               <div className=" relative hidden lg:block" style={{height: "30rem"}}>
                   <div className="absolute h-full z-10 w-full" style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",}}/>
                  
                   <div className="absolute z-30 w-64 h-96 left-24 top-10">
                       <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" alt="Poster" className="w-full h-full rounded-xl" />
                   </div>
                   <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" alt="poster" className="w-full h-full" />
               </div>
           </div>
        </>
    );
};

export default MovieHero;
