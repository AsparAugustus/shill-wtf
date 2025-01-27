import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";
import App from "./app";

import localFont from "next/font/local";
const paint = localFont({ src: "./fonts/Paint-BnM5.ttf" });

import { Inter } from "next/font/google";
import { Providers } from "./providers";
import NavBar from "./components/nav/NavBar.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SHILL.WTF",
  description: "SHILL YOUR SHIT",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <link rel="icon" href="/favicon.ico" sizes="any" />

      <body className={paint.className}>
        <Providers>
          <App>
            <NavBar />
            {children}
          </App>
        </Providers>
      </body>
    </html>
  );
}

// import { Analytics } from "@vercel/analytics/react";

// import localFont from "next/font/local";
// const undead_pixel_11 = localFont({ src: "./fonts/Undead_Pixel_11.ttf" });

// export const metadata = {
//   title: "Shill.wtf",
//   description: "lol",
// };

// import { Providers } from "./providers";
// // import App from "./app";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         {/* Add other head elements here */}
//       </head>
//       <body>
//         <Providers>
//           {children}
//         </Providers>
//       </body>
//     </html>
//   );
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
