import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "InnoPulse 🚀v1.0",
  description: " Connect with skilled professionals from around the world and within the cameroon. Our platform matches you with top tech talent to help your business grow and <b>innovate</b>.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen flex flex-col">
          <Toaster position="bottom-left" />

         

          <div className=" bg-[#F4F2ED] flex-1 w-full">
            <main className="max-w-6xl mx-auto">{children}</main>
          </div>
          <Footer/>

<Script id="google-translate-1" type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
</Script>

<Script id="google-translate" strategy="afterInteractive">{`

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
          pageLanguage: 'en'
      },
      'google_translate_element'
  );
}
window.location.hash='#googtrans('+navigator.language.split("-")[0]+')';`}
</Script> 
          <Script id="tawk-to" strategy="afterInteractive">
            {`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/668beddd7a36f5aaec95a3fa/1i299ibqm';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
              })();
            `}
          </Script>
        </body>
      </html>
    </ClerkProvider>
  );
}
