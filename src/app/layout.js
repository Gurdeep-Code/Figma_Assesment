import "./globals.css";
import { manrope } from "./font";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="flex justify-center">
      <body
        className={`${manrope.className} w-full max-w-[2000px] box-border	px-6 md:px-8 py-6 md:py-8 2xl-px-0 xs:overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
