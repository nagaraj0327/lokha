import PageHeader from '../components/PageHeader';

const sections = [
  {
    title: 'Acceptance of Terms',
    body: 'By accessing this website or applying to a Lokha Innovation program, you agree to these Terms & Conditions. If you do not agree, please do not use our services.',
  },
  {
    title: 'Programs & Applications',
    body: 'Submitting an application does not guarantee acceptance into any program. Lokha Innovation reserves the right to accept, reject, or discontinue any application or program at its discretion.',
  },
  {
    title: 'Intellectual Property',
    body: 'All content on this website — including text, graphics, logos, and design — is the property of Lokha Innovation or its licensors and may not be reproduced without permission.',
  },
  {
    title: 'Confidentiality',
    body: 'Founders, mentors, and partners engaging with our programs are expected to respect the confidentiality of information shared within the ecosystem, including startup ideas and business plans.',
  },
  {
    title: 'Limitation of Liability',
    body: 'Lokha Innovation provides mentorship, resources, and introductions in good faith but does not guarantee business outcomes, funding, or specific results for any startup or founder.',
  },
  {
    title: 'Changes to These Terms',
    body: 'We may update these Terms & Conditions from time to time. Continued use of our website or programs after changes are posted constitutes acceptance of the updated terms.',
  },
  {
    title: 'Contact Us',
    body: 'For questions about these terms, contact us at hello@lokhainnovation.com.',
  },
];

export default function TermsConditions() {
  return (
    <div>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" description="The terms that govern your use of the Lokha Innovation website and programs." />
      <section className="py-20 md:py-28 bg-paper">
        <div className="container-x max-w-3xl">
          <p className="text-ink-700 leading-relaxed mb-10">Last updated: January 2026. Please read these terms carefully before using our website or applying to our programs.</p>
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
