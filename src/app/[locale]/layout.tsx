import "./globals.css";
import { GridSmallBackground } from "../components/ui/background/background";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from "@/src/i18n/routing";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "hr" }>;
}) {
  // Resolve params since it could be a Promise
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <GridSmallBackground />
          <div className="content-wrapper">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}