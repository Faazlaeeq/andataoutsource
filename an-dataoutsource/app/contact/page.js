export const metadata = {
  title: 'Contact',
  description: 'Contact AN Dataoutsource for inquiries, support, or to schedule a consultation.',
};

export default function ContactPage() {
  return (
    <div className="page-content">
      <h1>Contact</h1>

      <p className="accent-text">Head Office</p>

      <p>
        <strong>AN Dataoutsource</strong>
      </p>

      <p>
        M. Aamir Habib<br />
        45 Bibury Road<br />
        Birmingham<br />
        B28 0HG<br />
        Phone: 0121 294 4535
      </p>

      <p className="accent-text">Email</p>

      <p>
        <a href="mailto:support@andataoutsource.com">support@andataoutsource.com</a>
      </p>

      <p className="accent-text">Business Hours</p>

      <p>
        Monday – Friday: 9:00 AM – 6:00 PM (GMT)<br />
        Saturday – Sunday: Closed
      </p>
    </div>
  );
}
