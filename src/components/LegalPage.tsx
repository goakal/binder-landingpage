import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import logoWordmark from '@/assets/heybinder-logo-wordmark.png';
import '@/pages/Heybinder.css';
import './LegalPage.css';

const LINKS = [
  { to: '/terms', label: 'Terms & Conditions' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/data-deletion', label: 'Data Deletion' },
];

interface LegalPageProps {
  title: string;
  effectiveDate?: string;
  children: ReactNode;
}

const LegalPage = ({ title, effectiveDate, children }: LegalPageProps) => (
  <div className="hb-legal">
    <header className="hb-legal-header">
      <Link to="/" aria-label="Binder home">
        <img src={logoWordmark} alt="Binder" width={122} height={40} />
      </Link>
      <Link to="/" className="hb-legal-back">← Back to home</Link>
    </header>

    <main className="hb-legal-main">
      <h1>{title}</h1>
      {effectiveDate && <p className="hb-legal-date">{effectiveDate}</p>}
      <div className="hb-legal-body">{children}</div>
    </main>

    <footer className="hb-legal-footer">
      <nav>
        {LINKS.map(({ to, label }) => (
          <Link key={to} to={to}>{label}</Link>
        ))}
      </nav>
      <p>© {new Date().getFullYear()} heybinder.com · Made for humans and their AI agents.</p>
    </footer>
  </div>
);

export default LegalPage;
