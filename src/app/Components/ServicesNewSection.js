// import React from "react";
// import Image from "next/image";
// import AOS from "aos"; // Import AOS
// import "../resposive.css";
// import Link from "next/link";

// const ServicesNewSection = () => {
//   return (
//     <section className="ServicesNewSection">
//       <div className="container">
//         <div className="positivity">
//           <div className="positivitymain">
//             <div
//               className="ServiceTextAnimationWeb ServiceTextApp hidediv"
//               id="mobilediv"
//               style={{ display: "none", opacity: "0" }}
//             >
//               <span className="positivity__alone">Mobile app development</span>
//               <div className="positivity__words">
//                 <span className="change color-blue">
//                   Your vision, Our expertise, Live results
//                   <i>
//                     <Image
//                       width={600}
//                       height={100 / (100 / 100)}
//                       src="/img/home/your-vision.png"
//                       alt="icon"
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-red">
//                   Turning vision into apps
//                   <i>
//                     <Image
//                       width={600}
//                       height={100 / (100 / 100)}
//                       src="/img/home/turning-vision.png"
//                       alt="icon"
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-yellow">
//                   Empower business solutions
//                   <i>
//                     <Image
//                       width={600}
//                       height={100 / (100 / 100)}
//                       src="/img/home/empower-business.png"
//                       alt="icon"
//                     />
//                   </i>
//                 </span>
//               </div>

//               <div className="positivity__words2">
//                 <span className="change2">
//                   <span className="color-blue-bg"></span>
//                 </span>
//                 <span className="change2">
//                   <span className="color-red-bg"></span>
//                 </span>
//                 <span className="change2">
//                   <span className="color-yellow-bg"></span>
//                 </span>
//               </div>
//             </div>

//             <div
//               className="ServiceTextAnimationWeb ServiceTextApp showdiv"
//               id="websitediv"
//               style={{ opacity: "1" }}
//             >
//               <span className="positivity__alone">Web development</span>
//               <div className="positivity__words">
//                 <span className="change color-blue">
//                   Seamless web: Design, function, UX
//                   <i>
//                     <Image
//                       width={600}
//                       height={100 / (100 / 100)}
//                       src="/img/home/ux-design.png"
//                       alt="icon"
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-red">
//                   Turning ideas into responsive web
//                   <i>
//                     <Image
//                       width={600}
//                       height={100 / (100 / 100)}
//                       src="/img/home/responsive-web.png"
//                       alt="icon"
//                     />
//                   </i>
//                 </span>
//                 <span className="change color-yellow">
//                   Laravel experts, web &amp; app solutions
//                   <i>
//                     <Image
//                       width={600}
//                       height={100 / (100 / 100)}
//                       src="/img/home/laravel-experts.png"
//                       alt="icon"
//                     />
//                   </i>
//                 </span>
//               </div>

//               <div className="positivity__words2">
//                 <span className="change2">
//                   <span className="color-blue-bg"></span>
//                 </span>
//                 <span className="change2">
//                   <span className="color-red-bg"></span>
//                 </span>
//                 <span className="change2">
//                   <span className="color-yellow-bg"></span>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="MoreServicesBtn">
//           <Link href="/services" className="">
//             <span>
//               More Services
//               <i>
//                 <Image
//                   width={20}
//                   height={100}
//                   src="/img/home/top-banner/rightArrowIcon.svg"
//                   className="d-inline"
//                   alt="icon"
//                 />
//               </i>
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesNewSection;


import React from "react";
import Image from "next/image";
import AOS from "aos"; // Import AOS
import "../resposive.css";
import Link from "next/link";

const ServicesNewSection = () => {
  return (
    <section className="ServicesNewSection">
      <div className="container">
        <div className="positivity">
          <div className="positivitymain">
            {/* Mobile Development Section */}
            <div
              className="ServiceTextAnimationWeb ServiceTextApp hidediv"
              id="mobilediv"
              style={{ display: "none", opacity: "0" }}
            >
              <span className="positivity__alone">Mobile app development</span>
              <div className="positivity__words">
                <span className="change color-blue">
                  Your vision, Our expertise, Live results
                  <i>
                    <Image
                      layout="responsive"
                      width={600}
                      height={100}
                      sizes="(max-width: 768px) 100vw, 600px"
                      src="/img/home/your-vision.png"
                      alt="icon"
                    />
                  </i>
                </span>
                <span className="change color-red">
                  Turning vision into apps
                  <i>
                    <Image
                      layout="responsive"
                      width={600}
                      height={100}
                      sizes="(max-width: 768px) 100vw, 600px"
                      src="/img/home/turning-vision.png"
                      alt="icon"
                    />
                  </i>
                </span>
                <span className="change color-yellow">
                  Empower business solutions
                  <i>
                    <Image
                      layout="responsive"
                      width={600}
                      height={100}
                      sizes="(max-width: 768px) 100vw, 600px"
                      src="/img/home/empower-business.png"
                      alt="icon"
                    />
                  </i>
                </span>
              </div>
            </div>

            {/* Web Development Section */}
            <div
              className="ServiceTextAnimationWeb ServiceTextApp showdiv"
              id="websitediv"
              style={{ opacity: "1" }}
            >
              <span className="positivity__alone">Web development</span>
              <div className="positivity__words">
                <span className="change color-blue">
                  Seamless web: Design, function, UX
                  <i>
                    <Image
                      layout="responsive"
                      width={600}
                      height={100}
                      sizes="(max-width: 768px) 100vw, 600px"
                      src="/img/home/ux-design.png"
                      alt="icon"
                    />
                  </i>
                </span>
                <span className="change color-red">
                  Turning ideas into responsive web
                  <i>
                    <Image
                      layout="responsive"
                      width={600}
                      height={100}
                      sizes="(max-width: 768px) 100vw, 600px"
                      src="/img/home/responsive-web.png"
                      alt="icon"
                    />
                  </i>
                </span>
                <span className="change color-yellow">
                  Laravel experts, web &amp; app solutions
                  <i>
                    <Image
                      layout="responsive"
                      width={600}
                      height={100}
                      sizes="(max-width: 768px) 100vw, 600px"
                      src="/img/home/laravel-experts.png"
                      alt="icon"
                    />
                  </i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="MoreServicesBtn">
          <Link href="/services" className="">
            <span>
              More Services
              <i>
                <Image
                  layout="fixed"
                  width={20}
                  height={20}
                  src="/img/home/top-banner/rightArrowIcon.svg"
                  alt="icon"
                />
              </i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesNewSection;
