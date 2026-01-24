import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-stone-700 px-4 py-6 text-center text-sm text-slate-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-stone text-lg mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-teal-500" />
              Psicologia Clínica
            </h3>
            <p className="text-slate-400">
              Cuidando da sua saúde mental com profissionalismo, ética e
              acolhimento.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#servicos"
                  className="hover:text-teal-400 transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="hover:text-teal-400 transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="hover:text-teal-400 transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-teal-400 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg mb-4">Informações</h3>
            <ul className="space-y-2 text-slate-400">
              <li>CRP 06/XXXXX</li>
              <li>Atendimento presencial e online</li>
              <li>Sigilo profissional garantido</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2026 Psicologia Clínica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
