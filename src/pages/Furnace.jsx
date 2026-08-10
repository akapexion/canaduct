import { Flame, Wrench, Thermometer, ShieldAlert, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';

const Furnace = () => {
  const services = [
    {
      title: "Furnace Repair",
      desc: "Fast, reliable repairs for all furnace makes and models. Available 24/7 for emergency heating failures.",
      icon: <Wrench className="h-8 w-8 text-primary" />
    },
    {
      title: "Preventative Maintenance",
      desc: "Annual tune-ups to keep your system running efficiently, extend its lifespan, and prevent costly breakdowns.",
      icon: <ShieldAlert className="h-8 w-8 text-primary" />
    },
    {
      title: "New Installations",
      desc: "Expert installation of high-efficiency furnaces tailored to your home's specific heating requirements.",
      icon: <Flame className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Furnace Services & Repair</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Keeping Toronto homes warm, comfortable, and energy-efficient all winter long.
          </p>
        </div>
      </section>

      {/* Main Offerings */}
      <Section bg="slate" className="relative z-10 -mt-10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card variant="glass" key={idx} className="p-8 text-center flex flex-col items-center">
              <div className="bg-gradient-to-br from-primary-light/20 to-primary/5 p-5 rounded-full shadow-inner mb-6 inline-block border border-primary/10">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 flex-grow leading-relaxed">{service.desc}</p>
              <Button variant="ghost" className="mt-6 font-semibold group">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Warning Signs */}
      <Section bg="white" className="relative overflow-hidden">
        <div className="ambient-orb bg-accent/10 w-96 h-96 -top-20 -right-20 z-0"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center border-4 border-white">
             <div className="glass-panel p-10 rounded-2xl text-center">
               <Thermometer className="h-16 w-16 text-primary-light mx-auto mb-4" />
               <p className="text-slate-800 font-bold tracking-widest uppercase">Visual Diagnosis</p>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Signs You Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Furnace Repair</span></h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Don't wait for your furnace to fail completely in the middle of a cold winter night. Watch out for these common warning signs:
            </p>
            
            <ul className="space-y-4">
              {[
                { title: "Unusual Noises", text: "Banging, whining, or groaning sounds coming from the unit." },
                { title: "Uneven Heating", text: "Some rooms are too hot while others remain freezing." },
                { title: "High Energy Bills", text: "A sudden, unexplained spike in your heating costs." },
                { title: "Frequent Cycling", text: "The furnace constantly turns on and off without reaching temperature." },
                { title: "Yellow Pilot Light", text: "A gas furnace should always have a blue flame. Yellow indicates a problem." }
              ].map((item, idx) => (
                <li key={idx} className="glass-card p-4 rounded-xl flex items-start">
                  <div className="mt-1 bg-gradient-to-br from-red-400 to-red-600 p-1.5 rounded-full mr-4 shadow-md">
                    <ShieldAlert className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Maintenance Plan Banner */}
      <Section bg="primary" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-slate-900"></div>
        <div className="ambient-orb-dark bg-accent w-[500px] h-[500px] -left-20 -top-20 opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 glass-panel border-white/10 p-12 rounded-3xl backdrop-blur-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-glow">Join Our Annual Maintenance Program</h2>
          <p className="text-lg text-primary-100 mb-10 max-w-2xl mx-auto font-light">
            Get priority service, discounts on repairs, and peace of mind knowing your HVAC system is tuned and ready for the season.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="box-glow shadow-primary text-lg px-8 py-4" size="lg">View Maintenance Plans</Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-4">Contact Us</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Furnace;
