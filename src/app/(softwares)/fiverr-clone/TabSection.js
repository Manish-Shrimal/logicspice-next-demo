import Image from "next/image";
import React, { useState } from "react";

const TabSection = () => {
  const [sellerTab, setSellerTab] = useState(true);
  const [buyerTab, setBuyerTab] = useState(false);
  const [adminTab, setAdminTab] = useState(false);
  const [studentTab, setStudentTab] = useState(true);
  const [instructorTab, setInstructorTab] = useState(false);
  const [adminpanelTab, setAdminpanelTab] = useState(false);

  const handleStudentTab = () => {
    setStudentTab(true);
    setInstructorTab(false);
    setAdminpanelTab(false);
  };
  const handleInstructorTab = () => {
    setStudentTab(false);
    setInstructorTab(true);
    setAdminpanelTab(false);
  };
  const handleAdminpanelTab = () => {
    setStudentTab(false);
    setInstructorTab(false);
    setAdminpanelTab(true);
  };

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
          <h2 className="taxt_tt_job">Fiverr Clone Features</h2>
        </div>
        <div className="tatxt_txt_job text-center">
          The <b>Fiverr Clone</b> enables people to act as buyers or sellers of
          job services from the same account. Being a seller, they can create
          gigs(jobs) over the site and being buyers they can search for gigs
          present over the site through different categories or can do keyword
          search for them.
          <br />
          With the help of our readymade marketplace script, the buyer can go
          through the list of gigs that they have searched for and see the
          details of selected ones. They can add the gigs they like to a cart
          and purchase them by making payment through a payment gateway.
        </div>
        <div className="tab_bbx_job">
          <div className="tab_bbx_top_job">
            <ul className="fiverrClone">
              <li
                id="tab1_li"
                className={`jobseeker_app_job ddlj ${
                  sellerTab ? "active" : ""
                }`}
                onClick={() => handleSellerTab()}
              >
                <a>Seller App Features</a>
              </li>
              <li
                id="tab2_li"
                className={`emplyer_app_job ddlj ${buyerTab ? "active" : ""}`}
                onClick={() => handleBuyerTab()}
              >
                <a>Buyer App Features</a>
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
                    <div className="col-lg-4 col-md-3">
                      <div className="costomer_tab_right costomer_tab_rightleft">
                        <Image
                          unoptimized={true}
                          width={300}
                          height={100}
                          src="/img/fiverrclone/gigger_saler.png"
                          alt="Seller App Features"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-9">
                      <div className="costomer_tab_left costomer_tab_leftright">
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
                                  Seller can log in securely using Facebook,
                                  Gmail or Email
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
                                src="/img/jobboard/add_gig.png"
                              />
                            </i>
                            <span>
                              Create New Gig & Post Gig
                              <div className="product-idea">
                                <p>
                                  Seller can post the gigs by creating new gig
                                  and adding Gig Title, Category, SubCategory &
                                  Tags.
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
                              Manage Gigs
                              <div className="product-idea">
                                <p>
                                  Seller can view list of Gigs & can
                                  manage(view/add/edit/delete) Gigs. Seller can
                                  create gig by adding Gig Title, Category,
                                  SubCategory & Tags.
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
                                src="/img/jobboard/admin_dash.png"
                              />
                            </i>
                            <span>
                              Seller Dashboard
                              <div className="product-idea">
                                <p>
                                  Seller can view the dashboard with the total
                                  number of counts & Statistics.
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
                                src="/img/jobboard/gig_gallery.png"
                              />
                            </i>
                            <span>
                              Manage Buyer Request
                              <div className="product-idea">
                                <p>
                                  Seller can view the list of Active Request &
                                  Offers sent by Buyers & can manage Active
                                  Request & Offers.
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
                                src="/img/jobboard/view_public.png"
                              />
                            </i>
                            <span>
                              Preview Public Mode
                              <div className="product-idea">
                                <p>
                                  Seller can view the public view of their
                                  profile after making updates in profile with
                                  ratings & reviews.
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
                                src="/img/jobboard/reviews_ratings.png"
                              />
                            </i>
                            <span>
                              View Reviews & Ratings
                              <div className="product-idea">
                                <p>
                                  Seller can view the reviews & rating Buyer has
                                  received on the portal.
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
                                src="/img/jobboard/manage-notifi.png"
                              />
                            </i>
                            <span>
                              View Notifications
                              <div className="product-idea">
                                <p>
                                  Seller can get updates through the
                                  notifications.
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
                                src="/img/jobboard/manage_profile.png"
                              />
                            </i>
                            <span>
                              Manage Profile
                              <div className="product-idea">
                                <p>
                                  Seller can view their profile & can change
                                  password & PayPal email address.
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
                                src="/img/jobboard/contact.png"
                              />
                            </i>
                            <span>
                              Buyers Contact
                              <div className="product-idea">
                                <p>
                                  Seller can find the contact of Buyer using
                                  this portal.
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
                                src="/img/jobboard/manage_selling_order.png"
                              />
                            </i>
                            <span>
                              Manage Gig Order
                              <div className="product-idea">
                                <p>
                                  Seller can receive the order for posted gig &
                                  Seller can manage(add/edit/delete) gigs.
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
                                src="/img/jobboard/view_order.png"
                              />
                            </i>
                            <span>
                              Get Payment
                              <div className="product-idea">
                                <p>
                                  Seller can receive the payment for the gig &
                                  can keep track of the transaction history.
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
                    <div className="col-lg-4 col-md-3">
                      <div className="costomer_tab_right">
                        <Image
                          unoptimized={true}
                          width={300}
                          height={100}
                          src="/img/fiverrclone/buyegigger_buyer.png"
                          alt="Buyer App Features"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-9">
                      <div className="costomer_tab_left">
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
                                  Buyer can login securely using Facebook, Gmail
                                  or Email.
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
                                src="/img/jobboard/browse_gig.png"
                              />
                            </i>
                            <span>
                              Browse Gigs
                              <div className="product-idea">
                                <p>Buyer can browse gigs on the portal.</p>
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
                                src="/img/jobboard/refine_search.png"
                              />
                            </i>
                            <span>
                              Refine Search
                              <div className="product-idea">
                                <p>
                                  Buyer can search for the gig from posted one
                                  by apply filters{" "}
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
                                src="/img/jobboard/manage_profile.png"
                              />
                            </i>
                            <span>
                              Manage Profile
                              <div className="product-idea">
                                <p>
                                  Buyer can view their profile & can change
                                  their password & PayPal e-mail address.
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
                                src="/img/jobboard/select_gig.png"
                              />
                            </i>
                            <span>
                              Select Gig
                              <div className="product-idea">
                                <p>
                                  Buyer can select the best gig from the posted
                                  one as per their requirement.
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
                                src="/img/jobboard/reviews_ratings.png"
                              />
                            </i>
                            <span>
                              View Reviews & Ratings
                              <div className="product-idea">
                                <p>
                                  Buyer can view the reviews & rating Seller has
                                  received on the portal.
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
                                src="/img/jobboard/manage_order.png"
                              />
                            </i>
                            <span>
                              Manage Buying Request
                              <div className="product-idea">
                                <p>
                                  Buyer can view send Buying Request to Sellers
                                  & can manage(add/edit/delete) Buying Request.
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
                                src="/img/jobboard/manage-notifi.png"
                              />
                            </i>
                            <span>
                              View Notifications
                              <div className="product-idea">
                                <p>
                                  Buyer can get updates through the
                                  notifications
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
                                src="/img/jobboard/post_request.png"
                              />
                            </i>
                            <span>
                              Post Request
                              <div className="product-idea">
                                <p>
                                  Buyer can post gig request on the portal with
                                  details Gig Title, Category, SubCategory &
                                  Tags.
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
                                src="/img/jobboard/saved_gig.png"
                              />
                            </i>
                            <span>
                              Manage Saved Gigs
                              <div className="product-idea">
                                <p>
                                  Buyer can save the gigs which found relevant &
                                  Buyer can remove from saved gigs.
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
                                src="/img/jobboard/payment_history.png"
                              />
                            </i>
                            <span>
                              Payment Transaction History
                              <div className="product-idea">
                                <p>
                                  Buyer can make the payment & can view payment
                                  status (Paid/pending).
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
                    <div className="col-lg-4 col-md-3 ">
                      <div className="costomer_tab_right costomer_tab_rightleft2">
                        <Image
                          unoptimized={true}
                          width={300}
                          height={100}
                          src="/img/fiverrclone/gigger_deshboard.png"
                          alt="Admin Panel"
                        />{" "}
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-9">
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
                                <p>Admin can login securely on this portal.</p>
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
                                src="/img/jobboard/admin_dash.png"
                              />
                            </i>
                            <span>
                              Admin Dashboard
                              <div className="product-idea">
                                <p>
                                  Admin can view dashboard which will display
                                  the total number of counts for Seller, Buyer,
                                  Gig orders etc.
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
                                  Admin can view list of Users(Seller/Buyer) &
                                  can manage(add/edit/delete) Users. Admin can
                                  activate/deactivate Users.
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
                              Manage Gigs
                              <div className="product-idea">
                                <p>
                                  Admin can view list of Gigs & can
                                  manage(delete) Gigs. Admin can
                                  activate/deactivate Gigs.
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
                              Manage Gig Orders
                              <div className="product-idea">
                                <p>
                                  Admin can view list of Gig orders & can manage
                                  (view) gig Orders.
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
                              Manage Services
                              <div className="product-idea">
                                <p>
                                  Admin can view list of services & can
                                  manage(view/add/edit/delete) services.
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
                              Manage Categories
                              <div className="product-idea">
                                <p>
                                  Admin can view list of Categories & can
                                  manage(view/add/edit/delete) Categories. Admin
                                  can activate/deactivate Categories.
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
                              Manage Skills
                              <div className="product-idea">
                                <p>
                                  Admin can view list of Skills & can manage
                                  (view/add/edit/delete) skills.
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
                              Manage Sub-categories
                              <div className="product-idea">
                                <p>
                                  Admin can view list of Sub-categories & can
                                  manage(view/add/edit/delete) Sub-categories.
                                  Admin can activate/deactivate Sub-categories.
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
                              Manage Countries
                              <div className="product-idea">
                                <p>
                                  Admin can view list of Countries & can
                                  manage(view/add/edit/delete) Countries. Admin
                                  can activate/deactivate Countries.
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
                              View Reviews & Ratings
                              <div className="product-idea">
                                <p>
                                  Admin can view the list of Reviews & Ratings
                                  Seller & Buyer has received.
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
                                src="/img/jobboard/payment_history.png"
                              />
                            </i>
                            <span>
                              Transaction History
                              <div className="product-idea">
                                <p>
                                  Admin can view payment transactions which will
                                  display the status of the payment
                                  paid/pending.
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
