import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center items-center min-h-screen bg-white">
          <div className="flex flex-col aspect-phone-l-portrait w-full phone:w-auto bg-gray-50 shadow-xl h-screen relative">
            <Header />
            <div className="fade-bottom text-black flex flex-col h-full overflow-hidden">
              {children}
            </div>
            <Navigation />
          </div>
        </div>
      </body>
    </html>
  );
}
