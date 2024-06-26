import About from "../../components/about";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import Services from "../../components/services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </>
  );
}
