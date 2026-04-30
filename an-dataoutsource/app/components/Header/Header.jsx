'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Implementation', href: '/implementation' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Security & Privacy', href: '/security' },
  { label: 'Quote', href: '/quote' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      {/* Top accent bar */}
      <div className={styles.topBar}></div>

      {/* Logo + Search row */}
      <div className={styles.logoRow}>
        <div className={styles.logoRowInner}>
          <Link href="/" className={styles.logoLink}>
            <span className={styles.logoAccent}>AN</span>
            <span className={styles.logoText}> Dataoutsource</span>
          </Link>
          <div className={styles.searchBox}>
            <input type="text" className={styles.searchInput} />
            <button className={styles.searchBtn}>Search</button>
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href || 
              (link.href === '/services' && pathname === '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
