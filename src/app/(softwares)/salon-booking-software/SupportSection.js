import Image from "next/image";
import React from "react";

const SupportSection = () => {
  return (
    <section className="whatsupport_section" id="support">
      <div className="container">
        <h4 className="title_main">
          What <span>support</span> you will get?
        </h4>
        <div className="supportsetting">
          <ul>
            <li data-aos="fade">
              <div className="supportsetting_icn">
                <Image
                  unoptimized={true}
                  width={60}
                  height={60}
                  src="/img/jobboard/month_half_icon.png"
                  alt="manager_icn"
                />
              </div>
              <div className="supportsettingtext">Free Support</div>
            </li>
            <li data-aos="fade">
              <div className="supportsetting_icn">
                <Image
                  unoptimized={true}
                  width={60}
                  height={60}
                  src="/img/jobboard/free_remove_icon.png"
                  alt="manager_icn"
                />
              </div>
              <div className="supportsettingtext">Free Brand Removal</div>
            </li>
            <li data-aos="fade">
              <div className="supportsetting_icn">
                <Image
                  unoptimized={true}
                  width={60}
                  height={60}
                  src="/img/jobboard/free_instal.png"
                  alt="manager_icn"
                />
              </div>
              <div className="supportsettingtext">Free Installation</div>
            </li>
            <li data-aos="fade">
              <div className="supportsetting_icn">
                <Image
                  unoptimized={true}
                  width={50}
                  height={50}
                  src="/img/jobboard/access_secure_code_icon.png"
                  alt="manager_icn"
                />
              </div>
              <div className="supportsettingtext">Easily scalable</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
