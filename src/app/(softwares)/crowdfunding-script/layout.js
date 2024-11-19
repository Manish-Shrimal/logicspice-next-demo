// import { Inter } from "next/font/google";
// import "../../globals.css";
// import Head from "next/head";
// import BaseAPI from "@/app/BaseAPI/BaseAPI";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "@/app/BaseAPI/Domain";

// const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }, parent) {
//   // Fetch data
//   const product = await fetch(
//     `${MetadataApi}/crowdfunding-script`
//   ).then((res) => res.json());
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

//   }

//   // Return metadata
//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     // Add other meta tags as needed
//     alternates: {
//       canonical: `${Domain}/softwares/crowdfunding-script`,
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
//   //   console.log(metadata);

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
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schemaOrg) }}
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

// const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }, parent) {
//   // Fetch data
//   const product = await fetch(`${MetadataApi}/crowdfunding-script`,{
//     cache: "no-store",
//   }).then((res) => res.json());
  
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

//   // Return metadata
//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     alternates: {
//       canonical: `${Domain}/crowdfunding-script`,
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
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schemaOrg) }}
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

// const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }, parent) {
//   // Fetch data
//   const product = await fetch(
//     `${MetadataApi}/crowdfunding-script`, {
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
//     "@type": "FAQPage",
//     "mainEntity": [
//       {
//         "@type": "Question",
//         "name": "Why should I buy this script?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "You get the following benefits of using LS Crowd Funding Script - 1. Easy to use, User-friendly Script with all the major features to the latest market trend. 2. Cost Effective 3. Support Unlimited Users 4. Easily scalable and Customizable solution 5. Target Social network to spread awareness to your created project."
//         }
//       },
//       {
//         "@type": "Question",
//         "name": "Can I update some design and functionality in application code myself?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "Yes, You will have access of the all the code, except some of the core encrypted files."
//         }
//       },
//       {
//         "@type": "Question",
//         "name": "Will I be able to use it on multiple domains, after I purchase this script?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "You will be licensed to use it only for the domain, you purchased for."
//         }
//       },
//       {
//         "@type": "Question",
//         "name": "Can I resell the script? Will I have rights over the script code?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "No, You can’t resell the script. All rights will remain with Logicspice only."
//         }
//       },
//       {
//         "@type": "Question",
//         "name": "Along with hosting server details, what other recommendations?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "We recommend you purchase SSL certificate along with a hosting server, considering that an SSL certificate is necessary for all the websites these days and it provides a secure layer to the website as well."
//         }
//       }
//     ]
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
//       canonical: `${Domain}/crowdfunding-script`,
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
//       <Head>
//         <meta name="description" content={metadata.description} />
//         <meta name="keywords" content={metadata.keywords} />
//         <title>{metadata.title}</title>
//       </Head>
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
//             __html: JSON.stringify(metadata.faqSchema),
//           }}
//         />
//       )}
//     </html>
//   );
// }



import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import MetadataApi from "@/app/BaseAPI/MetadataApi";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  // Fetch data
  const product = await fetch(
    `${MetadataApi}/crowdfunding-script`, {
      cache: "no-store",
    }
  ).then((res) => res.json());

  let text = product.data.schema;

  let schemaOrg = null;
  if (text) {
    const cleanedText = text
      .replace(/\\r\\n/g, '')   // Remove \r\n (carriage return + newline)
      .replace(/\\n/g, '')      // Remove \n (newline)
      .replace(/\\r/g, '')      // Remove \r (carriage return)
      .replace(/\\+/g, '')      // Remove unnecessary backslashes
      .replace(/[\u0000-\u001F\u007F]/g, '');  // Remove control characters

    schemaOrg = cleanedText && JSON.parse(cleanedText);
  }

  // Example FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why should I buy this script?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You get the following benefits of using LS Crowd Funding Script - 1. Easy to use, User-friendly Script with all the major features to the latest market trend. 2. Cost Effective 3. Support Unlimited Users 4. Easily scalable and Customizable solution 5. Target Social network to spread awareness to your created project."
        }
      },
      {
        "@type": "Question",
        "name": "Can I update some design and functionality in application code myself?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, You will have access of the all the code, except some of the core encrypted files."
        }
      },
      {
        "@type": "Question",
        "name": "Will I be able to use it on multiple domains, after I purchase this script?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You will be licensed to use it only for the domain, you purchased for."
        }
      },
      {
        "@type": "Question",
        "name": "Can I resell the script? Will I have rights over the script code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, You can’t resell the script. All rights will remain with Logicspice only."
        }
      },
      {
        "@type": "Question",
        "name": "Along with hosting server details, what other recommendations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend you purchase SSL certificate along with a hosting server, considering that an SSL certificate is necessary for all the websites these days and it provides a secure layer to the website as well."
        }
      }
    ]
  };

  // Combine existing schema and FAQ schema
  if (schemaOrg) {
    if (schemaOrg["@type"] === "FAQPage") {
      // Merge FAQ entries if schemaOrg is also an FAQPage
      schemaOrg.mainEntity = [
        ...schemaOrg.mainEntity,
        ...faqSchema.mainEntity,
      ];
    } else {
      // Include both schemas
      schemaOrg = [schemaOrg, faqSchema];
    }
  } else {
    schemaOrg = faqSchema;
  }

  return {
    title: product.data.meta_title,
    description: product.data.meta_description,
    keywords: product.data.meta_keyword,
    alternates: {
      canonical: `${Domain}/crowdfunding-script`,
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
    schemaOrg,
  };
}

export default async function RootLayout({ children, params, searchParams }) {
  const metadata = await generateMetadata({ params, searchParams });

  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
      </Head>
      <body className={inter.className}>{children}</body>
      {metadata.schemaOrg && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata.schemaOrg),
          }}
        />
      )}
    </html>
  );
}
