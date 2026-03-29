import { Card } from "@/components_standard/Card";
import { Brain, Users, Heart, MessageCircle, Baby } from "lucide-react";
import { Sections } from "./contsComponents";

const Sobre = () => {
  const services = [
    {
      icon: { mobile: 24, desktop: 28 },
      iconComponent: Heart,
      title: "Psicoterapia para Adultos",
      description:
        "Um espaço seguro para acolher suas emoções, compreender desafios e construir caminhos mais saudáveis. Atendimentos online com escuta acolhedora e personalizada para suas necessidades.",
    },
    {
      icon: { mobile: 24, desktop: 28 },
      iconComponent: Brain,
      title: "Acompanhamento Psicológico na Gestação",
      description:
        "Suporte emocional durante toda a gravidez, ajudando a lidar com ansiedade, medos, mudanças e expectativas desse momento tão importante.",
    },
    {
      icon: { mobile: 24, desktop: 28 },
      iconComponent: MessageCircle,
      title: "Apoio no Pós-Parto e Puerpério",
      description:
        "O pós-parto traz muitas transformações. Ofereço acolhimento emocional para mães que precisam de suporte nesse período de adaptação e novas descobertas.",
    },
    {
      icon: { mobile: 24, desktop: 28 },
      iconComponent: Baby,
      title: "Planejamento Familiar e Tentativas de Gravidez",
      description:
        "Acompanhamento psicológico para quem está planejando engravidar, passando por tentativas, expectativas ou dificuldades nesse processo.",
    },
    {
      icon: { mobile: 24, desktop: 28 },
      iconComponent: Users,
      title: "Desenvolvimento Familiar e Parentalidade",
      description:
        "Apoio emocional para fortalecer vínculos familiares, adaptação à chegada do bebê e construção de uma parentalidade mais consciente.",
    },
    {
      icon: { mobile: 24, desktop: 28 },
      iconComponent: Users,
      title: "Terapia Pessoal e Profissional",
      description:
        "Apoio psicológico para lidar com ansiedade, depressão, estresse e desafios da vida profissional. Um espaço de escuta e acolhimento para compreender suas dificuldades, fortalecer sua saúde emocional e promover equilíbrio entre vida pessoal e carreira.",
    },
  ];

  return (
    <section
      id={Sections.SOBRE}
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 bg-stone-200"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-stone-900 leading-tight">
            Serviços Oferecidos
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            Abordagens terapêuticas personalizadas para cada fase da sua jornada
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.iconComponent;
            return (
              <Card
                key={index}
                className="h-full"
                icon={
                  <>
                    <span className="block sm:hidden">
                      <Icon size={service.icon.mobile} />
                    </span>
                    <span className="hidden sm:block">
                      <Icon size={service.icon.desktop} />
                    </span>
                  </>
                }
                title={service.title}
              >
                <p className="text-center text-xs sm:text-sm md:text-base text-stone-700 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sobre;
