import { Droplet, Thermometer, ShieldAlert, CheckCircle, ArrowRight, Settings } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';

const Humidifier = () => {
  const options = [
    {
      title: "Bypass Humidifiers",
      desc: "Water is trickled across a humidifier pad, and the furnace blower passes air through it. Highly cost-effective and reliable.",
      icon: <Settings className="h-8 w-8 text-primary" />,
      features: ["No internal fan (uses HVAC fan)", "Low maintenance", "Ideal for small to medium homes"]
    },
    {
      title: "Power Humidifiers",
      desc: "Features a built-in fan that forces air through the water panel. Delivers up to 20% more moisture than bypass units.",
      icon: <Droplet className="h-8 w-8 text-primary" />,
      features: ["Internal power fan", "Higher output capacity", "Ideal for larger homes"]
    },
    {
      title: "Steam Humidifiers",
      desc: "The gold standard of humidification. Electrically boils water to produce steam, introducing pure moisture into the ductwork.",
      icon: <Thermometer className="h-8 w-8 text-primary" />,
      features: ["Ultra-precise control", "Works without heat cycle running", "Maximum humidity output"]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="ambient-orb-dark bg-primary-light w-96 h-96 -top-12 -left-12 opacity-30"></div>
        <div className="ambient-orb-dark bg-blue-500/20 w-80 h-80 bottom-0 right-10 animate-float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Whole-Home Humidifiers</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Say goodbye to dry winter air, static shocks, and dry skin with customized moisture control.
          </p>
        </div>
      </section>

      {/* Humidifier Options */}
      <Section bg="slate" className="relative z-10 -mt-10 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose the Right Option for Your Home</h2>
          <p className="text-slate-600">We offer professional installation for all central humidifier classes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, idx) => (
            <Card variant="glass" key={idx} className="p-8 flex flex-col h-full">
              <div className="bg-gradient-to-br from-primary-light/20 to-primary/5 p-5 rounded-full shadow-inner mb-6 inline-block border border-primary/10 self-center">
                {option.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">{option.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-center">{option.desc}</p>
              <ul className="space-y-2 border-t border-slate-200/50 pt-4 mt-auto">
                {option.features.map((feat, fIdx) => (
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

      {/* Why Humidification */}
      <Section bg="white" className="relative overflow-hidden">
        <div className="ambient-orb bg-blue-100/40 w-96 h-96 -bottom-20 -left-20 z-0"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Winter Air Demands a Humidifier</h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              When cold outdoor air is heated by your furnace, its relative humidity drops dramatically—often falling below 15%, which is drier than the Sahara Desert.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              This dry air acts like a sponge, drawing moisture out of your body, your family's skin, and even the woodwork in your house. A whole-home humidifier restores the perfect balance.
            </p>
            
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                <ShieldAlert className="h-5 w-5 mr-2 text-primary" />
                Key Benefits of Proper Humidity (35% - 50%)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="h-5 w-5 text-primary-light mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Respiratory Health:</strong> Prevents dry sinuses, sore throats, and eases asthma and allergy symptoms.</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="h-5 w-5 text-primary-light mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Protects Woodwork:</strong> Prevents expensive hardwood flooring, furniture, and musical instruments from drying, cracking, or splitting.</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="h-5 w-5 text-primary-light mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Saves Energy:</strong> Humid air holds heat better. You'll feel warmer at a lower thermostat setting, shaving dollars off your heating bill.</span>
                </li>
                <li className="flex items-start text-slate-700">
                  <CheckCircle className="h-5 w-5 text-primary-light mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>No Static Shock:</strong> Eliminates static electricity, protecting sensitive computers and electronics.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center border-4 border-white">
             <div className="glass-panel p-10 rounded-2xl text-center">
               <Droplet className="h-16 w-16 text-primary-light mx-auto mb-4" />
               <p className="text-slate-800 font-bold tracking-widest uppercase">Moisture Balance</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-glow">Restore Comfort in Your Home</h2>
            <p className="text-primary-100 text-lg">Contact our experts to find and install the perfect humidifier for your home's layout.</p>
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

export default Humidifier;
