import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feature Kill Calculator — Know the True Cost of Dead Features",
  description: "Analyze code complexity, support tickets, and usage data to calculate the real cost of keeping unused features alive. Built for startup CTOs and product managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3ba606cc-5b75-476e-b97d-d52cf709de36"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
