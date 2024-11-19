// import { Inter } from "next/font/google";
// import "../../globals.css";
// import Head from "next/head";
// import BaseAPI from "@/app/BaseAPI/BaseAPI";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "@/app/BaseAPI/Domain";

// const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }, parent) {
//   // Fetch data
//   const product = await fetch(`${MetadataApi}/business-directory-system`,{
//     cache: "no-store",
//   }).then((res) =>
//     res.json()
//   );
//   // console.log(product)

//   let text = product.data.schema;

//   let schemaOrg = null;
//   if(text){
//     const cleanedText = text
//       .replace(/\\r\\n/g, '')
//       .replace(/\\n/g, '')
//       .replace(/\\r/g, '')
//       .replace(/\\+/g, '')
//       .replace(/[\u0000-\u001F\u007F]/g, '');

//       schemaOrg = cleanedText && JSON.parse(cleanedText);

//   }

//   // Return metadata
//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     // Add other meta tags as needed
//     alternates: {
//       canonical: `${Domain}/business-directory-system`,
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
  const product = await fetch(`${MetadataApi}/business-directory-system`, {
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
        name: "How can a customer search businesses around his location?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Customer can enter his zip/postal code in the website and all the business that are around will be listed to the customer.",
        },
      },
      {
        "@type": "Question",
        name: "Can the customer give rating to a business even if he has not visited the store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes customer can give rating out of 5 even if they have not visited the store. Customer can also write a review along with the rating.",
        },
      },
      {
        "@type": "Question",
        name: "Can a business owner upload multiple services to the website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the business owner can upload multiple services/products that he deals in.",
        },
      },
      {
        "@type": "Question",
        name: "How can customer ensure authenticity of the information of different business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whenever a business owner creates a page of his business, it has to be approved by the admin.",
        },
      },
      {
        "@type": "Question",
        name: "Can a user view the contact information of the seller?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If a seller chooses to share his contact information on the website, the customer can see it.",
        },
      },
      {
        "@type": "Question",
        name: "Can I update some design and functionality in application code",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, You will have access of the all the code.",
        },
      },
    ],
  };

  // Combine the existing schema and FAQ schema
  // schemaOrg = {
  //   ...schemaOrg,
  //   ...faqSchema,
  // };

  // Return metadata
  return {
    title: product.data.meta_title,
    description: product.data.meta_description,
    keywords: product.data.meta_keyword,
    alternates: {
      canonical: `${Domain}/business-directory-system`,
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
