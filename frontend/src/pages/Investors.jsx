import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { investorTypes } from '../config/content.config';
import { images } from '../assets/media';

export default function Investors() {
  return (
    <div>
      <PageHeader
        eyebrow="Investors"
        title="Connect with the Right Capital for Your Startup"
        description="Access funding opportunities that match your startup's stage and growth needs — from angel investors and venture capital to corporate investments and government grants."
        image={images.investorsHero}
        clear
      />

      <section className="py-20 md:py-28 bg-paper">
        <div className="container-x grid md:grid-cols-2 gap-8">
          {investorTypes.map((inv, idx) => (
            <Reveal key={inv.name} delay={idx * 80} className="border hairline overflow-hidden hover:border-signal transition-colors group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={inv.image}
                  alt={inv.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-paper text-ink-900 text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="p-10">
                <h2 className="font-display text-2xl mb-3">{inv.name}</h2>
                <p className="text-ink-700 leading-relaxed">{inv.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-24 overflow-hidden text-center">
        <img src={images.investorsCta} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/95 via-sky-500/90 to-sky-600/95" />
        <div className="container-x relative">
          <Reveal>
            <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight max-w-2xl mx-auto text-paper tracking-tight">Invest with Lokha Innovation</h2>
            <p className="text-paper/80 mt-5 max-w-lg mx-auto">Interested in investing with us? Complete our Investor Application to connect with promising startups from the Lokha Innovation ecosystem.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link to="/become-an-investor" className="inline-flex items-center gap-2 bg-paper text-ink-900 font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors">
                Complete Investor Application
              </Link>
              <Link to="/community" className="inline-flex items-center gap-2 border border-paper/40 text-paper font-semibold px-6 py-3 rounded-full hover:border-paper transition-colors">
                Join Our Community
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
