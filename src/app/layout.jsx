import "./globals.scss";
import { Providers } from "@/redux/provider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { DM_Sans } from "next/font/google";
import CopyProtection from "@/components/CopyProtection";

export const metadata = {
  title: "SIU Web",
  description: "Study in UAE",
  icons: {
    icon: "/assets/images/about/siu_favicon_circle.png",
  },
};

const dmSans = DM_Sans({
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-primary",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/assets/images/about/siu_favicon_circle.png" sizes="any" />
        <link
          rel="preload"
          href="/assets/images/about/siu_favicon_circle.png"
          as="image"
          fetchPriority="high"
        />
      </head>

      <body className={`${dmSans.variable}`}>
        {/* ✅ GLOBAL COPY PROTECTION (NO GA) */}
        <CopyProtection />

        {/* ✅ YOUR ORIGINAL PROVIDER */}
        <Providers>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
