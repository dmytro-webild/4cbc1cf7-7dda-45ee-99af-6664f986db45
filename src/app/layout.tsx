import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'GENTLEMEN’S Barbershop Lüneburg – Top Haarschnitte & Bartpflege',
  description: 'Erlebe Premium Haarschnitte und Bartpflege im GENTLEMEN’S Barbershop in Lüneburg. Moderner Style, erstklassige Handwerkskunst und Top-Bewertungen. Jetzt Termin buchen!',
  keywords: ["Barbershop Lüneburg, Herrenhaarschnitt Lüneburg, Bartpflege Lüneburg, Fade Cut, GENTLEMEN’S Barbershop"],
};

const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
