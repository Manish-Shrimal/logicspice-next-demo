import React, { useState } from "react";
import Image from "next/image";

const Whylogicspice = ({ open }) => {
  const [showInfo, setShowInfo] = useState(open);
  const toggleInfo = () => setShowInfo(!showInfo);

  return (
    <>
      <div className={open ? "block" : "none"}>
        {open && (
          <>
            <div class="small_bbx_job_new">
              <div class="row">
                <div class="col-sm-4 col-md-4">
                  <div class="thumbnail-new thumbnail-bx1">
                    <div class="caption">
                      <div class="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/coding.png"
                          alt="img"
                        />
                      </div>
                      <h3>Optimized Code with proper commenting</h3>
                      <p>
                        Our script code is fully optimized, which results in
                        quick load time and, Code is properly commented for each
                        function and module so anyone can easily update the code
                        in future.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-md-4">
                  <div class="thumbnail-new thumbnail-bx2">
                    <div class="caption">
                      <div class="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/data-complexity.png"
                          alt="img"
                        />
                      </div>
                      <h3>Strong Framework of PHP & Well managed database</h3>
                      <p>
                        We used popular and strong Framework of PHP with latest
                        versions to keep the code up to date and prevalent for
                        longer duration. Our experienced team managed all the
                        database tables with complete flexibility for extension
                        versions in future.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-md-4">
                  <div class="thumbnail-new thumbnail-bx3">
                    <div class="caption">
                      <div class="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/coordinate.png"
                          alt="img"
                        />
                      </div>
                      <h3>
                        Quick Response and
                        <br /> Coordination
                      </h3>
                      <p>
                        Customers will always get a quick response from our
                        technical support team, with the best possible solution.
                        Expect our response within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4 col-md-4">
                  <div class="thumbnail-new thumbnail-bx4">
                    <div class="caption">
                      <div class="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/customize.png"
                          alt="img"
                        />
                      </div>
                      <h3>Customization at affordable price</h3>
                      <p>
                        We provide customization of our scripts, to meet
                        customer expectations with best affordable price and
                        minimum turn-around time.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-md-4">
                  <div class="thumbnail-new thumbnail-bx5">
                    <div class="caption">
                      <div class="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/smartphone-icon.png"
                          alt="img"
                        />
                      </div>
                      <h3>Mobile Friendly Script</h3>
                      <p>
                        Our Script is mobile friendly so, users can easily
                        access all the features through mobile devices that
                        gives improved user experience with portability.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-md-4">
                  <div class="thumbnail-new thumbnail-bx6">
                    <div class="caption">
                      <div class="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/data.png"
                          alt="img"
                        />
                      </div>
                      <h3>Dedicated Support Team</h3>
                      <p>
                        You will get the dedicated support team while purchasing
                        the script or product. Technical support team will
                        resolve your query quickly in a given time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4 col-md-4">
                  <div class="thumbnail-new thumbnail-box thumbnail-bx7">
                    <div class="caption">
                      <div class="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/web-icon.png"
                          alt="img"
                        />
                      </div>
                      <h3>Global company with agile development approach</h3>
                      <p>
                        Our customers are almost equally spread around the globe
                        and we provide international standard solutions for USA,
                        UK, Europe, Australia, UAE and other countries. We
                        follow a transparent work process and divide all the
                        development processes into small phases. We can use the
                        latest technology and standards that assure the smooth
                        development and execution.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-md-4">
                  <div class="thumbnail-new thumbnail-box thumbnail-bx8">
                    <div class="caption">
                      <div class="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/encrypted.png"
                          alt="img"
                        />
                      </div>
                      <h3>
                        Customer information and application level security
                      </h3>
                      <p>
                        Security of customer data and application is a major
                        aspect of any of the solutions, Logicspice provides. Our
                        programming is robust and secure that assures password
                        encryption.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-md-4">
                  <div class="thumbnail-new thumbnail-box thumbnail-bx9">
                    <div class="caption">
                      <div class="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/history-icon.png"
                          alt="img"
                        />
                      </div>
                      <h3>Experienced workforce with 3000+ project history</h3>
                      <p>
                        We are a team of experienced web and mobile app
                        developers, having expertise in handling complex tasks
                        since the past 16+ years. We delivered lots of projects
                        with 100% client satisfaction on different platforms
                        with high levels of standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4 col-md-4">
                  <div class="thumbnail-new productthumbnail-box thumbnail-bx10">
                    <div class="caption">
                      <div class="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/seouser-friendly.png"
                          alt="img"
                        />
                      </div>
                      <h3>Seo Friendly Development</h3>
                      <p>
                        Our developed websites are SEO optimized so it can rank
                        better on Google.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4 col-md-4">
                  <div class="thumbnail-new productthumbnail-box thumbnail-bx11">
                    <div class="caption">
                      <div class="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/one-stop-solution.png"
                          alt="img"
                        />
                      </div>
                      <h3>One Stop Solution</h3>
                      <p>
                        We offer complete design & development solutions along
                        with the business strategy, all under one roof.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4 col-md-4">
                  <div class="thumbnail-new productthumbnail-box thumbnail-bx12">
                    <div class="caption">
                      <div class="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/third-party-api.png"
                          alt="img"
                        />
                      </div>
                      <h3>Integration With Third Party Api</h3>
                      <p>
                        We integrate your website with third party API on our
                        end to serve you better.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4 col-md-4">
                  <div class="thumbnail-new productthumbnail-box thumbnail-bx13">
                    <div class="caption">
                      <div class="best-partner-img-bx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/jobboard/cost-effective.png"
                          alt="img"
                        />
                      </div>
                      <h3>Cost Effective</h3>
                      <p>
                        Powerful technology back-end with basic ready-made
                        modules save time and hence overall project cost for
                        your script gets reduced.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Whylogicspice;
