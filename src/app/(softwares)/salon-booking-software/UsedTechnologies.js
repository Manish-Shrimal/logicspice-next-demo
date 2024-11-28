import Image from "next/image";
import React from "react";

const UsedTechnologies = () => {
  return (
    <section className="used_technology_section" id="technologies">
      <div className="container">
        <h4 className="title_main">
          <span>Used Technologies</span> and Server Requirements
        </h4>
        <div className="used_technology_section_dataa">
          <div className="row">
            <div className="col-sm-6">
              <ul>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/jobboard/tech_reactjs_icon.png"
                      alt="ReactJS Development"
                    />
                  </div>
                  <div className="icntechimg_nm">ReactJS</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/doctorappointment/django-logo-icon.png"
                      alt="Laravel Development"
                    />
                  </div>
                  <div className="icntechimg_nm">Django</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/jobboard/html-5.png"
                      alt="HTML5"
                    />
                  </div>
                  <div className="icntechimg_nm">HTML5</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/jobboard/tech_mysql_icon.png"
                      alt="MySQL"
                    />
                  </div>
                  <div className="icntechimg_nm">MySQL</div>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="list_detail">
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                  Safari 5+, IE 9+
                </li>
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Framework - </b> ReactJs, Django
                </li>
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Language - </b> Javascript, Python
                </li>
                <li className="other aos-init aos-animate" data-aos="fade-up">
                  <b>Design - </b> HTML 5, CSS 3, JavaScript
                </li>
                <li className="other aos-init" data-aos="fade-up">
                  <b>Database - </b> MySQL 5.5+{" "}
                </li>
                <li className="other aos-init" data-aos="fade-up">
                  <b>Server - </b> Apache 2.4+
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsedTechnologies;
