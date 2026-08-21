import { Wind, ShieldCheck, Heart, Sparkles, AlertCircle, ArrowRight, Settings } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';
import hepaImg from '../assets/images/hepa-air-cleaner.jpg';
import hepaCtaBgImg from '../assets/images/hepa_cta_bg.jpg';

const HepaAirCleaner = () => {
  const benefits = [
    {
      title: "99.97% Particle Capture",
      desc: "Captures microscopic particles down to 0.3 microns in size, including dust, pollen, pet dander, and mold spores.",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />
    },
    {
      title: "Allergy & Asthma Relief",
      desc: "Significantly reduces airborne triggers, offering relief for household members who suffer from chronic respiratory issues.",
      icon: <Heart className="h-8 w-8 text-primary" />
    },
    {
      title: "Odor & Chemical Removal",
      desc: "Equipped with activated carbon filters to absorb cooking odors, pet smells, tobacco smoke, and harmful VOCs.",
      icon: <Sparkles className="h-8 w-8 text-primary" />
    }
  ];

  const specs = [
    { label: "Filtration Rating", value: "HEPA H13 (Medical Grade)" },
    { label: "Particulate Capture", value: "99.97% efficiency at 0.3 microns" },
    { label: "Coverage Area", value: "Up to 3,000 sq. ft. (Whole Home)" },
    { label: "Airflow Capacity", value: "300 CFM bypass configuration" },
    { label: "Pre-Filter Life", value: "6 months (carbon infused)" },
    { label: "HEPA Filter Life", value: "2 to 3 years" }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hepaImg} alt="HEPA Air Cleaner" className="w-full h-full object-cover opacity-45" />
        </div>
        <div className="absolute inset-0 bg-sky-900/30"></div>
        <div className="ambient-orb-dark bg-primary-light w-96 h-96 -top-12 -left-12 opacity-30"></div>
        <div className="ambient-orb-dark bg-cyan-500/20 w-80 h-80 bottom-0 right-10 animate-float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Whole-Home HEPA Air Cleaners</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Experience medical-grade air purification integrated directly into your central HVAC system.
          </p>
        </div>
      </section>

      {/* Main Benefits */}
      <Section bg="slate" className="relative z-10 -mt-10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <Card variant="glass" key={idx} className="p-8 text-center flex flex-col items-center">
              <div className="bg-gradient-to-br from-primary-light/20 to-primary/5 p-5 rounded-full shadow-inner mb-6 inline-block border border-primary/10">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 flex-grow leading-relaxed">{benefit.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section bg="white" className="relative overflow-hidden">
        <div className="ambient-orb bg-cyan-100/40 w-96 h-96 -bottom-20 -left-20 z-0"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How a Bypass HEPA System Works</h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              Unlike small portable air purifiers that only clean a single room, a whole-home HEPA air cleaner is professionally installed in a bypass configuration parallel to your main HVAC return duct.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              It continuously diverts a portion of return air, pulls it through three filtration stages (pre-filter, carbon, and HEPA media), and feeds the purified air back into the system to circulate throughout your entire home.
            </p>
            
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                <Settings className="h-5 w-5 mr-2 text-primary" />
                Three Stages of Pure Air
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-primary/10 text-primary font-bold h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm">1</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Carbon Pre-Filter</h4>
                    <p className="text-xs text-slate-600">Catches large lint, hair, and dust particles while absorbing initial odors.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-primary/10 text-primary font-bold h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm">2</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Activated Carbon Inner Filter</h4>
                    <p className="text-xs text-slate-600">Neutralizes gaseous pollutants, chemical vapors, and persistent household smells.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-primary/10 text-primary font-bold h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm">3</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">True HEPA Media Filter</h4>
                    <p className="text-xs text-slate-600">The final defense, trapping 99.97% of ultra-fine allergens and micro-particles.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Technical Specifications</h3>
            <div className="glass-panel rounded-2xl overflow-hidden shadow-lg border-white">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {specs.map((spec, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50/50" : "bg-white/50"}>
                      <td className="p-4 font-semibold text-slate-700 border-b border-slate-100">{spec.label}</td>
                      <td className="p-4 text-slate-600 border-b border-slate-100">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="glass-card p-4 rounded-xl flex items-center bg-amber-500/5 border border-amber-500/20">
              <AlertCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
              <p className="text-sm text-slate-700">
                <strong>Did you know?</strong> Traditional 1" furnace filters only protect the heating equipment. A dedicated bypass HEPA system is required to achieve true medical-grade home air purification.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-slate-900 relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <img src={hepaCtaBgImg} alt="Breathe Cleaner Air Today" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-slate-900/90"></div>
        <div className="ambient-orb-dark bg-primary w-96 h-96 right-0 top-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-glow">Breathe Cleaner Air Today</h2>
            <p className="text-primary-100 text-lg">Contact our indoor air quality experts for a free consultation and estimate.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button className="w-full md:w-auto box-glow shadow-primary text-lg px-8">Call (416) 800-0000</Button>
            <Button variant="glass" className="w-full md:w-auto text-lg px-8">Request Quote</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HepaAirCleaner;
