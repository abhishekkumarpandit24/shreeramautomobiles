// import React from "react";
// import "../styles/index.css";

// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
// };

// export const metadata = {
//   title: "Next.js with Tailwind CSS",
//   description: "A boilerplate project with Next.js and Tailwind CSS",
//   icons: {
//     icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         {children}

//         <script
//           type="module"
//           async
//           src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fboseworks1513back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.12"
//         />
//         <script
//           type="module"
//           defer
//           src="https://static.rocket.new/rocket-shot.js?v=0.0.2"
//         />
//       </body>
//     </html>
//   );
// }

'use client';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-tr from-neutral-950 via-neutral-900 to-red-950 flex items-center justify-center px-6">
          {/* Diagonal CLOSED Ribbon */}
          <div className="absolute top-10 -left-40 rotate-[-45deg] bg-red-600 text-white px-40 py-4 text-lg md:text-xl font-bold tracking-widest shadow-2xl">
            CLOSED
          </div>

          {/* Main Content */}
          <div className="relative z-10 max-w-3xl text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              We’ll Be Back Soon
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
              Our website is currently undergoing scheduled maintenance.
            </p>

            <p className="text-gray-400 text-base md:text-lg mb-10">
              We’re refining the experience to serve you better. Thank you for your patience.
            </p>

            <div className="inline-flex items-center gap-3 text-red-500 text-sm md:text-base font-semibold tracking-wide uppercase">
              <span className="w-8 h-[1px] bg-red-500"></span>
              Maintenance in Progress
              <span className="w-8 h-[1px] bg-red-500"></span>
            </div>
          </div>

          {/* Bottom Marquee */}
          <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee py-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="mx-8 text-sm md:text-lg font-semibold text-red-500 tracking-wider"
                >
                  ⛔ WEBSITE UNDER MAINTENANCE ⛔
                </span>
              ))}
            </div>
          </div>

          {/* Animation */}
          <style jsx global>{`
            @keyframes marquee {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
          `}</style>
        </div>
      </body>
    </html>
  );
}
