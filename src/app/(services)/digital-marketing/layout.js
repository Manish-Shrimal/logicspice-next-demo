// import { Inter } from "next/font/google";
// import "../../globals.css";
// import Head from "next/head";
// import BaseAPI from "@/app/BaseAPI/BaseAPI";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "@/app/BaseAPI/Domain";

// const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }, parent) {
//   // Fetch data
//   const product = await fetch(`${MetadataApi}/digital-marketing`,{
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

//   }

//   // Return metadata
//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     // Add other meta tags as needed
//     alternates: {
//       canonical: `${Domain}/digital-marketing`,
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
//        <script
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

export async function generateMetadata({ params, searchParams }) {
  let product;
  try {
    // Fetch data from the API
    const response = await fetch(`${MetadataApi}/digital-marketing`, { cache: "no-store" });
    product = await response.json();
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    // Provide fallback values in case of an error
    return {
      title: "Fallback Title",
      description: "Fallback Description",
      keywords: "",
    };
  }

  // Process schema data safely
  let schemaOrg = null;
  if (product?.data?.schema) {
    try {
      const cleanedText = product.data.schema
        .replace(/\\r\\n/g, '')   // Remove \r\n (carriage return + newline)
        .replace(/\\n/g, '')      // Remove \n (newline)
        .replace(/\\r/g, '')      // Remove \r (carriage return)
        .replace(/\\+/g, '')      // Remove unnecessary backslashes
        .replace(/[\u0000-\u001F\u007F]/g, '');  // Remove control characters
      schemaOrg = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error("Failed to parse schemaOrg JSON:", parseError);
    }
  }

  // Return metadata with default fallback values
  return {
    title: product?.data?.meta_title || "Fallback Title",
    description: product?.data?.meta_description || "Fallback Description",
    keywords: product?.data?.meta_keyword || "",
    alternates: {
      canonical: `${Domain}/digital-marketing`,
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
      <body className={inter.className}>
        {children}
        {metadata.schemaOrg && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schemaOrg) }}
          />
        )}
      </body>
    </html>
  );
}

