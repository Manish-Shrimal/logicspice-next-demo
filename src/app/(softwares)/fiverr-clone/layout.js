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
//     `${MetadataApi}/fiverr-clone`,{
//       cache: "no-store",
//     }
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
//       canonical: `${Domain}/fiverr-clone`,
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

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import MetadataApi from "@/app/BaseAPI/MetadataApi";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  // Fetch data
  const product = await fetch(`${MetadataApi}/fiverr-clone`, {
    cache: "no-store",
  }).then((res) => res.json());

  let text = product.data.schema;

  let schemaOrg = null;
  if (text) {
    const cleanedText = text
      .replace(/\\r\\n/g, "") // Remove \r\n (carriage return + newline)
      .replace(/\\n/g, "") // Remove \n (newline)
      .replace(/\\r/g, "") // Remove \r (carriage return)
      .replace(/\\+/g, "") // Remove unnecessary backslashes
      .replace(/[\u0000-\u001F\u007F]/g, ""); // Remove control characters

    schemaOrg = cleanedText && JSON.parse(cleanedText);
  }

  // Example FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can a user search for gigs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "User can search for the gigs by selecting the categories and the subcategories or by entering the keywords related to their environment.",
        },
      },
      {
        "@type": "Question",
        name: "Can a user view the profile of users who has added the gig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. User can view the profile of user who has uploaded the bid along the total reviews received by him and other gigs added by him.",
        },
      },
      {
        "@type": "Question",
        name: "How can the users manage their gigs on the website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The users can add their gigs along with pictures and other deals to the website. They can also edit and delete the gigs that are already been added.",
        },
      },
      {
        "@type": "Question",
        name: "How many days will it take to implement the customization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Time taken to implement your Fiverr Clone Script depends on the level of customization and data migration. The time frame generally ranges 5-6 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Can the User give rating to a gig even if they haven purchased it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. User can only give rating out of 5 when they have purchased the gig. User can also write a review along with the rating.",
        },
      },
    ],
  };

  // Combine the existing schema and FAQ schema

  // schemaOrg = {
  //   ...schemaOrg,
  //   ...faqSchema,
  // };

  // schemaOrg = {
  //   ...schemaOrg,
  //   // ...faqSchema,
  // };

  // Return metadata
  return {
    title: product.data.meta_title,
    description: product.data.meta_description,
    keywords: product.data.meta_keyword,
    alternates: {
      canonical: `${Domain}/fiverr-clone`,
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
    schemaOrg: schemaOrg || null,
    faqSchema: faqSchema,
  };
}

export default async function RootLayout({ children, params, searchParams }) {
  // Fetch metadata using the generateMetadata function
  const metadata = await generateMetadata({ params, searchParams });

  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
      </Head>
      <body className={inter.className}>{children}</body>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schemaOrg) }}
      /> */}
      {metadata.schemaOrg && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata.schemaOrg),
          }}
        />
      )}
      {/* Render the FAQ schema separately */}
      {metadata.faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata.faqSchema),
          }}
        />
      )}
    </html>
  );
}
