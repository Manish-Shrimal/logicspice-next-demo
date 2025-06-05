// import { Inter } from "next/font/google";
// import "../../globals.css";
// import Head from "next/head";
// import BaseAPI from "@/app/BaseAPI/BaseAPI";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "@/app/BaseAPI/Domain";

// const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }, parent) {
//   // Fetch data
//   const product = await fetch(`${MetadataApi}/job-board-software`,{
//     cache: "no-store",
//   }).then((res) =>
//     res.json()
//   );
//   // console.log(product)
//   let text = product.data.schema;

//   let schemaOrg = null;
//   if(text){
//     const cleanedText = text
//       .replace(/\\r\\n/g, '')   // Remove \r\n (carriage return + newline)
//       .replace(/\\n/g, '')      // Remove \n (newline)
//       .replace(/\\r/g, '')      // Remove \r (carriage return)
//       .replace(/\\+/g, '')      // Remove unnecessary backslashes
//       .replace(/[\u0000-\u001F\u007F]/g, '');  // Remove control characters


//       schemaOrg = cleanedText && JSON.parse(cleanedText);

//       console.log(cleanedText)
//   }
//   // Return metadata
//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     // Add other meta tags as needed
//     alternates: {
//       canonical: `${Domain}/job-board-software`,
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         "max-video-preview": -1,
//         "max-image-preview": "large",
//         "max-snippet": -1,
//       },
//     },
//     schemaOrg: schemaOrg || null,
//   };
// }

// export default async function RootLayout({ children, params, searchParams }) {
//   // Fetch metadata using the generateMetadata function
//   const metadata = await generateMetadata({ params, searchParams });
// //   console.log(metadata);

//   return (
//     <html lang="en">
//       <Head>
//         <meta name="description" content={metadata.description} />
//         <meta name="keywords" content={metadata.keywords} />
//         <title>{metadata.title}</title>
        
//       </Head>
//       <body className={inter.className}>{children}</body>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schemaOrg).replace(/\\\//g, '/') }}
//       />
//     </html>
//   );
// }





// import { Inter } from "next/font/google";
// import "../../globals.css";
// import Head from "next/head";
// import BaseAPI from "@/app/BaseAPI/BaseAPI";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "@/app/BaseAPI/Domain";
// import Chatbot from "@/app/Components/Chatbot";
// import CookiesConsent from "@/app/Components/CookiesConsent";

// const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }, parent) {
//   // Fetch data
//   const product = await fetch(
//     `${MetadataApi}/job-board-software`, {
//       cache: "no-store",
//     }
//   ).then((res) => res.json());

//   let text = product.data.schema;

//   let schemaOrg = null;
//   if (text) {
//     const cleanedText = text
//       .replace(/\\r\\n/g, '')   // Remove \r\n (carriage return + newline)
//       .replace(/\\n/g, '')      // Remove \n (newline)
//       .replace(/\\r/g, '')      // Remove \r (carriage return)
//       .replace(/\\+/g, '')      // Remove unnecessary backslashes
//       .replace(/[\u0000-\u001F\u007F]/g, '');  // Remove control characters

//     schemaOrg = cleanedText && JSON.parse(cleanedText);
//   }

//   // Example FAQ schema
//   const faqSchema = {
//     "@context": "https://schema.org",
// "@type": "FAQPage",
// "mainEntity": [{
// "@type": "Question",
// "name": "Can a Jobseeker upload his CV to apply for job?",
// "acceptedAnswer": {
// "@type": "Answer",
// "text": "No. The information about the jobseeker will go from his profile to the employer that he is applying the job for."
// }
// },{
// "@type": "Question",
// "name": "Will there be any installation charges when I purchase the job portal script?",
// "acceptedAnswer": {
// "@type": "Answer",
// "text": "No. The installation of our Job Portal Product will be absolutely free of cost."
// }
// },{
// "@type": "Question",
// "name": "Can jobseeker download the CV that he has created on this website?",
// "acceptedAnswer": {
// "@type": "Answer",
// "text": "Yes. Once the job seeker creates his CV, he can download the same in a PDF format."
// }
// },{
// "@type": "Question",
// "name": "Can employer or jobseeker write blog posts?",
// "acceptedAnswer": {
// "@type": "Answer",
// "text": "The employers and jobseekers can not write blog posts. The blog posts will be written by admin and employers & Job Seekers can view them."
// }
// },{

