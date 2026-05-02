import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Trends from "@/components/site/Trends";
import Contacts from "@/components/site/Contacts";
import ODS from "@/components/site/ODS";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Trends />
        <Contacts />
        <ODS />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
