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
    `${MetadataApi}/job-board-software`, {
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
"name": "Can a Jobseeker upload his CV to apply for job?",
"acceptedAnswer": {
"@type": "Answer",
"text": "No. The information about the jobseeker will go from his profile to the employer that he is applying the job for."
}
},{
"@type": "Question",
"name": "Will there be any installation charges when I purchase the job portal script?",
"acceptedAnswer": {
"@type": "Answer",
"text": "No. The installation of our Job Portal Product will be absolutely free of cost."
}
},{
"@type": "Question",
"name": "Can jobseeker download the CV that he has created on this website?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes. Once the job seeker creates his CV, he can download the same in a PDF format."
}
},{
"@type": "Question",
"name": "Can employer or jobseeker write blog posts?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The employers and jobseekers can not write blog posts. The blog posts will be written by admin and employers & Job Seekers can view them."
}
},{

"@type": "Question",
"name": "Once I purchase the job portal script, how many days will it take to go online?",
"acceptedAnswer": {
"@type": "Answer",
"text": "It takes 2 working days generally, provided all the information to make it live has been given. If you want customizations, then time taken to implement your Job portal depends on the level of customization and data migration."
}
},{

"@type": "Question",
"name": "How can Jobseeker apply for a job?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Jobseeker can send their details directly to the job company or they can attached a cover letter along with their application. They can edit add or delete their cover letter from the profile."
}
},{

"@type": "Question",
"name": "How can Jobseeker create job alerts?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Jobseekers will be able to manage the alerts that will help them to receive emails if the job is available according to their set criteria. They can add alerts by providing the information like designation of job required and location of job."
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