// "@type": "Question",
// "name": "Once I purchase the job portal script, how many days will it take to go online?",
// "acceptedAnswer": {
// "@type": "Answer",
// "text": "It takes 2 working days generally, provided all the information to make it live has been given. If you want customizations, then time taken to implement your Job portal depends on the level of customization and data migration."
// }
// },{

// "@type": "Question",
// "name": "How can Jobseeker apply for a job?",
// "acceptedAnswer": {
// "@type": "Answer",
// "text": "Jobseeker can send their details directly to the job company or they can attached a cover letter along with their application. They can edit add or delete their cover letter from the profile."
// }
// },{

// "@type": "Question",
// "name": "How can Jobseeker create job alerts?",
// "acceptedAnswer": {
// "@type": "Answer",
// "text": "Jobseekers will be able to manage the alerts that will help them to receive emails if the job is available according to their set criteria. They can add alerts by providing the information like designation of job required and location of job."
// }
// }]
//   }

//   // Combine the existing schema and FAQ schema
//   // schemaOrg = {
//   //   ...schemaOrg,
//   //   ...faqSchema,
//   // };

//   // Return metadata
//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     alternates: {
//       canonical: `${Domain}/job-board-software`,
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         "max-video-preview": -1,
//         "max-image-preview": "large",
//         "max-snippet": -1,
//       },
//     },
//     schemaOrg: schemaOrg || null,
//     faqSchema: faqSchema,
//   };
// }

// export default async function RootLayout({ children, params, searchParams }) {
//   // Fetch metadata using the generateMetadata function
//   const metadata = await generateMetadata({ params, searchParams });

//   return (
//     <html lang="en">
//       <Chatbot />
//       <Head>
//       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//       <link
//           href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
//           rel="stylesheet"
//         />
//         <meta name="description" content={metadata.description} />
//         <meta name="keywords" content={metadata.keywords} />
//         <title>{metadata.title}</title>
//       </Head>
//       <CookiesConsent />
      
//       <body className={inter.className}>{children}</body>
//       {/* <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schemaOrg) }}
//       /> */}
//       {metadata.schemaOrg && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(metadata.schemaOrg),
//           }}
//         />
//       )}
//       {/* Render the FAQ schema separately */}
//       {metadata.faqSchema && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: metadata.faqSchema,
//           }}
//         />
//       )}
//     </html>
//   );
// }








import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import dynamic from "next/dynamic";
import Script from "next/script";
import BaseAPI from "../../BaseAPI/BaseAPI";
import MetadataApi from "../../BaseAPI/MetadataApi";
import Domain from "../../BaseAPI/Domain";


