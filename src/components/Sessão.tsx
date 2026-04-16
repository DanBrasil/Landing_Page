import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { CRP } from "@/constants/psicologa";
import { Sections } from "./contsComponents";

const Sessões = () => {
  const qualifications = [
    `${CRP} - Conselho Regional de Psicologia`,
    "Formação em Psicologia Clínica",
    "Mais de 2 anos de experiência",
  ];
  return (
    <section
      id={Sections.SERVICOS}
      className="py-12 sm:py-16 md:py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Texto - ordem 2 em mobile, 1 em desktop */}
          <div className="flex flex-col w-full lg:max-w-2xl order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-slate-900 font-bold">
              Sobre a Profissional
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-4 sm:mb-6 leading-relaxed">
              Olá! Sou psicóloga clínica dedicada a ajudar pessoas a encontrarem
              equilíbrio emocional e bem-estar. Minha abordagem é acolhedora,
              empática e baseada em evidências científicas.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              Acredito que cada pessoa é única e merece um atendimento
              personalizado. Juntos, vamos trabalhar para que você alcance seus
              objetivos e viva uma vida mais plena e significativa.
            </p>

            <div className="space-y-2 sm:space-y-3">
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-stone-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-stone-700">
                    {qual}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem - ordem 1 em mobile, 2 em desktop */}
          <div className="order-1 lg:order-2 w-full lg:w-auto flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <Image
                src="/perfil.jpeg"
                alt="Psicóloga Nathály Bruza"
                width={500}
                height={500}
                className="rounded-2xl object-cover shadow-lg w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 flex justify-center">
          <a
            href="https://wa.me/+5511965871150"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center bg-[#25D366] px-6 py-3 gap-2 rounded-md hover:bg-[#1ebe5d] transition-colors duration-300 text-base font-semibold text-white shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp className="w-5 h-5 text-white" />
            Agendar minha consulta
          </a>
        </div>
      </div>
    </section>
  );
};
export default Sessões;
