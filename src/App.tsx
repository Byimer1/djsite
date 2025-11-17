import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Packages } from './components/Packages';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Packages />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