// Lazy load heavy components to reduce JavaScript execution time
const Chatbot = dynamic(() => import("../../Components/Chatbot"), { ssr: false });
const CookiesConsent = dynamic(() => import("../../Components/CookiesConsent"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }) {

//   const product = await fetch(`${MetadataApi}/job-board-software`, { cache: "no-store" })
//     .then((res) => res.json());

//   let text = product.data.schema;
//   let schemaOrg = null;

//   if (text) {
//     const cleanedText = text
//       .replace(/\\r\\n/g, '')
//       .replace(/\\n/g, '')
//       .replace(/\\r/g, '')
//       .replace(/\\+/g, '')
//       .replace(/[\u0000-\u001F\u007F]/g, '');
    
//     schemaOrg = cleanedText ? JSON.parse(cleanedText) : null;
//   }

//   // FAQ Schema for structured data
//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": [
//       {
//         "@type": "Question",
//         "name": "Can a Jobseeker upload his CV to apply for a job?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "No. The information about the jobseeker will go from his profile to the employer that he is applying the job for."
//         }
//       },
//       {
//         "@type": "Question",
//         "name": "Will there be any installation charges when I purchase the job portal script?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "No. The installation of our Job Portal Product will be absolutely free of cost."
//         }
//       },
//       {
//         "@type": "Question",
//         "name": "Can jobseeker download the CV that he has created on this website?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "Yes. Once the job seeker creates his CV, he can download the same in a PDF format."
//         }
//       }
//     ]
//   };

//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     alternates: {
//       canonical: `${Domain}/job-board-software`,
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         "max-video-preview": -1,
//         "max-image-preview": "large",
//         "max-snippet": -1,
//       },
//     },
//     schemaOrg: schemaOrg || null,
//     faqSchema: faqSchema,
//   };
// }

export async function generateMetadata({ params, searchParams }) {
  let product = null;
  let schemaOrg = null;

  try {
    const response = await fetch(`${MetadataApi}/job-board-software`, { cache: "no-store" });
    
    if (!response.ok) {
      if (response.status >= 500 && response.status < 600) {
        console.error(`Server error ${response.status}: Failed to fetch product data`);
        // Fallback to default metadata in case of server error
        return {
          title: "Job Board Software",
          description: "Default description for Job Board Software",
          keywords: "job board, software, recruitment",
          alternates: {
            canonical: `${Domain}/job-board-software`,
          },
          robots: {
            index: true,
            follow: true,
            googleBot: {
              index: true,
              follow: true,
              "max-video-preview": -1,
              "max-image-preview": "large",
              "max-snippet": -1,
            },
          },
          schemaOrg: null,
          faqSchema: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can a Jobseeker upload his CV to apply for a job?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. The information about the jobseeker will go from his profile to the employer that he is applying the job for."
                }
              },
              {
                "@type": "Question",
                "name": "Will there be any installation charges when I purchase the job portal script?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. The installation of our Job Portal Product will be absolutely free of cost."
                }
              },
              {
                "@type": "Question",
                "name": "Can jobseeker download the CV that he has created on this website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Once the job seeker creates his CV, he can download the same in a PDF format."
                }
              }
            ]
          }
        };
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    product = await response.json();

    let text = product.data.schema;
    if (text) {
      const cleanedText = text
        .replace(/\\r\\n/g, '')
        .replace(/\\n/g, '')
        .replace(/\\r/g, '')
        .replace(/\\+/g, '')
        .replace(/[-\u001F\u007F]/g, '');
      
      try {
        schemaOrg = cleanedText ? JSON.parse(cleanedText) : null;
      } catch (parseError) {
        console.error('Error parsing schema JSON:', parseError);
        schemaOrg = null;
      }
    }

    return {
      title: product.data.meta_title,
      description: product.data.meta_description,
      keywords: product.data.meta_keyword,
      alternates: {
        canonical: `${Domain}/job-board-software`,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      schemaOrg: schemaOrg,
      faqSchema: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can a Jobseeker upload his CV to apply for a job?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The information about the jobseeker will go from his profile to the employer that he is applying the job for."
            }
          },
          {
            "@type": "Question",
            "name": "Will there be any installation charges when I purchase the job portal script?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The installation of our Job Portal Product will be absolutely free of cost."
            }
          },
          {
            "@type": "Question",
            "name": "Can jobseeker download the CV that he has created on this website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Once the job seeker creates his CV, he can download the same in a PDF format."
            }
          }
        ]
      }
    };

  } catch (error) {
    console.error('Error fetching metadata:', error);
    // Fallback metadata in case of any other errors
    return {
      title: "Job Board Software",
      description: "Default description for Job Board Software",
      keywords: "job board, software, recruitment",
      alternates: {
        canonical: `${Domain}/job-board-software`,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      schemaOrg: null,
      faqSchema: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can a Jobseeker upload his CV to apply for a job?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The information about the jobseeker will go from his profile to the employer that he is applying the job for."
            }
          },
          {
            "@type": "Question",
            "name": "Will there be any installation charges when I purchase the job portal script?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The installation of our Job Portal Product will be absolutely free of cost."
            }
          },
          {
            "@type": "Question",
            "name": "Can jobseeker download the CV that he has created on this website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Once the job seeker creates his CV, he can download the same in a PDF format."
            }
          }
        ]
      }
    };
  }
}

export default async function RootLayout({ children, params, searchParams }) {
  const metadata = await generateMetadata({ params, searchParams });

  return (
    <html lang="en">
      <Head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" crossorigin />

        {/* Load Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />

        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
      </Head>

      <body className={inter.className}>
        {/* <Chatbot /> */}
        <CookiesConsent />
        <Chatbot />
        {children}

        {/* Render Structured Data (Schema.org) */}
        {metadata.schemaOrg && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(metadata.schemaOrg),
            }}
          />
        )}

        {/* Render FAQ Schema separately */}
        {metadata.faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(metadata.faqSchema),
            }}
          />
        )}

        {/* Load external scripts efficiently */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-946..."
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}


