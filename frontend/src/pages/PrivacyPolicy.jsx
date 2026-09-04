import PageHeader from '../components/PageHeader';

const sections = [
  {
    title: 'Information We Collect',
    body: 'When you apply to a program, subscribe to our newsletter, or contact us, we collect information such as your name, email address, phone number, company details, and any information you choose to share in application forms.',
  },
  {
    title: 'How We Use Your Information',
    body: 'We use the information you provide to evaluate program applications, communicate with founders and mentors, operate our services, send updates you have opted into, and improve the Lokha Innovation ecosystem.',
  },
  {
    title: 'Sharing of Information',
    body: 'We do not sell your personal information. We may share limited information with mentors, investors, or partners directly involved in a program you are part of, and with service providers who help us operate our platform, under confidentiality obligations.',
  },
  {
    title: 'Data Security',
    body: 'We use reasonable technical and organizational safeguards to protect the information we hold. No method of transmission or storage is completely secure, and we continually work to improve our protections.',
  },
  {
    title: 'Your Choices',
    body: 'You may unsubscribe from our newsletter at any time, and can request access to, correction of, or deletion of your personal information by contacting us using the details below.',
  },
  {
    title: 'Contact Us',
    body: 'If you have questions about this policy or how your data is handled, reach out to us at hello@lokhainnovation.com.',
  },
];

export default function PrivacyPolicy() {
  return (
    <div>
      <PageHeader eyebrow="Legal" title="Privacy Policy" description="How Lokha Innovation collects, uses, and protects your information." />
      <section className="py-20 md:py-28 bg-paper">
        <div className="container-x max-w-3xl">
          <p className="text-ink-700 leading-relaxed mb-10">Last updated: January 2026. This policy explains how Lokha Innovation handles personal information collected through our website and programs.</p>
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-2xl mb-3">{s.title}</h2>
                <p className="text-ink-700 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
