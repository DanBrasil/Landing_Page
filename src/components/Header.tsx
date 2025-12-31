import Image from "next/image";
import { RiBrainFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full px-4 py-4  ">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/perfil.jpeg"
            alt="Psicóloga Nathály Bruza"
            width={180}
            height={180}
            className="rounded-2xl object-cover shadow-lg"
            priority
          />
        </div>

        <div className="flex flex-col gap-4 text-center md:text-center ">
          <div className="flex items-center justify-center md:justify-start">
            <RiBrainFill className="text-stone-500 w-10 h-10 mr-2" />
            <h1 className="text-3xl md:text-4xl font-bold text-stone-600 font-serif">
              Psicóloga Nathály Bruza
            </h1>
          </div>

          <p className="text-stone-600 text-lg">
            Você não precisa passar por tudo sozinho
          </p>
        </div>

        <div className="flex  justify-center md:justify-end text-white ">
          <a
            href="https://wa.me/+5511965871150"
            target="_blank"
            className=" flex flex-row  bg-stone-500 px-6 py-3 gap-2 rounded-full hover:bg-stone-600 transition"
          >
            <FaWhatsapp className="w-6 h-6 text-white" />
            Agende sua sessão
          </a>
        </div>
      </div>
    </header>
  );
}
