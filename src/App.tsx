import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutSection } from './components/AboutSection';
import { ProductsShowcase } from './components/ProductsShowcase';
import { ServicesSection } from './components/ServicesSection';
import { FieldGallery } from './components/FieldGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import './App.css';

const validPages = ['inicio', 'sobre', 'servicos', 'produtos', 'aplicacoes', 'contato'];

export function App() {
  const getPageFromHash = (): string => {
    const rawHash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
    return validPages.includes(rawHash) ? rawHash : 'inicio';
  };

  const [currentPage, setCurrentPage] = useState<string>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    const target = validPages.includes(page) ? page : 'inicio';
    setCurrentPage(target);
    window.location.hash = `#/${target}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Navbar activePage={currentPage} onNavigate={navigateTo} />
      
      <main className="main-content page-transition-wrapper">
        {currentPage === 'inicio' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'sobre' && <AboutSection />}
        {currentPage === 'servicos' && <ServicesSection />}
        {currentPage === 'produtos' && <ProductsShowcase />}
        {currentPage === 'aplicacoes' && <FieldGallery />}
        {currentPage === 'contato' && <ContactSection />}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
