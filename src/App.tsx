import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App(){
  return (
    <main className="bg-[#09090b] min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Footer/>
    </main>
  );
}