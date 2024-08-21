import Home from "@/pages/Home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hill Top Educational Institute",
  description: "A brief description of your website for SEO and social sharing purposes.",
  openGraph: {
    title: "Your Website Title - Home",
    description: "A brief description of your website for SEO and social sharing purposes.",
    url: "https://www.yourwebsite.com",
    siteName: "Your Website Name",
    images: [
      {
        url: "https://www.yourwebsite.com/images/og-image.jpg", // Replace with your actual image URL
        width: 800,
        height: 600,
        alt: "An image description for social sharing",
      },
    ],
    locale: "en_US", // Adjust based on your site's language
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Website Title - Home",
    description: "A brief description of your website for SEO and social sharing purposes.",
    images: [
      {
        url: "https://www.yourwebsite.com/images/twitter-card.jpg", // Replace with your actual image URL
        alt: "An image description for Twitter sharing",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <>
      <Home />
      
    </>
  );
}
