import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ArthurConcierge from '../ArthurConcierge';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ArthurConcierge />
    </div>
  );
}
