// import { Inter } from "next/font/google";
// import "./globals.css";
// import "./resposive.css";
// import Head from "next/head";
// import AOSInitializer from "./Components/AOSInitializer";
// import MetadataApi from "@/app/BaseAPI/MetadataApi";
// import Domain from "./BaseAPI/Domain";
// import GTMComponent from "./Components/GTMComponent";
// import Chatbot from "./Components/Chatbot";

// const inter = Inter({ subsets: ["latin"] });
// let schemaData;

// export async function generateMetadata({ params, searchParams }, parent) {
//   // Fetch data
//   const product = await fetch(`${MetadataApi}/home`, { cache: "no-store" }).then((res) => res.json());

//   let text = product.data.schema;
//   let schemaOrg = null;
//   let cleanedText;
//   if (text) {
//     cleanedText = text
//       .replace(/\\r\\n/g, '') // Remove \r\n (carriage return + newline)
//       .replace(/\\n/g, '') // Remove \n (newline)
//       .replace(/\\r/g, '') // Remove \r (carriage return)
//       .replace(/\\+/g, '') // Remove unnecessary backslashes
//       .replace(/[\u0000-\u001F\u007F]/g, ''); // Remove control characters
//     schemaOrg = cleanedText && JSON.parse(cleanedText);
//     schemaData = cleanedText && JSON.parse(cleanedText);
//     // console.log(schemaData,"hi")
//   } else {
//     cleanedText = "";
//     schemaOrg = "";
//   }

//   // Return metadata
//   return {
//     title: product.data.meta_title,
//     description: product.data.meta_description,
//     keywords: product.data.meta_keyword,
//     // Add other meta tags as needed
//     alternates: {
//       canonical: `${Domain}`,
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
//     schemaData : schemaOrg
//   };
// }

// export default function RootLayout({ children, params, searchParams }) {
//   let schemaData2 = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     "url": "https://www.logicspice.com/",
//     "logo":"https://www.logicspice.com/img/images/logo.png"
//   }
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <AOSInitializer>{children}</AOSInitializer>
//         <Chatbot />
//         <GTMComponent />
//         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ __html: schemaData }) }} />
//         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ __html: schemaData2 }) }} />

//       </body>
//     </html>
//   );
// }

import { Inter } from "next/font/google";
import "./globals.css";
import "./resposive.css";
import AOSInitializer from "./Components/AOSInitializer";
import GTMComponent from "./Components/GTMComponent";
import Chatbot from "./Components/Chatbot";
import MetadataApi from "@/app/BaseAPI/MetadataApi";
import Domain from "./BaseAPI/Domain";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });
let schemaData;

export async function generateMetadata({ params, searchParams }, parent) {
  // Fetch data
  const product = await fetch(`${MetadataApi}/home`, {
    cache: "no-store",
  }).then((res) => res.json());

  let text = product.data.schema;
  let schemaOrg = null;
  let cleanedText;
  if (text) {
    cleanedText = text
      .replace(/\\r\\n/g, "") // Remove \r\n (carriage return + newline)
      .replace(/\\n/g, "") // Remove \n (newline)
      .replace(/\\r/g, "") // Remove \r (carriage return)
      .replace(/\\+/g, "") // Remove unnecessary backslashes
      .replace(/[\u0000-\u001F\u007F]/g, ""); // Remove control characters
    schemaOrg = cleanedText && JSON.parse(cleanedText);
    schemaData = cleanedText && JSON.parse(cleanedText);
  } else {
    cleanedText = "";
    schemaOrg = "";
  }

  // Return metadata
  return {
    title: product.data.meta_title,
    description: product.data.meta_description,
    keywords: product.data.meta_keyword,
    alternates: {
      canonical: `${Domain}`,
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
    schemaData: schemaOrg,
  };
}

export default function RootLayout({ children, params, searchParams }) {
  const isHomePage = params && params.slug === undefined; // Adjust as necessary to match your home page route
  // let schemaData2 = {
  //   "@context": "https://schema.org",
  //   "@type": "Organization",
  //   url: "https://www.logicspice.com/",
  //   logo: "https://www.logicspice.com/img/images/logo.png",
  // };

  return (
    <html lang="en">
    
      <body className={inter.className}>
        <AOSInitializer>{children}</AOSInitializer>
        <Chatbot />
        <GTMComponent />
        {isHomePage && (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({ __html: schemaData }),
              }}
            />
            {/* <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({ __html: schemaData2 }),
              }}
            /> */}
          </>
        )}
      </body>
    </html>
  );
}
