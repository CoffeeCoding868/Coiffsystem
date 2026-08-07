import { useRouter } from '@/router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { ReviewsPage } from '@/pages/ReviewsPage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  const { route } = useRouter();

  const page = (() => {
    switch (route) {
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'gallery': return <GalleryPage />;
      case 'reviews': return <ReviewsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  })();

  return (
    <div className="min-h-screen bg-paper-50">
      <Header current={route} />
      <main>{page}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
