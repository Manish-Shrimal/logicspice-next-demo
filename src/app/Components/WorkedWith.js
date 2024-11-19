// "use client";
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";

// const WorkedWith = ({ workedWithData }) => {
//   const settings = {
//     dots: false,
//     arrows: true,
//     lazyLoad: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//   };

//   return (
//     <>
//       <div className="slider-container">
//         <Slider {...settings}>
//           {workedWithData.map((item, index) => (
//             <div className="client_logos" key={index}>
//               <a rel="nofollow" href={item.link} target="_blank">
//                 <Image
//                   width={100}
//                   height={100}
//                   src={item.image}
//                   alt="client project logo - logicspice"
//                   className="lazy"
//                   style={{
//                     backgroundImage: `url(${item.image})`,
//                   }}
//                 />
//               </a>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </>
//   );
// };

// export default WorkedWith;


"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const WorkedWith = ({ workedWithData }) => {
  const settings = {
    dots: false,
    arrows: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024, // For screens below 1024px wide
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // For screens below 768px wide (tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For screens below 480px wide (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {workedWithData.map((item, index) => (
            <div className="client_logos" key={index}>
              <a rel="nofollow" href={item.link} target="_blank">
                <Image
                  width={100}
                  height={100}
                  src={item.image}
                  alt="client project logo - logicspice"
                  className="lazy"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .slider-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .client_logos {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
        }
      `}</style>
    </>
  );
};

export default WorkedWith;

