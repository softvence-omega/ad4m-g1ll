import "./globals.css";

export const metadata = {
  title: "NXD",
  description:
    "NDXI is a Melbourne-based consultancy dedicated to assist in transforming organisational operations. Our expertise lies in identifying inefficiencies, optimising workflows, and implementing smart solutions to help businesses achieve operational excellence.At NDXI, we take pride in offering customised solutions tailored to meet your unique business requirements and client growth. By concentrating on process mining, improvement, and automation, we ensure that your organisation not only adapts to change but also excels in an increasingly competitive market, especially in Home Care.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
         */}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
