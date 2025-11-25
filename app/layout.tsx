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
          {/* Sticky navigation */}
          <Navigation />

          {/* Main content */}
          <main className="flex-1"> {/* pt-16 = approx nav height */}
            {children}
          </main>

          {/* Footer */}
          <Footer className="mt-auto" />
        </body>
      </html>
    </ThemeProvider>
  );
}
