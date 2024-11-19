import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import MetadataApi from "@/app/BaseAPI/MetadataApi";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  // Fetch data
  const product = await fetch(`${MetadataApi}/logistic-marketplace-software`, {
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
        name: "Is the source code modifiable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, most of the script is completely flexible and client can customize it as per their requirements. However some parts of it are encoded.",
        },
      },
      {
        "@type": "Question",
        name: "How much time it will take to make it live?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The whole process will take around 1 week and the rest depends on your response time and customization requirements.",
        },
      },
      {
        "@type": "Question",
        name: "How will you deal with bugs and issues in product?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We will communicate with you on chat, phone call, skype and email during our business hours and try to solve your problem as soon as possible.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to provide Google map API key? If yes, how to generate Google map API key?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you need to provide map API key. Please follow the steps mentioned in below URL to generate Google map API key: https://developers.google.com/maps/documentation/javascript/get-api-key. You need to setup your billing details over that.",
        },
      },
      {
        "@type": "Question",
        name: "Can I update some design and functionality in application code myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, You will have access of the all the code, except some of the core encrypted files.",
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
      canonical: `${Domain}/logistic-marketplace-software`,
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
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata.schemaOrg),
          }}
        />
      )}
      {/* Render the FAQ schema separately */}
      {metadata.faqSchema && (
        <script
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata.faqSchema),
          }}
        />
      )}
    </html>
  );
}
