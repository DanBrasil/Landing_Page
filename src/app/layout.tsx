import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathály Bruza - Psicóloga Clínica | Atendimento Online em São Paulo",
  description:
    "Psicóloga clínica Nathály Bruza (CRP 06/XXXXX). Atendimento psicológico online para ansiedade, depressão e estresse. Agende sua consulta: (11) 96587-1150",
  openGraph: {
    title: "Nathály Bruza - Psicóloga Clínica",
    description:
      "Atendimento psicológico online personalizado. Acolhimento profissional para ansiedade, depressão e bem-estar emocional.",
    type: "website",
    locale: "pt_BR",
    siteName: "Nathály Bruza - Psicologia Clínica",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathály Bruza - Psicóloga Clínica",
    description:
      "Atendimento psicológico online. Agende sua consulta: (11) 96587-1150",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
