// import { Inter } from "next/font/google";
// import "../../globals.css";
// import Head from "next/head";
// import MetadataApi from "../../BaseAPI/MetadataApi";
// import Domain from "../../BaseAPI/Domain";
// import CookiesConsent from "../../Components/CookiesConsent";

// const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params, searchParams }, parent) {
//   // Fetch data
//   const product = await fetch(`${MetadataApi}/job-portal-script`,{
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
//       canonical: `${Domain}/job-portal-script`,
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
    
//       <html lang="en">
//       <Head>
//         <meta name="description" content={metadata.description} />
//         <meta name="keywords" content={metadata.keywords} />
//         <title>{metadata.title}</title>
        
//       </Head>
//       <CookiesConsent />
//       <body className={inter.className}>{children}</body>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schemaOrg) }}
//       />
//     </html>
    
    
//   );
// }













import { Inter, Roboto } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import MetadataApi from "../../BaseAPI/MetadataApi";
import Domain from "../../BaseAPI/Domain";
import CookiesConsent from "../../Components/CookiesConsent";
import Chatbot from "../../Components/Chatbot";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export async function generateMetadata({ params, searchParams }, parent) {
  // Fetch SEO metadata and schema
  const product = await fetch(`${MetadataApi}/job-portal-script`, {
    cache: "no-store",
  }).then((res) => res.json());

  const rawSchema = product.data.schema;

  let schemaOrg = null;
  if (rawSchema) {
    const cleaned = rawSchema
      .replace(/\\r\\n|\\n|\\r/g, "")
      .replace(/\\+/g, "")
      .replace(/[\u0000-\u001F\u007F]/g, "");

    try {
      schemaOrg = JSON.parse(cleaned);
    } catch (error) {
      console.error("Invalid schema JSON", error);
    }
  }

  return {
    title: product.data.meta_title,
    description: product.data.meta_description,
    keywords: product.data.meta_keyword,
    alternates: {
      canonical: `${Domain}/job-portal-script`,
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
  const metadata = await generateMetadata({ params, searchParams });

  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" media="all" onload="this.media='all'" />
<noscript>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" />
</noscript>

      </Head>
      <CookiesConsent />
      <Chatbot />
      <body className={`${inter.className} ${roboto.className}`}>
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
