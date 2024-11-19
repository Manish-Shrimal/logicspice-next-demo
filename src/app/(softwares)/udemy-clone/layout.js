// import { Inter } from "next/font/google";
// import "../../globals.css";
// import Head from "next/head";
// import BaseAPI from "@/app/BaseAPI/BaseAPI";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "@/app/BaseAPI/Domain";

// const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }, parent) {
//   // Fetch data
//   const product = await fetch(`${MetadataApi}/udemy-clone`,{
//     cache: "no-store",
//   }).then((res) =>
//     res.json()
//   );
//   // console.log(product)

  
//   let schemaOrg = null;
//   if (product?.data?.schema) {
//     console.log("from if of udemy-clone", product.data.schema);
//     const cleanedText = product.data.schema
//       .replace(/\\r\\n/g, "") // Remove \r\n (carriage return + newline)
//       .replace(/\\n/g, "") // Remove \n (newline)
//       .replace(/\\r/g, "") // Remove \r (carriage return)
//       .replace(/\\+/g, "") // Remove unnecessary backslashes
//       .replace(/[\u0000-\u001F\u007F]/g, ""); 

//     try {
//       schemaOrg = JSON.parse(cleanedText); // Parse it as JSON if necessary
//     } catch (error) {
//       console.error("Error parsing schemaOrg JSON:", error);
//     }
//   }
//   // Return metadata
//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     // Add other meta tags as needed
//     alternates: {
//       canonical: `${Domain}/udemy-clone`,
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
//         dangerouslySetInnerHTML={{ __html: metadata.schemaOrg }}
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
//     `${MetadataApi}/udemy-clone`, {
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
// "@context": "https://schema.org",
// "@type": "FAQPage",
// "mainEntity": [{
// "@type": "Question",
// "name": "Once I purchase this script, how many days will it take to go online?",
// "acceptedAnswer": {
// "@type": "Answer",
// "text": "It takes 2 working days generally, provided all the information to make it live has been given."
// }
// },{
// "@type": "Question",
// "name": "Can I get help for customization?",
// "acceptedAnswer": {
// "@type": "Answer",
// "text": "Yes, we have an experienced team of developers to help you with customization as per your requirements."
// }
// },{
// "@type": "Question",
// "name": "Will it be Installed on my own server?",
// "acceptedAnswer": {
// "@type": "Answer",
// "text": "Once you purchase the software, our expert installation team will do the installation of the software on your server. The installation is free of cost. If you are a tech person, you can install it by yourself with the help of an installation document."
// }
// },{
// "@type": "Question",
// "name": "Will I be able to use it on multiple domains, after I purchase this script?",
// "acceptedAnswer": {
// "@type": "Answer",
// "text": "You will be licensed to use it only for the domain, you purchased for."
// }
// },{
// "@type": "Question",
// "name": "Can I update some design and functionality in application code myself?",
// "acceptedAnswer": {
// "@type": "Answer",
// "text": "Yes, You will have access of the all the code, except some of the core encrypted files."
// }
// },{
// "@type": "Question",
// "name": "Can I use your script without any programming skills?",
// "acceptedAnswer": {
// "@type": "Answer",
// "text": "Yes, You can directly install our given script and can manage everything in the admin panel which is very user friendly."
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
//       canonical: `${Domain}/udemy-clone`,
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
//        {metadata.schemaOrg && (
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
    `${MetadataApi}/udemy-clone`, {
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
        "name": "Once I purchase this script, how many days will it take to go online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It takes 2 working days generally, provided all the information to make it live has been given."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get help for customization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we have an experienced team of developers to help you with customization as per your requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Will it be Installed on my own server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once you purchase the software, our expert installation team will do the installation of the software on your server. The installation is free of cost. If you are a tech person, you can install it by yourself with the help of an installation document."
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
        "name": "Can I update some design and functionality in application code myself?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, You will have access of the all the code, except some of the core encrypted files."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use your script without any programming skills?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, You can directly install our given script and can manage everything in the admin panel which is very user friendly."
        }
      }
    ]
  };

  // Combine existing schema and FAQ schema into one array if necessary
  if (schemaOrg) {
    if (Array.isArray(schemaOrg)) {
      schemaOrg.push(faqSchema);
    } else {
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
      canonical: `${Domain}/udemy-clone`,
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

