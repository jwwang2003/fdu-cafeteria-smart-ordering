import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

import "./globals.css";
import BreadCrumbs from "@/components/Breadcrumbs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center items-center min-h-screen bg-white">
          <div className="flex flex-col aspect-phone-l-portrait w-full phone:w-auto bg-gray-50 shadow-xl h-screen relative space-y-1">
            <Header />
            <BreadCrumbs />
            <div className="sticky text-black flex flex-col h-full overflow-x-scroll pb-4">
              {children}
            </div>
            <Navigation />
          </div>
        </div>
      </body>
    </html>
  );
}
