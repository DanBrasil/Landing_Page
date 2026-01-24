import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative min-h-screen bg-[url('/fundo2.jpg')] bg-cover bg-top ">
      <div className="absolute inset-0  bg-black/50 flex flex-col  justify-start md:justify-center items-center md:items-start p-4 md:p-16 h-full gap-6">
        <div className="flex flex-col gap-4 text-center md:text-center ">
          <div className="flex flex-col items-center justify-center md:justify-start w-170 gap-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 text-left font-bold">
              Cuidando da sua saúde mental com acolhimento e profissionalismo
            </h1>
            <h2 className="text-2xl  text-stone-300  text-left font-light">
              Encontre equilíbrio emocional e bem-estar em um espaço seguro e
              confidencial. Atendimento personalizado para suas necessidades.
            </h2>
          </div>
        </div>

        <div className="flex  justify-center md:justify-end text-white ">
          <a
            href="https://wa.me/+5511965871150"
            target="_blank"
            className=" flex flex-row  bg-stone-500 px-6 py-3 gap-2 rounded-md hover:bg-stone-600 transition"
          >
            <FaWhatsapp className="w-6 h-6 text-white" />
            Converse pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
