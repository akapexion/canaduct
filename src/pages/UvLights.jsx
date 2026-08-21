import { Sun, Shield, Sparkles, CheckCircle, Flame, HelpCircle } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';
import uvImg from '../assets/images/uv-lights.jpg';
import uvShieldImg from '../assets/images/uv_shield.jpg';
import uvCtaBgImg from '../assets/images/uv-lights.jpg';

const UvLights = () => {
  const categories = [
    {
      title: "Coil Sanitizing UV Lights",
      desc: "Mounted inside your HVAC system directly facing the indoor cooling coil. They run 24/7 to prevent mold and bacterial biofilms from colonizing the wet surfaces.",
      icon: <Sun className="h-8 w-8 text-primary" />,
      features: ["Keeps cooling coils mold-free", "Improves heat transfer efficiency", "Runs continuously at low wattage"]
    },
    {
      title: "Air Sanitizing UV Systems",
      desc: "Installed in the return air duct. Designed to target and kill biological contaminants (viruses, bacteria, spores) in the air stream as it circulates through the ductwork.",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      features: ["Targets airborne pathogens", "Operates only when HVAC blower runs", "Provides full-home air sanitization"]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={uvImg} alt="UV Lights" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="absolute inset-0 bg-indigo-900/30"></div>
        <div className="ambient-orb-dark bg-violet-600/30 w-96 h-96 -top-12 -left-12 opacity-30"></div>
        <div className="ambient-orb-dark bg-indigo-500/20 w-80 h-80 bottom-0 right-10 animate-float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HVAC UV Germicidal Lights</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Harness the power of medical-grade ultraviolet light to sterilize airborne pathogens and prevent system mold.
          </p>
        </div>
      </section>

      {/* Main Configurations */}
      <Section bg="slate" className="relative z-10 -mt-10 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Dual-Action Sanitization</h2>
          <p className="text-slate-600">Choose the best configuration or combine both for absolute protection.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((cat, idx) => (
            <Card variant="glass" key={idx} className="p-8 flex flex-col h-full">
              <div className="bg-gradient-to-br from-primary-light/20 to-primary/5 p-5 rounded-full shadow-inner mb-6 inline-block border border-primary/10 self-center">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">{cat.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-center">{cat.desc}</p>
              <ul className="space-y-2 border-t border-slate-200/50 pt-4 mt-auto">
                {cat.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm text-slate-700 font-medium">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* The UV Advantage */}
      <Section bg="white" className="relative overflow-hidden">
        <div className="ambient-orb bg-indigo-100/40 w-96 h-96 -bottom-20 -left-20 z-0"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Science Behind UV-C Purification</h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              Air filters are designed to capture physical particles, but microscopic biological threats like bacteria and viruses can often slip through or colonize the filter itself.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              UV-C light operates at a specific germicidal frequency (254nm) that breaks down the DNA and RNA of biological organisms, rendering them sterile and unable to reproduce, effectively killing them.
            </p>
            
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-primary" />
                Why Install HVAC UV Lights?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="h-5 w-5 text-primary-light mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Biological Defense:</strong> Neutralizes flu viruses, cold bacteria, mold spores, and fungi circulating in your air supply.</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="h-5 w-5 text-primary-light mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Eradicate Odors:</strong> Eliminates smells caused by microbial growth on the damp evaporator coil or inside the ventilation ducts.</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="h-5 w-5 text-primary-light mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>HVAC Efficiency:</strong> Prevents slimy biofilm from building up on your AC coils, maintaining maximum heat transfer efficiency and lowering power costs.</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="h-5 w-5 text-primary-light mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Clean Drain Pans:</strong> Keeps drain pans clear of algae and mold, reducing the risk of condensate drain backups.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-[4/3] flex items-center justify-center border-4 border-white">
             <img src={uvShieldImg} alt="Ultraviolet Shield" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-slate-900 relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <img src={uvCtaBgImg} alt="Sanitize Air" className="w-full h-full object-cover opacity-35 mix-blend-luminosity" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-indigo-950/65 to-sky-900/60 z-0"></div>
        <div className="ambient-orb-dark bg-primary w-96 h-96 right-0 top-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-glow">Sanitize Your Indoor Air</h2>
            <p className="text-primary-100 text-lg">Speak to our HVAC technicians about integrating UV-C sterilization into your home today.</p>
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

export default UvLights;
