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
  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as "en" | "hr")) {
    notFound();
  }  

  // Cast `locale` to the expected type if valid
  const validLocale = locale as "en" | "hr";

  const messages = await getMessages({ locale: validLocale });

  return (
    <html lang={validLocale}>
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