import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import MetadataApi from "@/app/BaseAPI/MetadataApi";
import Domain from "@/app/BaseAPI/Domain";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  try {
    // Fetch data
    const product = await fetch(`${MetadataApi}/advanced-web-programming`, {
      cache: "no-store",
    }).then((res) => res.json());

    // Clean up the schema string
    let text = product.data.schema;
    const cleanedText = text
      .replace(/\\r\\n/g, "") // Remove \r\n (carriage return + newline)
      .replace(/\\n/g, "") // Remove \n (newline)
      .replace(/\\r/g, "") // Remove \r (carriage return)
      .replace(/\\+/g, "") // Remove unnecessary backslashes
      .replace(/[\u0000-\u001F\u007F]/g, ""); // Remove control characters

    // Parse the cleaned string as JSON
    const schema = JSON.parse(cleanedText);

    // Return metadata
    return {
      title: product.data.meta_title,
      description: product.data.meta_description,
      keywords: product.data.meta_keyword,
      alternates: {
        canonical: `${Domain}/advanced-web-programming`,
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
      schemaOrg: {
        "@context": "http://schema.org/",
        "@type": "ProfessionalService",
        name: " Advanced Web Development | Advance Web Application",
        // "image": [ "https://www.logicspice.com/app/webroot/img/images/lara/Advanced-web-develpment-company.jpg"
        // ],
        description:
          "As a advance web development company, logicspice offers best solution in advanced web programming & web application at cost effective price",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.7",
          reviewCount: "412",
        },
      },
    };
  } catch (error) {
    console.error("Failed to generate metadata:", error);
    return {
      title: "Default Title",
      description: "Default description",
      keywords: "default, keywords",
      alternates: {
        canonical: `${Domain}/advanced-web-programming`,
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
      schemaOrg: null,
    };
  }
}
const htmlContent = "<p>This is <strong>dangerous</strong> HTML!</p>";
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
