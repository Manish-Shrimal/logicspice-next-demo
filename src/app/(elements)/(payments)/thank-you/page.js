// "use client";
// import BaseAPI from "@/app/BaseAPI/BaseAPI";
// import Footer from "@/app/Components/Footer";
// import Navbar from "@/app/Components/Navbar";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// // import "@fortawesome/fontawesome-free/css/all.css";
// import "../../../../../public/css/font-awesome.css";
// import "../../elements.css";
// import Contactusmodel from "@/app/Components/Contactusmodel";

// const Page = () => {
//   const [modalOpen, setModalOpen] = useState(false);

//   const toggleModal = () => {
//     setModalOpen(!modalOpen);
//   };

//   return (
//     <>
//       {" "}
//       <Navbar />
//       <section class="thanks_you">
//         <div class="wrapper">
//           <div class="sid_oivd smwood smwoodde">
//             <div class="panel">
//               <div class="panel-thanks">
//                 <Image width={300} height={100} src="/img/logo.png" alt="Logo" />
//                 <br />
//                 <br />
//                 <Image
//                   width={300}
//                   height={100}
//                   alt="thank-you"
//                   style={{ marginBottom: "10px" }}
//                   src="/img/jobboard/thank.png"
//                 />
//                 <h2>
//                   Your payment completed successfully, We will contact to you
//                   soon.
//                 </h2>
//                 <h3>
//                   While we get back to you, please download our white paper of{" "}
//                   <br />
//                   &quot;best-practices for building a disruptive app startup&quot;.
//                 </h3>
//                 <Link
//                   class="btn btn-download-script"
//                   href={`${BaseAPI}/pages/download/How To Not Get Screwed By App Developers`}
//                 >
//                   Download white paper
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="quoue_box_full_sec">
//         <div className="whatsapp-call">
//           <a
//             href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
//             target="_blank"
//           >
//             <Image
//               src="/img/images/whatsapp.png"
//               alt="whatsapp-icon"
//               height={50}
//               width={50}
//             />
//           </a>
//         </div>
//         <div className="quote_pop_plus quote_pop_in" onClick={toggleModal}>
//           <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Page;

"use client";

import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {

      console.log("Hi")
      window.gtag("event", "conversion", {
        send_to: "AW-946594877/U5sJCLX0_9kBEL3Ir8MD",
      });
    }
  }, []);

  return (
    <>
      {/* <Head>
        <title>Thank You</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head> */}
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center">
          <div className="text-green-500 text-6xl mb-4">
            <i className="fas fa-check-circle"></i>
          </div>
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Your payment was successful. We appreciate your business!
          </p>
          <Link
            href="/"
            className="bg-green-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-600"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;

