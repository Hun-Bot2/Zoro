import type { Metadata } from "next";

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://zoro.example");

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: MetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    metadataBase: siteUrl,
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Zoro",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}
