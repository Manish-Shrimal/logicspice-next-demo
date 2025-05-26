// import React from 'react'

// const ScriptUpdatedModal = () => {
//   return (
//     <>

//     </>
//   )
// }

// export default ScriptUpdatedModal

// import React, { useState } from "react";
// import { Modal, Button } from "@mui/material";

// const ScriptUpdatedModal = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <button onClick={() => setOpen(true)} className="open-modal-btn">
//         View Script Update History
//       </button>

//       <Modal open={open} onClose={() => setOpen(false)}>
//         <div
//           className="job_portal_area script-update-bg"
//           style={{
//             maxHeight: "90vh",
//             overflowY: "auto",
//             padding: "20px",
//             backgroundColor: "#fff",
//             margin: "5% auto",
//             width: "80%",
//             borderRadius: "8px",
//             position: "relative",
//           }}
//         >
//           <Button
//             onClick={() => setOpen(false)}
//             variant="contained"
//             color="error"
//             style={{ position: "absolute", top: 10, right: 10, zIndex: 10 }}
//           >
//             Close
//           </Button>
//           <div className="container">
//             <div className="job_or_title">
//               <h2 className="taxt_tt_job">Script Update History</h2>
//               <br />
//               <div className="script-update_title">
//                 <p>
//                   V8.0 - May 5th, 2025 - New feature added and several key improvements to enhance functionality and user experience.
//                 </p>
//                 <ul>
//                   <li><span>Enjoy a <b>unified modern design</b> for the web platform.</span></li>
//                   <li><span>Improved the website performance.</span></li>
//                   <li><span>Utilized the backend API's.</span></li>
//                   <li><span>Minor bug fixes.</span></li>
//                 </ul>

//                 <p>
//                   V7.0 - December 24th, 2024 - New feature added and several key improvements to enhance functionality and user experience.
//                 </p>
//                 <ul>
//                   <li><span>Admin can now efficiently <b>import jobs via CSV or XLSX files</b>, automatically associating them with the selected employer for streamlined management.</span></li>
//                   <li><span>Optimization techniques implemented for faster page load and <b>performance optimization</b> for smoother user experience.</span></li>
//                   <li><span>Admin can now assign specific roles to sub-admins through <b>sub-admin role management</b>, restricting their access to authorized features and sections only.</span></li>
//                   <li><span>The platform&apos;s <b>multilingual support</b> feature is now updated with Greek, German and Ukrainian languages, allowing users to navigate and use the system in their preferred language for a more <b>localized experience</b>.</span></li>
//                 </ul>

//                 <p>V6.0 - September 19th, 2023 - Latest release brings new features, coupled with significant leaps in technologies!</p>
//                 <ul>
//                   <li><span>Enjoy a unified modern design on both web and mobile platforms.</span></li>
//                   <li><span>Upgraded to the latest PHP version, switched to the <strong>Laravel framework</strong>, and revamped it&apos;s frontend with <strong>ReactJS</strong>.</span></li>
//                   <li><span>Stripe Payment Gateway Integration Updated with latest version.</span></li>
//                   <li><span>Latest optimizations have resulted in noticeable performance enhancements.</span></li>
//                 </ul>

//                 <p>V5.0 - April 26th, 2023 - New feature added and minor improvements!</p>
//                 <ul>
//                   <li><span>Employer Membership Plan Feature: Employers will be able to view the jobseeker contact details only if they have the respective membership plan active.</span></li>
//                   <li><span>Optimized job search method.</span></li>
//                   <li><span>Minor bug fixes and UI improvements.</span></li>
//                 </ul>

//                 <p>V4.0 - June 14th, 2022 - New features added and minor improvements!</p>
//                 <ul>
//                   <li><span>Job import using XML format: Admin has the option to import jobs in XML format with third-party URLs and map parameters accordingly.</span></li>
//                   <li><span>Auto assignment of categories: Job category is automatically assigned based on the best-matched keyword.</span></li>
//                   <li><span>Import Jobseekers: Employers can now <strong>import jobseekers</strong> in bulk through an Excel file using a predefined format.</span></li>
//                   <li><span>Announcement marquee: Admin has the ability to manage announcements displayed over the homepage.</span></li>
//                 </ul>

