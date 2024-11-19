// "use client";
// import React from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import "@/app/globals.css";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";

// const Workingwith = () => {
 

//   const clientLog = [
//     {
//       link: "https://iworks.sn/",
//       img: "/img/home/look/iwork-logo.webp",
//       logoSize: 130
//     },
//     {
//       link: "https://jobathome.fr/",
//       img: "/img/home/look/logo-job-at-home.webp",
//       logoSize: 110
//     },
//     {
//       link: "https://www.wedoitcheaper.com/",
//       img: "/img/home/look/logo-we-do.webp",
//       logoSize: 200
//     },
//     {
//       link: "https://www.gblancers.com/",
//       img: "/img/home/look/logo-gb-lancers.webp",
//       logoSize: 120
//     },
//     {
//       link: "https://www.yourpension.ch/",
//       img: "/img/home/look/yp-logo.webp",
//       logoSize: 200
//     },
//   ];

//   return (
//     <div id="workingowl">
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={30}
//         loop={true}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {clientLog.map((client, index) => (
//           <SwiperSlide key={index}>
//             <div className="client_logos">
//               <a rel="nofollow" href={client.link} target="_blank">
//                 <Image
//                   width={client.logoSize}
//                   height={100 / (100 / 100)}
//                   src={client.img}
//                   alt={`client project logo - ${index}`}
//                   className="lazy"
//                   unoptimized={true}
//                 />
//               </a>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Workingwith;


        

        



"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "@/app/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const Workingwith = () => {
  const clientLog = [
    {
      link: "https://iworks.sn/",
      img: "/img/home/look/iwork-logo.webp",
      logoSize: 130,
    },
    {
      link: "https://jobathome.fr/",
      img: "/img/home/look/logo-job-at-home.webp",
      logoSize: 110,
    },
    {
      link: "https://www.wedoitcheaper.com/",
      img: "/img/home/look/logo-we-do.webp",
      logoSize: 200,
    },
    {
      link: "https://www.gblancers.com/",
      img: "/img/home/look/logo-gb-lancers.webp",
      logoSize: 120,
    },
    {
      link: "https://www.yourpension.ch/",
      img: "/img/home/look/yp-logo.webp",
      logoSize: 200,
    },
  ];

  return (
    <div id="workingowl">
      <Swiper
        spaceBetween={20}
        loop={true}
        navigation={true}
        pagination={{ clickable: false }}
        modules={[ Navigation]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {clientLog.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="client_logos">
              <a rel="nofollow" href={client.link} target="_blank">
                <Image
                  width={client.logoSize}
                  height={100 / (100 / 100)}
                  src={client.img}
                  alt={`client project logo - ${index}`}
                  className="lazy"
                  unoptimized={true}
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Workingwith;

