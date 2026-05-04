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
        Amir Alvi<br />
        45 Bibury Road<br />
        Birmingham<br />
        B28 0HG<br />
        <br />
        <strong>Backup Address:</strong><br />
        QFS Trade Tower plot no 250 lane 23<br />
        2nd Floor office 202 precinct 10 a bahria town karachi. Po box 75340<br />
        Phone: 0121 294 4535
      </p>

      <p className="accent-text">Email</p>

      <p>
        <a href="mailto:support@andataoutsource.com">support@andataoutsource.com</a>
      </p>

      <p className="accent-text">Business Hours</p>

      <p>
        Monday – Saturday: 9:00 AM – 6:00 PM (GMT)<br />
        Sunday: Closed
      </p>
    </div>
  );
}