//                 <p>V3.0 – June 29th, 2021 – New features added and design improvements!</p>
//                 <ul>
//                   <li><span>Search Job added to the homepage with a modern layout and CV upload for guests.</span></li>
//                   <li><span>Optimized job search with filters like title, skill, category, and popular searches.</span></li>
//                   <li><span>Upload video CV option where jobseekers can upload their <strong>video CV</strong> and employers can view it.</span></li>
//                   <li><span>A new layout with modern, eye-catching UI components throughout the web version.</span></li>
//                 </ul>

//                 <p>V2.0 – November 03rd, 2020 – New features added and other small improvements!</p>
//                 <ul>
//                   <li><span>Automatic Job Expiry feature.</span></li>
//                   <li><span>Membership plans for jobseekers.</span></li>
//                   <li><span>Performance improvements.</span></li>
//                   <li><span>Minor bug fixes.</span></li>
//                 </ul>

//                 <p>V1.0 – February 13th, 2020 – Major updates and design improvements!</p>
//                 <ul>
//                   <li><span>Modern design applied both for web version and apps.</span></li>
//                   <li><span><strong>Stripe</strong> payment gateway was integrated.</span></li>
//                   <li><span>French language added in frontend.</span></li>
//                   <li><span>Mail notifications for job posting, deletion, and modification.</span></li>
//                   <li><span>Recruiters can email jobseekers directly.</span></li>
//                   <li><span>Admin can configure PayPal payment mode.</span></li>
//                   <li><span>Homepage announcement section with scrolling strip bar.</span></li>
//                   <li><span>Professional certification/participation section in jobseeker profile.</span></li>
//                   <li><span>Recruiters and jobseekers can delete their profile with reason.</span></li>
//                   <li><span>Mail history visible in both Jobseeker and Recruiter panels.</span></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default ScriptUpdatedModal;

