import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative min-h-screen bg-[url('/fundo2.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center md:items-start p-4 sm:p-6 md:p-12 lg:p-16 h-full gap-6 sm:gap-8">
        <div className="flex flex-col gap-4 sm:gap-6 text-center md:text-left max-w-4xl">
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-3 sm:gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-3 sm:mb-4 md:mb-6 font-bold leading-tight">
              Cuidando da sua saúde mental com acolhimento e profissionalismo
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-stone-300 font-light leading-relaxed">
              Encontre equilíbrio emocional e bem-estar em um espaço seguro e
              confidencial. Atendimento personalizado para suas necessidades.
            </h2>
          </div>
        </div>

        <div className="flex justify-center md:justify-start text-white w-full md:w-auto">
          <a
            href="https://wa.me/+5511965871150"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center bg-stone-500 px-4 sm:px-6 py-2.5 sm:py-3 gap-2 rounded-md hover:bg-stone-600 transition-colors duration-300 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            Converse pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
