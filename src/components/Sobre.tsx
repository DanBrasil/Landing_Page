import { Card } from "@/components_standard/Card";
import { Brain, Users, Heart, MessageCircle } from "lucide-react";
import { Sections } from "./contsComponents";

const Sobre = () => {
  return (
    <section
      id={Sections.SERVICOS}
      className="flex flex-col w-full h-full py-20 px-4 mx-auto text-center bg-stone-200"
    >
      <div className="flex flex-col">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-stone-900">
            Serviços Oferecidos
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Abordagens terapêuticas personalizadas para cada fase da sua jornada
          </p>
        </div>
        <article className="flex flex-col md:flex-row justify-between w-full h-full gap-6">
          <Card icon={<Heart size={24} />}>
            <h2 className="text-xl font-semibold">Depressão</h2>
            <p className="text-center">
              Apoio psicológico para momentos difíceis.
            </p>
          </Card>
          <Card icon={<Brain size={24} />}>
            <h2 className="text-xl font-semibold">Ansiedade</h2>
            <p className="text-center">
              Apoio psicológico para momentos difíceis.
            </p>
          </Card>
          <Card icon={<MessageCircle size={24} />}>
            <h2 className="text-xl font-semibold">Ansiedade</h2>
            <p className="text-center">
              Apoio psicológico para momentos difíceis.
            </p>
          </Card>
          <Card icon={<Brain size={24} />}>
            <h2 className="text-xl font-semibold">Ansiedade</h2>
            <p className="text-center">
              Apoio psicológico para momentos difíceis.
            </p>
          </Card>
          <Card icon={<Users size={24} />}>
            <h2 className="text-xl font-semibold">Estresse</h2>
            <p className="text-center">
              Apoio psicológico para momentos difíceis.
            </p>
          </Card>
        </article>
      </div>
    </section>
  );
};
export default Sobre;
