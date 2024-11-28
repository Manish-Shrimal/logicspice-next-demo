import Image from "next/image";
import React, { useState } from "react";

const TabSection = () => {
  const [sellerTab, setSellerTab] = useState(true);
  const [buyerTab, setBuyerTab] = useState(false);
  const [adminTab, setAdminTab] = useState(false);

  const handleSellerTab = () => {
    setSellerTab(true);
    setBuyerTab(false);
    setAdminTab(false);
  };
  const handleBuyerTab = () => {
    setSellerTab(false);
    setBuyerTab(true);
    setAdminTab(false);
  };
  const handleAdminTab = () => {
    setSellerTab(false);
    setBuyerTab(false);
    setAdminTab(true);
  };
  return (
    <section className="job_portal_area">
      <div className="container">
        <div className="job_or_title">
          <h2 className="taxt_tt_job">Salon Booking Software Features</h2>
        </div>
        <div className="tatxt_txt_job">
          With our Salon Appointment Booking Software, clients can quickly and
          easily book appointments online, while staff can manage schedules
          without the usual manual effort. It&apos;s a complete solution that
          simplifies your day-to-day operations, improving customer experience.
          Our software allows for easy booking, more flexible conditions to
          rebook, and to stay with your salon. With automated notifications,
          clients stay engaged and are less likely to miss appointments.
          It&apos;s a very user-friendly platform, customized to the look of
          your salon, and overall a great experience that will keep your clients
          wanting to come back for more.
        </div>

        <div className="tab_bbx_job">
          <div className="tab_bbx_top_job">
            <ul className="JobBoardNewtab">
              <li
                id="tab1_li"
                className={`jobseeker_app_job ddlj ${
                  sellerTab ? "active" : ""
                }`}
                onClick={() => handleSellerTab()}
              >
                <a>Customer Panel (Clients) </a>
              </li>
              <li
                id="tab2_li"
                className={`emplyer_app_job ddlj ${buyerTab ? "active" : ""}`}
                onClick={() => handleBuyerTab()}
              >
                <a>Staff Panel (Salon Professionals) </a>
              </li>
              <li
                id="tab3_li"
                className={`admin_app_job ddlj ${adminTab ? "active" : ""}`}
                onClick={() => handleAdminTab()}
              >
                <a>Admin Panel</a>
              </li>
            </ul>
          </div>

          <div className="tab_contant">
            {sellerTab && (
              <>
                <div className="costomer_tab rj JobseekerTab" id="tab1">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="costomer_tab_left costomer_tab_leftright">
                        <ul>
                          <li>
                            <i className="JobBoardImg">
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                className="lazy"
                                src="/img/jobboard/ragister-icon.png"
                                alt="Jobseeker App Feature"
                              />
                            </i>
                            <span>
                              Profile Management
                              <div className="product-idea">
                                <p>
                                  Clients can create and manage their profiles,
                                  including personal preferences, booking
                                  history, and payment information, making the
                                  next booking faster and more personalized.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i className="JobBoardImg">
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                className="lazy"
                                src="/img/jobboard/manage_alert.png"
                                alt="Jobseeker App Feature"
                              />
                            </i>
                            <span>
                              Easy Booking
                              <div className="product-idea">
                                <p>
                                  Clients can easily book, reschedule, or cancel
                                  appointments in just a few clicks. Whether
                                  it&apos;s a haircut, facial, or massage,
                                  booking is quick and hassle-free.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i className="JobBoardImg">
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                className="lazy"
                                src="/img/jobboard/manage_profile.png"
                                alt="Jobseeker App Feature"
                              />
                            </i>
                            <span>
                              Real-time Availability
                              <div className="product-idea">
                                <p>
                                  Clients can view the live availability of
                                  their favorite salon professionals, ensuring
                                  they get the time slot that works best for
                                  them.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i className="JobBoardImg">
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                className="lazy"
                                src="/img/jobboard/save_fav.png"
                                alt="Jobseeker App Feature"
                              />
                            </i>
                            <span>
                              Service Menu
                              <div className="product-idea">
                                <p>
                                  Clients can browse a comprehensive list of
                                  salon services and select their preferred
                                  treatments, ensuring clarity about what
                                  they’re booking.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i className="JobBoardImg">
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                className="lazy"
                                src="/img/jobboard/apply_job.png"
                                alt="Jobseeker App Feature"
                              />
                            </i>
                            <span>
                              Appointment History
                              <div className="product-idea">
                                <p>
                                  Clients can access their past appointments,
                                  track their visit history, and rebook their
                                  favorite services with a single click.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i className="JobBoardImg">
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                className="lazy"
                                src="/img/jobboard/search_job.png"
                                alt="Jobseeker App Feature"
                              />
                            </i>
                            <span>
                              Notifications & Reminders
                              <div className="product-idea">
                                <p>
                                  Automatic reminders are sent via SMS or email
                                  to clients about upcoming appointments,
                                  reducing no-shows and keeping everyone on
                                  schedule.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i className="JobBoardImg">
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                className="lazy"
                                src="/img/jobboard/applied_job.png"
                                alt="Jobseeker App Feature"
                              />
                            </i>
                            <span>
                              Multi-location Booking
                              <div className="product-idea">
                                <p>
                                  For salons with multiple locations, clients
                                  can book appointments at any branch, making it
                                  easy to manage services no matter where they
                                  are.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i className="JobBoardImg">
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                className="lazy"
                                src="/img/jobboard/share_job.png"
                                alt="Jobseeker App Feature"
                              />
                            </i>
                            <span>
                              Guest Mode
                              <div className="product-idea">
                                <p>
                                  Clients can book an appointment without
                                  creating an account, making the process even
                                  more convenient for one-time users.
                                </p>
                              </div>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {buyerTab && (
              <>
                <div className="costomer_tab rj EmployerTab" id="tab2">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="costomer_tab_left">
                        <ul>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/ragister-icon.png"
                              />
                            </i>
                            <span>
                              Appointment Management
                              <div className="product-idea">
                                <p>
                                  Salon staff can easily manage bookings, view
                                  customer details, reschedule appointments, and
                                  mark services as completed – all from one
                                  user-friendly dashboard.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i className="JobBoardImg">
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                className="lazy"
                                src="/img/jobboard/membership_pur.png"
                                alt=""
                              />
                            </i>
                            <span>
                              Service Management
                              <div className="product-idea">
                                <p>
                                  Salon professionals can manage their service
                                  offerings, including updating prices, and
                                  descriptions, and adding or removing services
                                  from the menu.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i className="JobBoardImg">
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                className="lazy"
                                src="/img/jobboard/fov_cant.png"
                                alt=""
                              />
                            </i>
                            <span>
                              Real-time Notifications
                              <div className="product-idea">
                                <p>
                                  Staff receives instant updates for new
                                  bookings, cancellations, or changes to
                                  existing appointments, ensuring they’re always
                                  prepared for the day.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i className="JobBoardImg">
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                className="lazy"
                                src="/img/jobboard/create-project.png"
                                alt=""
                              />
                            </i>
                            <span>
                              Availability Management
                              <div className="product-idea">
                                <p>
                                  Staff can update their available time slots
                                  and set personal time off or block off certain
                                  hours for breaks or meetings.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i className="JobBoardImg">
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                className="lazy"
                                src="/img/jobboard/manage_job.png"
                                alt=""
                              />
                            </i>
                            <span>
                              Client History
                              <div className="product-idea">
                                <p>
                                  Salon professionals can view past services,
                                  client preferences, and booking history to
                                  offer more personalized services and
                                  recommendations.
                                </p>
                              </div>
                            </span>
                          </li>

                          <li>
                            <i className="JobBoardImg">
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt=""
                                className="lazy"
                                src="/img/jobboard/manage_profile.png"
                              />
                            </i>
                            <span>
                              Daily Overview
                              <div className="product-idea">
                                <p>
                                  The dashboard provides a comprehensive view of
                                  all appointments scheduled for the day, with
                                  options to filter by time, client, or service.
                                </p>
                              </div>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {adminTab && (
              <>
                <div className="costomer_tab rj AdminTab" id="tab3">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="costomer_tab_left costomer_tab_leftright2">
                        <ul>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/secure_login.png"
                              />
                            </i>
                            <span>
                              Secure Login
                              <div className="product-idea">
                                <p>
                                  Admins can securely log in to manage the
                                  entire salon operation, ensuring that only
                                  authorized users have access.
                                </p>
                              </div>
                            </span>
                          </li>

                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_user.png"
                              />
                            </i>
                            <span>
                              Manage Users
                              <div className="product-idea">
                                <p>
                                  Admins can create, edit, or delete accounts
                                  for clients, salon professionals, and other
                                  staff members. They can also manage roles and
                                  permissions to control access.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_gig.png"
                              />
                            </i>
                            <span>
                              Staff Management
                              <div className="product-idea">
                                <p>
                                  Admins can add, edit, or remove staff
                                  profiles, set working hours, and manage shift
                                  schedules to ensure the salon is always
                                  properly staffed.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_gig_order.png"
                              />
                            </i>
                            <span>
                              Appointment Tracking
                              <div className="product-idea">
                                <p>
                                  Admins can oversee all appointments,
                                  reschedule when necessary, and monitor
                                  real-time updates from every department to
                                  ensure smooth operations.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_service.png"
                              />
                            </i>
                            <span>
                              Reports & Analytics
                              <div className="product-idea">
                                <p>
                                  Admins can view detailed reports on
                                  appointment statistics, revenue, client
                                  retention, and more, helping make informed
                                  decisions for the business.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_category.png"
                              />
                            </i>
                            <span>
                              Customizable Branding
                              <div className="product-idea">
                                <p>
                                  Admins can customize the software interface to
                                  match their salon’s brand with logos, color
                                  schemes, and branding elements to provide a
                                  professional and cohesive experience.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_skill.png"
                              />
                            </i>
                            <span>
                              Multi-location Support
                              <div className="product-idea">
                                <p>
                                  Admins who operate salons in multiple
                                  locations can manage all their branches from a
                                  single platform, overseeing appointments,
                                  staff, and schedules across locations.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_cat.png"
                              />
                            </i>
                            <span>
                              Blog Management
                              <div className="product-idea">
                                <p>
                                  Admins can create, edit, and manage blog
                                  posts, promotional offers, and discounts
                                  directly on the platform, making it easy to
                                  engage with clients and promote services
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_countries.png"
                              />
                            </i>
                            <span>
                              Payment Integration
                              <div className="product-idea">
                                <p>
                                  The system allows admins to set up secure
                                  online payment gateways to collect payments
                                  and process invoices for bookings directly
                                  through the software.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_testimonial.png"
                              />
                            </i>
                            <span>
                              Configuration
                              <div className="product-idea">
                                <p>
                                  Admin can update personal details, contact
                                  information, social media links, and configure
                                  appointment settings.
                                </p>
                              </div>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabSection;
