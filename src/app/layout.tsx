import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CRP } from "@/constants/psicologa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title:
    "Nathály Bruza | Psicóloga Online - Ansiedade, Maternidade e Bem-estar",
  description: `Psicóloga clínica Nathály Bruza (${CRP}). Atendimento psicológico online para gestantes, mães e adultos. Ansiedade, depressão e pós-parto. Agende: (11) 96587-1150`,
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "Nathály Bruza | Psicóloga Online - Ansiedade, Maternidade e Bem-estar",
    description:
      "Atendimento psicológico online personalizado. Acolhimento profissional para ansiedade, depressão, gestação e bem-estar emocional.",
    type: "website",
    locale: "pt_BR",
    siteName: "Nathály Bruza - Psicologia Clínica",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nathály Bruza - Psicóloga Clínica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathály Bruza | Psicóloga Online",
    description:
      "Atendimento psicológico online para ansiedade, gestação e bem-estar. Agende: (11) 96587-1150",
  },
};

function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "#person",
        name: "Nathály Bruza",
        jobTitle: "Psicóloga Clínica",
        telephone: "+55-11-96587-1150",
        email: "nathalybruza@hotmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
      },
      {
        "@type": "MedicalBusiness",
        "@id": "#business",
        name: "Nathály Bruza - Psicologia Clínica",
        description:
          "Atendimento psicológico online com abordagem acolhedora e personalizada",
        image: "/perfil.jpeg",
        telephone: "+55-11-96587-1150",
        email: "nathalybruza@hotmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        medicalSpecialty: "Psicologia Clínica",
        priceRange: "$$",
        openingHours: "Mo-Fr 09:00-18:00",
        areaServed: {
          "@type": "Country",
          name: "Brasil",
        },
        provider: {
          "@id": "#person",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <head>
        <JsonLd />
        <link rel="preload" href="/fundo2.jpg" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
