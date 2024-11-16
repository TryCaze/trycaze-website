import "./globals.css";
import { GridSmallBackground } from "./components/ui/background/background";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
      </head>
      <body>
        <GridSmallBackground />
        <div className="content-wrapper">{children}</div>
      </body>
    </html>
  );
}