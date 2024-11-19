import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const IndustriesWeServe = () => {
  return (
    <section className="ind-we-serv">
        <div class="IndustriesIcon1">
          <Image
            width={100}
            height={100}
            src="/img/home/industries/icon1.png"
            alt=""
          />
        </div>
        <div class="IndustriesIcon2">
          <Image
            width={100}
            height={100}
            src="/img/home/industries/icon2.png"
            alt=""
          />
        </div>
        <div class="IndustriesIcon3">
          <Image
            width={100}
            height={100}
            src="/img/home/industries/icon3.png"
            alt=""
          />
        </div>
        <div class="IndustriesIcon4">
          <Image
            width={100}
            height={100}
            src="/img/home/industries/icon4.png"
            alt=""
          />
        </div>
        <div class="IndustriesIcon5">
          <Image
            width={100}
            height={100}
            src="/img/home/industries/icon5.png"
            alt=""
          />
        </div>
        <div class="IndustriesIcon6">
          <Image
            width={100}
            height={100}
            src="/img/home/industries/icon6.png"
            alt=""
          />
        </div>
        <div class="IndustriesIcon7">
          <Image
            width={100}
            height={100}
            src="/img/home/industries/icon7.png"
            alt=""
          />
        </div>
        <div class="IndustriesIcon8">
          <Image
            width={100}
            height={100}
            src="/img/home/industries/icon8.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="headings headings_white">
            <h2>INDUSTRIES WE HAVE SERVED</h2>
            <p>
              With our expert and dedicated team, we at Logicspice can transform
              your business using our latest technological approach, skills, and
              dedication to meet your needs. We serve all kind of industry like
              Real Estate, Online Booking, Online Education and Health Care etc.
            </p>
          </div>
          <ul>
            <li
              data-aos="fade-up"
              className="IndustriesBx1 aos-init aos-animate"
            >
              <Link href="/industries/Hotel-apps" className="">
                <span>
                  <i className="ind_icons ind_icon1"></i>
                </span>
                <strong>Travel &amp; Hospitality</strong>
              </Link>{" "}
            </li>
            <li
              data-aos="fade-up"
              className="IndustriesBx2 aos-init aos-animate"
            >
              <Link href="/industries/health-care-apps" className="">
                <span>
                  <i className="ind_icons ind_icon2"></i>
                </span>
                <strong>Healthcare</strong>
              </Link>{" "}
            </li>
            <li
              data-aos="fade-up"
              className="IndustriesBx3 aos-init aos-animate"
            >
              <Link
                href="/industries/commercial-and-residential-apps"
                className=""
              >
                <span>
                  <i className="ind_icons ind_icon3"></i>
                </span>
                <strong>Real Estate</strong>
              </Link>{" "}
            </li>
            <li
              data-aos="fade-up"
              className="IndustriesBx4 aos-init aos-animate"
            >
              <Link href="/industries/transportation-apps" className="">
                <span>
                  <i className="ind_icons ind_icon4"></i>
                </span>
                <strong>Logistics &amp; Transportation</strong>
              </Link>{" "}
            </li>
            <li
              data-aos="fade-up"
              className="IndustriesBx5 aos-init aos-animate"
            >
              <Link
                href="/industries/professional-consultant-mobile-app-development"
                className=""
              >
                <span>
                  <i className="ind_icons ind_icon5"></i>
                </span>
                <strong>Consultants</strong>
              </Link>{" "}
            </li>

            <li
              data-aos="fade-up"
              className="IndustriesBx6 aos-init aos-animate"
            >
              <Link
                href="/industries/service-contractors-and-cleaning-companies-apps"
                className=""
              >
                <span>
                  <i className="ind_icons ind_icon6"></i>
                </span>
                <strong>
                  Service
                  <br /> Contractors
                </strong>
              </Link>{" "}
            </li>
            <li
              data-aos="fade-up"
              className="IndustriesBx7 aos-init aos-animate"
            >
              <Link href="/industries/schools-and-education-apps" className="">
                <span>
                  <i className="ind_icons ind_icon7"></i>
                </span>
                <strong>
                  Schools
                  <br /> &amp; Education
                </strong>
              </Link>{" "}
            </li>

            <li
              data-aos="fade-up"
              className="IndustriesBx8 aos-init aos-animate"
            >
              <Link
                href="/industries/accountants-and-financial-services-real-estate-apps"
                className=""
              >
                <span>
                  <i className="ind_icons ind_icon8"></i>
                </span>
                <strong>
                  Finance <br />
                  &amp; Insurance
                </strong>
              </Link>{" "}
            </li>

            <li
              data-aos="fade-up"
              className="IndustriesBx9 aos-init aos-animate"
            >
              <Link
                href="/industries/ideas-and-business-concepts-apps"
                className=""
              >
                <span>
                  <i className="ind_icons ind_icon9"></i>
                </span>
                <strong>
                  Ideas and <br />
                  Business Concepts
                </strong>
              </Link>{" "}
            </li>
            <li
              data-aos="fade-up"
              className="IndustriesBx10 aos-init aos-animate"
            >
              <Link
                href="/industries/government-and-municipal-and-other-administrative-operations-apps"
                className=""
              >
                <span>
                  <i className="ind_icons ind_icon10"></i>
                </span>
                <strong>
                  Government <br />
                  Operations
                </strong>
              </Link>{" "}
            </li>
          </ul>
          <div className="product-view">
            <Link href="/industries" className="btn btn-primary">
              View All Industries
            </Link>
          </div>
        </div>
      </section>
  )
}

export default IndustriesWeServe
