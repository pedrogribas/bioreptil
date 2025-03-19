import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;