import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-gray-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-900 text-white">CNC</span>
            <span className="text-sm font-semibold">Axiom CNC Manufacturing</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#capabilities" className="hover:text-gray-900">Capabilities</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Capabilities />
      </main>

      <Footer />
    </div>
  );
}

export default App;
