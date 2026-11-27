import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import DeferredArthurConcierge from '../DeferredArthurConcierge';
import MobileCallBar from '../MobileCallBar';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen pb-16 md:pb-0">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <DeferredArthurConcierge />
      <MobileCallBar />
    </div>
  );
}
