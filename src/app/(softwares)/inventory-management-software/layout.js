// import { Inter } from "next/font/google";
// import "../../globals.css";
// import Head from "next/head";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "@/app/BaseAPI/Domain";

// const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }, parent) {
//   // Fetch data
//   const product = await fetch(`${MetadataApi}/inventory-management-software`,{
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

//       schemaOrg = cleanedText;

//   }

//   // Return metadata
//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     // Add other meta tags as needed
//     alternates: {
//       canonical: `${Domain}/inventory-management-software`,
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

import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import MetadataApi from "@/app/BaseAPI/MetadataApi";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  // Fetch data
  const product = await fetch(`${MetadataApi}/inventory-management-software`, {
    cache: "no-store",
  }).then((res) => res.json());

  let text = product.data.schema;

    let schemaOrg = null;
   if(text){
     const cleanedText = text
       .replace(/\\r\\n/g, '')   // Remove \r\n (carriage return + newline)
       .replace(/\\n/g, '')      // Remove \n (newline)
       .replace(/\\r/g, '')      // Remove \r (carriage return)
       .replace(/\\+/g, '')      // Remove unnecessary backslashes
       .replace(/[\u0000-\u001F\u007F]/g, '');  // Remove control characters

       schemaOrg = cleanedText;

   }

  // Example FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why should I use inventory management software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Thanks to its automation and synchronization in real time, an inventory management solution helps you to boost your sales, save time, avoid making mistakes, reduce your team hassle, so it will help your business to be more productive and, help to improve customer satisfaction.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best way to Manage Inventory?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It all depends on what you value most, what your budget will allow, what your customers expect, how big or small your business is, and other factors.",
        },
      },
      {
        "@type": "Question",
        name: "What results can I expect by using the Inventory Management System?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Costs will be as per your customization needs, faster response times to customers' orders, improved planning, and optimized layouts are just a few of the results you can expect to receive when you use an inventory management system for your business.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get the best value for my money with Inventory Management System?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Think about how much it will cost you to switch to an Inventory Management System from a cheap solution or from excel sheet, as things are changing very rapidly.",
        },
      },
      {
        "@type": "Question",
        name: "Can Admin be able to add multiple items/products?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Admin can add multiple items/products.",
        },
      },
      {
        "@type": "Question",
        name: "Can an Admin be able to add the same item/product from multiple suppliers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Admin can add the same items/products from multiple suppliers.",
        },
      },
      {
        "@type": "Question",
        name: "Is Admin able to generate reports at any time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Admin can generate reports at any time whenever they want.",
        },
      },
      {
        "@type": "Question",
        name: "How hard is it to switch from spreadsheets to Inventory Management System?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is very simple. All data can easily be imported.",
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
      canonical: `${Domain}/inventory-management-software`,
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
