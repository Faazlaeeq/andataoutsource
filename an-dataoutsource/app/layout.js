import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: {
    default: 'AN Dataoutsource — Your Trusted Outsourcing Partner',
    template: '%s | AN Dataoutsource',
  },
  description:
    'AN Dataoutsource delivers premium data management, IT services, contact center, and virtual assistant solutions. Achieve cost savings with reliable, secure, and scalable outsourcing.',
  keywords: [
    'outsourcing',
    'data management',
    'IT services',
    'BPO',
    'contact center',
    'virtual assistant',
    'AN Dataoutsource',
  ],
  openGraph: {
    title: 'AN Dataoutsource — Your Trusted Outsourcing Partner',
    description:
      'Premium outsourcing services for data management, IT, contact center, and more.',
    type: 'website',
  },
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
