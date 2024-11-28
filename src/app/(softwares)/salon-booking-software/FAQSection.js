import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const panelStyle = {
    marginBottom: "10px",
    // border: '1px solid #ddd',
    borderBottom: "1px solid #ddd",
  };

  const headingStyle = {
    // backgroundColor: '#f7f7f7',
    padding: "20px 0",
  };

  const titleStyle = {
    textDecoration: "none",
    // fontWeight: "bold",
    color: "#333",
    display: "block",
    fontSize: "18px",
  };

  const collapseStyle = {
    display: "none",
    transition: "all 0.3s ease",
  };

  const showStyle = {
    display: "block",
  };

  const bodyStyle = {
    padding: "7px",
    // borderTop: '1px solid #ddd',
  };

  console.log("Active")
  return (
    <section className="ecommerce_faq_section JobBoardFaqSection">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ecommerce__Quick_FAQ">
            <h4 className="title_main">Quick FAQ</h4>

            <div id="accordion">
              <div style={panelStyle} data-aos="fade-up">
                <div style={headingStyle}>
                  <a
                    href="#collapse1"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleAccordion(0);
                    }}
                    style={titleStyle}
                  >
                    <span>01. </span> How does this salon booking software help
                    me manage appointments?
                  </a>
                </div>
                <div style={activeIndex === 0 ? showStyle : collapseStyle}>
                  <div style={bodyStyle}>
                    <p>
                      This software makes scheduling easy. Clients can book,
                      change, or cancel appointments online anytime. It also
                      sends reminders, so you don&apos;t have to worry about
                      missed appointments. Plus, you can easily manage
                      everything from one dashboard.
                    </p>
                  </div>
                </div>
              </div>

              <div style={panelStyle} data-aos="fade-up">
                <div style={headingStyle}>
                  <a
                    href="#collapse2"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleAccordion(1);
                    }}
                    style={titleStyle}
                  >
                    <span>02. </span> Is this software good for salons with
                    multiple locations?
                  </a>
                </div>
                <div style={activeIndex === 1 ? showStyle : collapseStyle}>
                  <div style={bodyStyle}>
                    <p>
                      Absolutely! You can manage appointments for one or many
                      locations, keeping everything organized no matter how many
                      branches you have.
                    </p>
                  </div>
                </div>
              </div>

              <div style={panelStyle} data-aos="fade-up">
                <div style={headingStyle}>
                  <a
                    href="#collapse3"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleAccordion(2);
                    }}
                    style={titleStyle}
                  >
                    <span>03. </span> Is this software secure?
                  </a>
                </div>
                <div style={activeIndex === 2 ? showStyle : collapseStyle}>
                  <div style={bodyStyle}>
                    <p>
                      Yes, we prioritize data security with industry-standard
                      encryption, so all client and booking data is safe. Only
                      authorized staff can access sensitive information,
                      ensuring client privacy.
                    </p>
                  </div>
                </div>
              </div>

              <div style={panelStyle} data-aos="fade-up">
                <div style={headingStyle}>
                  <a
                    href="#collapse4"
                    style={titleStyle}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleAccordion(3);
                    }}
                  >
                    <span>04. </span> Can I customize the software to match my
                    salon&apos;s brand?
                  </a>
                </div>
                <div style={activeIndex === 3 ? showStyle : collapseStyle}>
                  <div style={bodyStyle}>
                    <p>
                      Yes! You can customize the software with your salon&apos;s
                      logo, colors, and branding to make it feel like part of
                      your business.
                    </p>
                  </div>
                </div>
              </div>

              <div style={panelStyle} data-aos="fade-up">
                <div style={headingStyle}>
                  <a
                    href="#collapse6"
                    style={titleStyle}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleAccordion(4);
                    }}
                  >
                    <span>05. </span> What if a client needs to cancel or
                    reschedule?
                  </a>
                </div>
                <div style={activeIndex === 4 ? showStyle : collapseStyle}>
                  <div style={bodyStyle}>
                    <p>
                      Clients can easily cancel or reschedule their appointments
                      online. You&apos;ll get real-time updates, and the system
                      will automatically adjust availability.
                    </p>
                  </div>
                </div>
              </div>
              <div style={panelStyle} data-aos="fade-up">
                <div style={headingStyle}>
                  <a
                    href="#collapse7"
                    style={titleStyle}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleAccordion(5);
                    }}
                  >
                    <span>06. </span> Does the software remind clients about
                    their appointments?
                  </a>
                </div>
                <div style={activeIndex === 5 ? showStyle : collapseStyle}>
                  <div style={bodyStyle}>
                    <p>
                      Yes, clients receive automatic reminders by email or SMS,
                      so they won&apos;t forget their appointment with you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
