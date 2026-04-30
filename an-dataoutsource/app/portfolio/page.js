export const metadata = {
  title: 'Portfolio',
  description: 'Explore our industry experience across healthcare, call centers, insurance, media, consulting, and accounting.',
};

export default function PortfolioPage() {
  return (
    <div className="page-content">
      <h1>Portfolio</h1>

      <ul className="arrow-list">
        <li>
          <span className="category-heading">Healthcare</span>
          <ul className="sub-list">
            <li>Medical Claims Processing Provider, Hospital and Dental</li>
            <li>Provider Data Management</li>
            <li>Provider Directory Updates</li>
            <li>Network Management and Marketing Campaigns</li>
            <li>Medical Billing</li>
            <li>EDI 837 Data Conversions</li>
            <li>Mail Room and Scanning</li>
            <li>CVO (Credentialing Verification Organization) back operations</li>
          </ul>
        </li>

        <li>
          <span className="category-heading">Call Centers</span>
          <ul className="sub-list">
            <li>Inbound and Outbound Call Centers (Sales)</li>
            <li>Inbound and Outbound Call Centers (Customer Support)</li>
            <li>Data collection Support</li>
            <li>Chat Support</li>
          </ul>
        </li>

        <li>
          <span className="category-heading">Insurance Back-Office</span>
          <ul className="sub-list">
            <li>Back-Office Insurance Support (Hawksoft)</li>
            <li>Back-Office Accounting for Insurance Agency (QuickBooks)</li>
          </ul>
        </li>

        <li>
          <span className="category-heading">Media and Information</span>
          <ul className="sub-list">
            <li>Sports Analytics and Data Processing</li>
          </ul>
        </li>

        <li>
          <span className="category-heading">Consulting and Professional Services</span>
          <ul className="sub-list">
            <li>E-Commerce Store Development and Implementation</li>
          </ul>
        </li>

        <li>
          <span className="category-heading">Accounting Back-Office</span>
          <ul className="sub-list">
            <li>Bank Reconciliation</li>
            <li>Review Accuracy Of reports.</li>
            <li>A/R Support</li>
            <li>A/P Support</li>
            <li>Record Keeping</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
