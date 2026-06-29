import type { ReactNode } from "react";

export const metadata = {
  title: "Routing Demo",
  description: "A simple Next.js routing demo app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}

       <h1> Featured Product </h1>
      </body>
    </html>
  );
}
