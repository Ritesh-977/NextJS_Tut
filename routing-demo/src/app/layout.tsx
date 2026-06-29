import type { ReactNode } from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default: "Routing Demo",
    template: "%s | Routing Demo",
    absolute: "",
  },
  description: "A simple Next.js routing demo app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "#f0f0f0", padding: "1rem" }}>
          <h1>Header</h1>
        </header>

        {children}

        <footer style={{ backgroundColor: "#f0f0f0", padding: "1rem", marginTop: "2rem" }}>
         <h2>Footer</h2>
        </footer>
      </body>
    </html>
  );
}
