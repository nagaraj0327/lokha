import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import ServiceCard from '../components/ServiceCard';
import { services } from '../config/content.config';
import { images } from '../assets/media';

export default function Services() {
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Everything a founder needs, under one roof"
        description="Startup mentorship, business development, product development, legal, financial and marketing support — all matched to your stage."
        image={images.bgmen}
        clear
        boldTitle
      />

      <section className="py-20 md:py-28 bg-paper">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-signal mb-4">How We Support Founders</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">Comprehensive support for founders.</h2>
            <p className="mt-5 text-ink-700 text-lg">End-to-end support to help you build, launch and scale with confidence.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <ServiceCard key={s.name} service={s} delay={idx * 60} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 bg-gradient-to-br from-[#00D4FF] to-[#0077C2] text-ink-900 overflow-hidden">
        <img src={images.bgf} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.12] mix-blend-multiply" />
        <div className="container-x relative text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl mx-auto">Need a service that isn't listed?</h2>
          <p className="text-ink-900/70 mt-5 max-w-md mx-auto">Tell us what your startup needs — we'll connect you with the right mentor or partner.</p>
          <Link to="/contact" className="bg-ink-900 text-paper font-semibold px-8 py-4 mt-8 inline-flex rounded-full">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
