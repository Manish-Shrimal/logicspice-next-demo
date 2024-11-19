"use client";
import React, { useRef, useEffect, useState } from "react";

const ClientSay = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    // <section className="client-say">
    //   <div className="container">
    //     <div className="headings">
    //       <h2>WHAT OUR CLIENTS SAY</h2>
    //     </div>
    //     <div className="row">
    //       <div className="col-md-6" ref={ref}>
    //         {inView && (
    //           <iframe
    //             id="you_iframe"
    //             className="embed-responsive-item"
    //             src="https://www.youtube.com/embed/DwZRqMYOmZo?rel=0"
    //             allow="encrypted-media"
    //             allowFullScreen
    //             title="Youtube-Video"
    //             height="300"
    //             width="100%"
    //             frameBorder="0"
    //           ></iframe>
    //         )}
    //       </div>
    //       <div className="col-md-6">
    //         <p>
    //           Logicspice offers <span>Cost Effective</span> Solution and the{" "}
    //           <span>quality</span> of their work is very good. Logicspice has
    //           very <span>good reviews</span> and 100&apos;s of different
    //           projects in different areas and work with detailed feedback about
    //           our request with a very <span>standardized process</span>.
    //         </p>
    //         <p>
    //           Very friendly environment and I highly recommend Logicspice for
    //           Android &amp; iPhone app development...
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="client-say">
      <div className="container">
        <div className="headings">
          <h2>WHAT OUR CLIENTS SAY</h2>
        </div>
        <div className="row">
          <div className="col-md-6" ref={ref}>
            {inView && (
              <iframe
                id="you_iframe"
                className="embed-responsive-item"
                src="https://www.youtube-nocookie.com/embed/DwZRqMYOmZo?rel=0" // Privacy-enhanced mode
                allow="encrypted-media"
                allowFullScreen
                title="YouTube Video"
                height="300"
                width="100%"
                frameBorder="0"
              ></iframe>
            )}
          </div>
          <div className="col-md-6">
            <p>
              Logicspice offers <span>Cost Effective</span> solutions, and the{" "}
              <span>quality</span> of their work is very good. Logicspice has
              excellent <span>reviews</span> with hundreds of projects across
              various domains, providing detailed feedback with a{" "}
              <span>standardized process</span>.
            </p>
            <p>
              The team is very friendly, and I highly recommend Logicspice for
              Android &amp; iPhone app development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSay;
