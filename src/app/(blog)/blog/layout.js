import { Inter } from "next/font/google";
import "../../globals.css";
import Head from "next/head";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import MetadataApi from "@/app/BaseAPI/MetadataApi";
import Domain from "@/app/BaseAPI/Domain";
import CookiesConsent from "@/app/Components/CookiesConsent";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  // Fetch data
  const product = await fetch(`${MetadataApi}/blog`, {
    cache: "no-store",
  }).then((res) => res.json());

  let pageSlug = params;

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

  // Return metadata
  return {
    title: product.data.meta_title,
    description: product.data.meta_description,
    keywords: product.data.meta_keyword,
    // Add other meta tags as needed
    alternates: {
      canonical: `${Domain}/blog`,
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

        <meta
          property="og:title"
          content="Latest technology Updates | Official Blogs - Logicspice"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest tech trends, software solutions, and expert insights. Explore Logicspice blogs for innovative ideas, tips, and industry news!"
        />
        <meta property="og:url" content="https://www.logicspice.com/blog/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.logicspice.com/_next/image?url=%2Fimg%2Flogo.png&w=384&q=75&dpl=dpl_CJ8AmSmv9XNrmv8AtyW7eAv7e6MM"
        />
        <meta
          property="og:image:alt"
          content="Logicspice Logo - Latest Tech & Software Trends"
        />
        <meta property="og:site_name" content="Logicspice" />
        <title>{metadata.title}</title>
      </Head>
      <CookiesConsent />
      <body className={inter.className}>{children}</body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schemaOrg) }}
      />
    </html>
  );
}
