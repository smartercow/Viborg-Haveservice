import React, { useRef, useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import { getReviews } from "../pages/api/reviews";

export default function App() {
  const [reviews, setReviews] = useState()
  const [loading, setLoading] = useState(false);
  const [fejl, setFejl] = useState(false);

  useEffect(() => {
    setLoading(true);
    setReviews() 
    getReviews()
      .then((data) => {
        if (data) {
          //console.log(data);

          setReviews(data); 
          setFejl(false); 
        } else {
          //console.log("fejl");

          setFejl(true);
          setAirT(); 
        }
      })
      .finally(() => {
        setLoading(false);
      });

    //console.log(setReviews);
  }, []);

  return (
    <div className="bg-lime-600 mb-10 py-10 border-t-2 border-t-lime-700">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-60"
      >
        {
          reviews && 
            reviews.map((rev, i) => (
              <SwiperSlide key={i} className="text-center xl:py-6 text-white">
                  <h2 className="text-3xl text-white font-bold">Kundeudtalelser</h2>
                  <br />
                  <div className="px-10">
                      <p className="">{rev.content}</p>
                  </div>
                  <br />
                  <p>- {rev.author}</p>
              </SwiperSlide>
            ))
          
        }
{/*                       <SwiperSlide  className="text-center xl:py-6 text-white">
                  <h2 className="text-3xl text-white font-bold">Kundeudtalelser</h2>
                  <br />
                  <div className="px-10">
                      <p className="">lol</p>
                  </div>
                  <br />
                  <p>- lol</p>
              </SwiperSlide> */}
      </Swiper>
    </div>
  );
}