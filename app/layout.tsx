import './globals.css';
import Navigation from './components/Navbar';

export const metadata = {
  title: 'Plavi Oblutak',
  description: 'Stručnjaci za sanacije, restauracije i izgradnju objekata',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <body>
        <Navigation />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
