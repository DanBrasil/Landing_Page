import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Sections } from "./contsComponents";

const Sessões = () => {
  const qualifications = [
    "CRP 06/XXXXX - Conselho Regional de Psicologia",
    "Formação em Psicologia Clínica",
    "Mais de 2 anos de experiência",
  ];
  return (
    <section id={Sections.SOBRE} className="py-20 bg-white">
      <div className="flex flex-row justify-between items-center w-full p-16">
        <div className="flex flex-col w-screen max-w-2xl order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl mb-6 text-slate-900">
            Sobre a Profissional
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Olá! Sou psicóloga clínica dedicada a ajudar pessoas a encontrarem
            equilíbrio emocional e bem-estar. Minha abordagem é acolhedora,
            empática e baseada em evidências científicas.
          </p>
          <p className="text-lg text-slate-600 mb-8">
            Acredito que cada pessoa é única e merece um atendimento
            personalizado. Juntos, vamos trabalhar para que você alcance seus
            objetivos e viva uma vida mais plena e significativa.
          </p>

          <div className="space-y-3">
            {qualifications.map((qual, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-stone-600 flex-shrink-0 mt-0.5" />
                <span className="text-stone-700">{qual}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="">
            <div className=" ">
              <Image
                src="/perfil.jpeg"
                alt="Psicóloga Nathály Bruza"
                width={500}
                height={500}
                className="rounded-2xl object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sessões;
