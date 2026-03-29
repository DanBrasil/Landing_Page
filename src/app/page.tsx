import Comments from "@/components/comments";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Sessões from "@/components/Sessão";
import Sobre from "@/components/Sobre";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1 w-full">
        <Header />
        <Sobre />
        <Sessões />
        <Comments />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
