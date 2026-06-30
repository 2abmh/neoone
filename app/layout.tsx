import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neoone.com.my"),
  title: "neOOne Associates | Learning, Innovation and Transformation",
  description:
    "neOOne Associates helps Malaysian organisations build leadership, innovation, change and learning capability.",
  openGraph: {
    title: "Build the people system behind real growth.",
    description:
      "Leadership development, transformation, innovation and sustainability-focused learning for Malaysian organisations.",
    images: ["https://neoone.com.my/wp-content/uploads/2025/10/Learning-and-development-consultant-768x576.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-[var(--font-body)] antialiased">{children}</body>
    </html>
  );
}
