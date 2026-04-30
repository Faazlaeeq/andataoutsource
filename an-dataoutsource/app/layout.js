import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: {
    default: 'AN Dataoutsource — Your Outsourcing Partner',
    template: '%s | AN Dataoutsource',
  },
  description: 'AN Dataoutsource offers comprehensive outsourcing solutions including IT services, data management, contact center services, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
