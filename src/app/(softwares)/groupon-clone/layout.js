// import { Inter } from "next/font/google";
// import "../../globals.css";
// import Head from "next/head";
// import BaseAPI from "@/app/BaseAPI/BaseAPI";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "@/app/BaseAPI/Domain";

// const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }, parent) {
//   // Fetch data
//   const product = await fetch(`${MetadataApi}/groupon-clone`,{
//     cache: "no-store",
//   }).then((res) =>
//     res.json()
//   );
//   // console.log(product)

  
//   let schemaOrg = null;
//   if (product?.data?.schema) {
//     console.log("from if of groupon-clone", product.data.schema);
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
//       canonical: `${Domain}/groupon-clone`,
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
    `${MetadataApi}/groupon-clone`, {
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
	"mainEntity": [{
	"@type": "Question",
	"name": "How can a customer search for deals around his location?",
	"acceptedAnswer": {
	"@type": "Answer",
	"text": "Location of customers is auto-detected on the website or customers can select their city on the website and all the deals available nearby will be listed to the customer."
	}
	},{
	"@type": "Question",
	"name": "Can the Customer give a rating to a deal even if they haven't purchased it?",
	"acceptedAnswer": {
	"@type": "Answer",
	"text": "No. Customers can give ratings for the deal only after they purchase the deal. Customers can also write a review along with the rating."
	}
	},{
	"@type": "Question",
	"name": "Can a Business Owner upload multiple deals to the website?",
	"acceptedAnswer": {
	"@type": "Answer",
	"text": "Yes, Business Owners can add more than one deal with multiple pictures and other details."
	}
	},{
	"@type": "Question",
	"name": "Are there any hidden charges or installation charges ?",
	"acceptedAnswer": {
	"@type": "Answer",
	"text": "No. we don’t have any type of hidden charges and after buying a product, installation will be done from our end which will be free."
	}
	},{
	"@type": "Question",
	"name": "Can I update some design and functionality in application code myself?",
	"acceptedAnswer": {
	"@type": "Answer",
	"text": "Yes, You will have access of the all the code, except some of the core encrypted files."
	}
	}]
  }

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
      canonical: `${Domain}/groupon-clone`,
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