import React, { useState } from "react";
import { Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ScriptUpdatedModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="ShowAllUpdateBtn">
        Show all Update
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div
        className="job_portal_area script-update-bg"
          style={{
            maxHeight: "90vh",
            overflowY: "auto",
            padding: "30px 20px",
            backgroundColor: "#fff",
            margin: "2% auto",
            width: "80%",
            maxWidth: "900px",
            borderRadius: "12px",
            position: "relative",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          }}

        >
          <IconButton
            onClick={() => setOpen(false)}
            style={{ position: "absolute", top: 15, right: 15, zIndex: 10 }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          {/* <div className="container">
            <div className="job_or_title">
              <h2 className="taxt_tt_job">Script Update History</h2>

              <div className="script-update_title">
                <p>
                  V8.0 - May 5th, 2025 - New feature added and several key
                  improvements to enhance functionality and user experience.
                </p>
                <ul>
                  <li>
                    <span>
                      Enjoy a <b>unified modern design</b> for the web platform.
                    </span>
                  </li>
                  <li>
                    <span>Improved the website performance.</span>
                  </li>
                  <li>
                    <span>Utilized the backend API's.</span>
                  </li>
                  <li>
                    <span>Minor bug fixes.</span>
                  </li>
                </ul>

                <p>
                  V7.0 - December 24th, 2024 - New feature added and several key
                  improvements to enhance functionality and user experience.
                </p>
                <ul>
                  <li>
                    <span>
                      Admin can now efficiently{" "}
                      <b>import jobs via CSV or XLSX files</b>, automatically
                      associating them with the selected employer for
                      streamlined management.
                    </span>
                  </li>
                  <li>
                    <span>
                      Optimization techniques implemented for faster page load
                      and <b>performance optimization</b> for smoother user
                      experience.
                    </span>
                  </li>
                  <li>
                    <span>
                      Admin can now assign specific roles to sub-admins through{" "}
                      <b>sub-admin role management</b>, restricting their access
                      to authorized features and sections only.
                    </span>
                  </li>
                  <li>
                    <span>
                      The platform&apos;s <b>multilingual support</b> feature is
                      now updated with Greek, German and Ukrainian languages,
                      allowing users to navigate and use the system in their
                      preferred language for a more <b>localized experience</b>.
                    </span>
                  </li>
                </ul>

                <p>
                  V6.0 - September 19th, 2023 - Latest release brings new
                  features, coupled with significant leaps in technologies!
                </p>
                <ul>
                  <li>
                    <span>
                      Enjoy a unified modern design on both web and mobile
                      platforms.
                    </span>
                  </li>
                  <li>
                    <span>
                      Upgraded to the latest PHP version, switched to the{" "}
                      <strong>Laravel framework</strong>, and revamped it&apos;s
                      frontend with <strong>ReactJS</strong>.
                    </span>
                  </li>
                  <li>
                    <span>
                      Stripe Payment Gateway Integration Updated with latest
                      version.
                    </span>
                  </li>
                  <li>
                    <span>
                      Latest optimizations have resulted in noticeable
                      performance enhancements.
                    </span>
                  </li>
                </ul>

                <p>
                  V5.0 - April 26th, 2023 - New feature added and minor
                  improvements!
                </p>
                <ul>
                  <li>
                    <span>
                      Employer Membership Plan Feature: Employers will be able
                      to view the jobseeker contact details only if they have
                      the respective membership plan active.
                    </span>
                  </li>
                  <li>
                    <span>Optimized job search method.</span>
                  </li>
                  <li>
                    <span>Minor bug fixes and UI improvements.</span>
                  </li>
                </ul>

                <p>
                  V4.0 - June 14th, 2022 - New features added and minor
                  improvements!
                </p>
                <ul>
                  <li>
                    <span>
                      Job import using XML format: Admin has the option to
                      import jobs in XML format with third-party URLs and map
                      parameters accordingly.
                    </span>
                  </li>
                  <li>
                    <span>
                      Auto assignment of categories: Job category is
                      automatically assigned based on the best-matched keyword.
                    </span>
                  </li>
                  <li>
                    <span>
                      Import Jobseekers: Employers can now{" "}
                      <strong>import jobseekers</strong> in bulk through an
                      Excel file using a predefined format.
                    </span>
                  </li>
                  <li>
                    <span>
                      Announcement marquee: Admin has the ability to manage
                      announcements displayed over the homepage.
                    </span>
                  </li>
                </ul>

                <p>
                  V3.0 – June 29th, 2021 – New features added and design
                  improvements!
                </p>
                <ul>
                  <li>
                    <span>
                      Search Job added to the homepage with a modern layout and
                      CV upload for guests.
                    </span>
                  </li>
                  <li>
                    <span>
                      Optimized job search with filters like title, skill,
                      category, and popular searches.
                    </span>
                  </li>
                  <li>
                    <span>
                      Upload video CV option where jobseekers can upload their{" "}
                      <strong>video CV</strong> and employers can view it.
                    </span>
                  </li>
                  <li>
                    <span>
                      A new layout with modern, eye-catching UI components
                      throughout the web version.
                    </span>
                  </li>
                </ul>

                <p>
                  V2.0 – November 03rd, 2020 – New features added and other
                  small improvements!
                </p>
                <ul>
                  <li>
                    <span>Automatic Job Expiry feature.</span>
                  </li>
                  <li>
                    <span>Membership plans for jobseekers.</span>
                  </li>
                  <li>
                    <span>Performance improvements.</span>
                  </li>
                  <li>
                    <span>Minor bug fixes.</span>
                  </li>
                </ul>

                <p>
                  V1.0 – February 13th, 2020 – Major updates and design
                  improvements!
                </p>
                <ul>
                  <li>
                    <span>
                      Modern design applied both for web version and apps.
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Stripe</strong> payment gateway was integrated.
                    </span>
                  </li>
                  <li>
                    <span>French language added in frontend.</span>
                  </li>
                  <li>
                    <span>
                      Mail notifications for job posting, deletion, and
                      modification.
                    </span>
                  </li>
                  <li>
                    <span>Recruiters can email jobseekers directly.</span>
                  </li>
                  <li>
                    <span>Admin can configure PayPal payment mode.</span>
                  </li>
                  <li>
                    <span>
                      Homepage announcement section with scrolling strip bar.
                    </span>
                  </li>
                  <li>
                    <span>
                      Professional certification/participation section in
                      jobseeker profile.
                    </span>
                  </li>
                  <li>
                    <span>
                      Recruiters and jobseekers can delete their profile with
                      reason.
                    </span>
                  </li>
                  <li>
                    <span>
                      Mail history visible in both Jobseeker and Recruiter
                      panels.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
            <div className="container">
            <div className="job_or_title">
              <h2 className="taxt_tt_job">Script Update History</h2>
              <br />
              <div className="script-update_title">
                <p>
                  V8.0 - May 5th, 2025 - New feature added and several key improvements to enhance functionality and user experience.
                </p>
                <ul>
                  <li><span>Enjoy a <b>unified modern design</b> for the web platform.</span></li>
                  <li><span>Improved the website performance.</span></li>
                  <li><span>Utilized the backend API&apos;s.</span></li>
                  <li><span>Minor bug fixes.</span></li>
                </ul>

                <p>
                  V7.0 - December 24th, 2024 - New feature added and several key improvements to enhance functionality and user experience.
                </p>
                <ul>
                  <li><span>Admin can now efficiently <b>import jobs via CSV or XLSX files</b>, automatically associating them with the selected employer for streamlined management.</span></li>
                  <li><span>Optimization techniques implemented for faster page load and <b>performance optimization</b> for smoother user experience.</span></li>
                  <li><span>Admin can now assign specific roles to sub-admins through <b>sub-admin role management</b>, restricting their access to authorized features and sections only.</span></li>
                  <li><span>The platform&apos;s <b>multilingual support</b> feature is now updated with Greek, German and Ukrainian languages, allowing users to navigate and use the system in their preferred language for a more <b>localized experience</b>.</span></li>
                </ul>

                <p>V6.0 - September 19th, 2023 - Latest release brings new features, coupled with significant leaps in technologies!</p>
                <ul>
                  <li><span>Enjoy a unified modern design on both web and mobile platforms.</span></li>
                  <li><span>Upgraded to the latest PHP version, switched to the <strong>Laravel framework</strong>, and revamped it&apos;s frontend with <strong>ReactJS</strong>.</span></li>
                  <li><span>Stripe Payment Gateway Integration Updated with latest version.</span></li>
                  <li><span>Latest optimizations have resulted in noticeable performance enhancements.</span></li>
                </ul>

                <p>V5.0 - April 26th, 2023 - New feature added and minor improvements!</p>
                <ul>
                  <li><span>Employer Membership Plan Feature: Employers will be able to view the jobseeker contact details only if they have the respective membership plan active.</span></li>
                  <li><span>Optimized job search method.</span></li>
                  <li><span>Minor bug fixes and UI improvements.</span></li>
                </ul>

                <p>V4.0 - June 14th, 2022 - New features added and minor improvements!</p>
                <ul>
                  <li><span>Job import using XML format: Admin has the option to import jobs in XML format with third-party URLs and map parameters accordingly.</span></li>
                  <li><span>Auto assignment of categories: Job category is automatically assigned based on the best-matched keyword.</span></li>
                  <li><span>Import Jobseekers: Employers can now <strong>import jobseekers</strong> in bulk through an Excel file using a predefined format.</span></li>
                  <li><span>Announcement marquee: Admin has the ability to manage announcements displayed over the homepage.</span></li>
                </ul>

                <p>V3.0 – June 29th, 2021 – New features added and design improvements!</p>
                <ul>
                  <li><span>Search Job added to the homepage with a modern layout and CV upload for guests.</span></li>
                  <li><span>Optimized job search with filters like title, skill, category, and popular searches.</span></li>
                  <li><span>Upload video CV option where jobseekers can upload their <strong>video CV</strong> and employers can view it.</span></li>
                  <li><span>A new layout with modern, eye-catching UI components throughout the web version.</span></li>
                </ul>

                <p>V2.0 – November 03rd, 2020 – New features added and other small improvements!</p>
                <ul>
                  <li><span>Automatic Job Expiry feature.</span></li>
                  <li><span>Membership plans for jobseekers.</span></li>
                  <li><span>Performance improvements.</span></li>
                  <li><span>Minor bug fixes.</span></li>
                </ul>

                <p>V1.0 – February 13th, 2020 – Major updates and design improvements!</p>
                <ul>
                  <li><span>Modern design applied both for web version and apps.</span></li>
                  <li><span><strong>Stripe</strong> payment gateway was integrated.</span></li>
                  <li><span>French language added in frontend.</span></li>
                  <li><span>Mail notifications for job posting, deletion, and modification.</span></li>
                  <li><span>Recruiters can email jobseekers directly.</span></li>
                  <li><span>Admin can configure PayPal payment mode.</span></li>
                  <li><span>Homepage announcement section with scrolling strip bar.</span></li>
                  <li><span>Professional certification/participation section in jobseeker profile.</span></li>
                  <li><span>Recruiters and jobseekers can delete their profile with reason.</span></li>
                  <li><span>Mail history visible in both Jobseeker and Recruiter panels.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ScriptUpdatedModal;
