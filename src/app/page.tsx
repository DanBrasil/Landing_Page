import Comments from "@/components/comments";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Sessões from "@/components/Sessão";
import Sobre from "@/components/Sobre";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Sobre />
      <Sessões />
      <Comments />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
