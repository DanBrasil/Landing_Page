import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 w-full border-t border-slate-200 bg-stone-700 px-3 sm:px-4 py-8 sm:py-10 text-center text-sm text-slate-500 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-center sm:text-left">
            <h3 className="text-white text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2 justify-center sm:justify-start">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
              Psicologia Clínica
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Cuidando da sua saúde mental com profissionalismo, ética e
              acolhimento.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white text-base sm:text-lg mb-3 sm:mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#servicos"
                  className="text-sm sm:text-base hover:text-teal-400 transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-sm sm:text-base hover:text-teal-400 transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-sm sm:text-base hover:text-teal-400 transition-colors"
                >
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white text-base sm:text-lg mb-3 sm:mb-4">
              Informações
            </h3>
            <ul className="space-y-2 text-slate-400">
              <li className="text-sm sm:text-base">CRP 06/XXXXX</li>
              <li className="text-sm sm:text-base">Atendimento online</li>
              <li className="text-sm sm:text-base">
                Sigilo profissional garantido
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 sm:pt-8 text-center text-slate-400">
          <p className="text-xs sm:text-sm">
            &copy; 2026 Psicologia Clínica. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
