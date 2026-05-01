export const metadata = {
  title: 'Security & Privacy',
  description: 'AN Dataoutsource is SOC 2 Type II certified. Learn about our commitment to data security and privacy.',
};

export default function SecurityPage() {
  return (
    <div className="page-content">
      <h1>Security &amp; Privacy</h1>

      <p>
        At AN Dataoutsource, we take data security and privacy extremely seriously.
        We are committed to maintaining the highest standards of security, availability, 
        processing integrity, confidentiality, and privacy.
      </p>

      <p>
        Our security measures include:
      </p>

      <ul className="arrow-list">
        <li>Enterprise-grade firewalls and intrusion detection systems</li>
        <li>AES-256 encryption for all data at rest</li>
        <li>TLS 1.3 for all data in transit</li>
        <li>Multi-factor authentication (MFA) for all systems</li>
        <li>Regular third-party security audits and penetration testing</li>
        <li>Comprehensive employee background checks</li>
        <li>Mandatory security awareness training</li>
        <li>HIPAA-compliant data handling procedures</li>
        <li>Business continuity and disaster recovery plans</li>
        <li>24/7 security monitoring and incident response</li>
      </ul>
    </div>
  );
}
