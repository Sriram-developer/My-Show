import React from "react";
import {FaCcVisa,FaCcApplePay} from "react-icons/fa";

// Component
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";

const Movie = () => {
    return (
        <>
          <MovieHero/>
          <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
            <div className="flex flex-col items-start gap-3">
            <h2 className="text-gray-800 font-bold  text-2xl">About the movie</h2>
            <p>Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after 
              the death of Clark Kent. Meanwhile,
              Darkseid sends Steppenwolf to Earth with an army to subjugate humans.</p>
            </div>
            <div className="my-8">
              <hr/>
            </div>

            <div className="my-8">
              <h1 className="text-gray-800 font-bold  text-2xl mb-3">Appicable offers</h1>

              <div className="flex flex-col gap-3 lg:flex-row">

             <div className="flex items-start gap-2 bg-yellow-100 p-3  border-yellow-400  border-dashed border-2 rounded-md">
                <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full "/>
                  </div>
               
               <div className="flex flex-col items-start">
                 <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                 <p className="text-gray-600">Get 50% off up to INR 150 on all Visa cards* on BookMyShow Stream.</p>
               </div>
               </div>

               <div className="flex items-start gap-2 bg-yellow-100 p-3  border-yellow-400  border-dashed border-2 rounded-md">
                <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full "/>
                  </div>
               
               <div className="flex flex-col items-start">
                 <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                 <p className="text-gray-600">Get Rs.75* off on 3 movies you buylrent on stream.Buy Filmy pass @Rs.99</p>
               </div>
               </div>
              
              </div>
            </div>
             
          <div>
              <div className="flex flex-wrap gap-4">
              <div>
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg" castName="Henry Cavil" role="Superman"/>
              </div>
              <div>
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg" castName="Henry Cavil" role="Superman"/>
              </div>
              <div>
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg" castName="Henry Cavil" role="Superman"/>
              </div>
              </div>
            </div>
          </div>
        </>
    );
};

export default Movie;
