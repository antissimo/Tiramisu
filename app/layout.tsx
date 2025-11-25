import './globals.css';
import Footer from './components/Footer';

import Navigation from './components/Navbar';
import { ThemeProvider } from "./context/ThemeContext";

export const metadata = {
  title: 'Tiramisu'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
    <html lang="hr">
      <body className="flex flex-col min-h-screen">
        <Navigation />
        {/* main flex-1 will fill the remaining space between nav and footer */}
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
    </ThemeProvider>
  );
}

