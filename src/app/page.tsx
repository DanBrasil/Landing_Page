import Header from "@/components/Header";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[url('/fundo_psicologo.jpg')] bg-cover bg-top">
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="relative z-10">
        <Header />
        <Sobre />
      </div>
    </main>
  );
}
