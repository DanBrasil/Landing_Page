import {
  MessageCircle,
  HeartHandshake,
  CalendarCheck,
  Video,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Sections } from "./contsComponents";

const ComoFunciona = () => {
  const steps = [
    {
      number: 1,
      title: "Primeiro contato",
      description:
        "Você manda uma mensagem pelo WhatsApp. Sem formulários, sem fricção — só um oi para começarmos.",
      Icon: MessageCircle,
    },
    {
      number: 2,
      title: "Vamos nos conhecer",
      description:
        "Me apresento, escuto o que te trouxe até aqui e entendemos juntos o motivo da procura.",
      Icon: HeartHandshake,
    },
    {
      number: 3,
      title: "Marcamos a sessão",
      description:
        "Escolhemos um dia e horário que caibam na sua rotina. Tudo combinado de forma simples.",
      Icon: CalendarCheck,
    },
    {
      number: 4,
      title: "Como funciona o online",
      description:
        "Você recebe o link da sessão (Google Meet ou Zoom) e algumas orientações para se sentir confortável.",
      Icon: Video,
    },
    {
      number: 5,
      title: "O dia da sessão",
      description:
        "Nos encontramos no horário marcado. Um espaço seu, seguro e acolhedor — onde quer que você esteja.",
      Icon: Sparkles,
    },
  ];

  return (
    <section id={Sections.DEPOIMENTOS} className="py-20 bg-stone-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-teal-700 mb-3">
            Como funciona
          </span>
          <h2 className="text-3xl sm:text-4xl mb-4 text-stone-900">
            Do primeiro oi à sessão
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Um caminho simples e acolhedor — pensado para que você se sinta à
            vontade desde o início.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const { Icon } = step;
            const isLast = index === steps.length - 1;
            const lastNeedsCenter = steps.length % 3 === 2;

            return (
              <div
                key={index}
                className={`relative border-stone-200 bg-white rounded-lg p-7 overflow-hidden ${
                  isLast && lastNeedsCenter ? "lg:col-start-2" : ""
                }`}
              >
                <span
                  aria-hidden
                  className="absolute top-3 right-5 text-7xl font-bold text-stone-100 leading-none select-none pointer-events-none"
                >
                  {String(step.number).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div className="w-11 h-11 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="block text-xs font-semibold tracking-wider uppercase text-teal-700 mb-2">
                    Passo {step.number}
                  </span>

                  <h3 className="text-stone-900 font-semibold text-lg mb-2">
                    {step.title}
                  </h3>

                  <p className="text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-700 text-lg mb-5 font-medium">
            Pronto para dar o primeiro passo? Estou aqui quando você quiser.
          </p>
          <a
            href="https://wa.me/+5511965871150"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 rounded-md hover:bg-[#1ebe5d] transition-colors duration-300 text-base font-semibold text-white shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp className="w-5 h-5 text-white" />
            Agendar minha consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
