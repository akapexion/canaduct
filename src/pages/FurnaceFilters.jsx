import { ShieldAlert, CheckCircle, Flame, Layers, AlertCircle } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';

const FurnaceFilters = () => {
  const mervRatings = [
    {
      merv: "MERV 8",
      level: "Basic Protection",
      desc: "Captures common residential allergens like large dust particles, lint, pollen, and dust mites.",
      useCase: "Ideal for standard households without pets or allergies."
    },
    {
      merv: "MERV 11",
      level: "Enhanced Protection",
      desc: "Triggers higher containment capturing smaller particles, including pet dander, mold spores, and fine dust.",
      useCase: "Recommended for homes with pets or family members with mild allergies."
    },
    {
      merv: "MERV 13",
      level: "Superior Protection",
      desc: "Hospital-level filtration capturing bacteria, microscopic allergens, smoke, smog, and virus carriers.",
      useCase: "Best for asthma sufferers or those desiring the cleanest possible air."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="ambient-orb-dark bg-emerald-600/20 w-96 h-96 -top-12 -left-12 opacity-30"></div>
        <div className="ambient-orb-dark bg-teal-500/20 w-80 h-80 bottom-0 right-10 animate-float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">High-Efficiency Furnace Filters</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Protect your heating system and clean your indoor air with premium HVAC media filters.
          </p>
        </div>
      </section>

      {/* MERV Comparison */}
      <Section bg="slate" className="relative z-10 -mt-10 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Understanding MERV Ratings</h2>
          <p className="text-slate-600">Minimum Efficiency Reporting Value (MERV) measures how effectively a filter traps particles of various sizes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mervRatings.map((rating, idx) => (
            <Card variant="glass" key={idx} className="p-8 flex flex-col h-full border border-slate-200/40">
              <div className="bg-gradient-to-br from-primary-light to-primary text-white font-extrabold text-2xl h-16 w-24 rounded-2xl flex items-center justify-center shadow-md mb-6 self-center border border-primary-light">
                {rating.merv}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">{rating.level}</h3>
              <p className="text-slate-600 mb-4 flex-grow leading-relaxed text-center text-sm">{rating.desc}</p>
              <div className="bg-slate-100/50 rounded-xl p-4 border border-slate-200/50 text-xs text-slate-700 mt-auto">
                <strong>Best For:</strong> {rating.useCase}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Deep Media Filters */}
      <Section bg="white" className="relative overflow-hidden">
        <div className="ambient-orb bg-emerald-100/40 w-96 h-96 -bottom-20 -left-20 z-0"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Upgrade to 5" Deep Media Filters</h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              Standard 1" fiberglass filters only block large dust bunnies to prevent furnace damage. They do very little to improve air quality and clog up quickly, putting strain on your system.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our 5" pleated media filters offer up to nine times more surface area than standard filters. This allows them to capture fine particles without restricting vital airflow, and they last up to 6–12 months!
            </p>
            
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                <Layers className="h-5 w-5 mr-2 text-primary" />
                Why Upgrade Filter Media?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="h-5 w-5 text-primary-light mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Protect System Life:</strong> Prevents dust buildup on furnace blower motors and air conditioning coils, avoiding costly repairs.</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="h-5 w-5 text-primary-light mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Fewer Replacements:</strong> 5" media filters typically only need replacement once or twice a year instead of every 30 days.</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="h-5 w-5 text-primary-light mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Unrestricted Airflow:</strong> Larger surface area keeps static pressure low, ensuring your HVAC system operates efficiently.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center border-4 border-white">
               <div className="glass-panel p-10 rounded-2xl text-center">
                 <Layers className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                 <p className="text-slate-800 font-bold tracking-widest uppercase">Multi-Layer Filtration</p>
               </div>
            </div>
            
            <div className="glass-card p-4 rounded-xl flex items-center bg-red-500/5 border border-red-500/20">
              <ShieldAlert className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
              <p className="text-sm text-slate-700 font-medium">
                <strong>Warning:</strong> Running a system with a dirty, clogged filter is the #1 cause of HVAC breakdowns. Check your filter monthly, and change it at least every season.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-slate-900 relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-slate-900"></div>
        <div className="ambient-orb-dark bg-primary w-96 h-96 right-0 top-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-glow">Optimize Your HVAC Performance</h2>
            <p className="text-primary-100 text-lg">Contact our team to get the correct filter replacement or request media cabinet upgrades.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button className="w-full md:w-auto box-glow shadow-primary text-lg px-8">Call (416) 800-0000</Button>
            <Button variant="glass" className="w-full md:w-auto text-lg px-8">Order Filters</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FurnaceFilters;
