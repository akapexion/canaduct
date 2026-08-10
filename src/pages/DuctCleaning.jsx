import { Wind, CheckCircle, Fan, Sparkles, Activity } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';

const DuctCleaning = () => {
  const steps = [
    {
      title: "Initial Inspection",
      description: "Our certified technicians start with a thorough visual inspection of your HVAC system to assess the level of buildup and identify any specific issues.",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "Negative Pressure Setup",
      description: "We connect a powerful vacuum collection device to your main trunk line, creating negative pressure to prevent dust from spreading into your home.",
      icon: <Wind className="h-6 w-6 text-primary" />
    },
    {
      title: "Agitation & Cleaning",
      description: "Using specialized air whips and rotary brushes, we dislodge dirt, debris, and contaminants from the walls of your ductwork.",
      icon: <Fan className="h-6 w-6 text-primary" />
    },
    {
      title: "Final Sanitization",
      description: "After all debris is removed, we offer an optional antimicrobial treatment to eliminate odors, bacteria, and mold spores.",
      icon: <Sparkles className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Air Duct Cleaning</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Improve your indoor air quality and maximize your HVAC system's efficiency with our deep cleaning services.
          </p>
        </div>
      </section>

      {/* The Problem / Solution Section */}
      <Section bg="white" className="relative overflow-hidden">
        <div className="ambient-orb bg-secondary w-96 h-96 -top-10 -left-10 z-0"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Are you breathing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">clean air?</span></h2>
            <p className="text-slate-600 mb-4 text-lg leading-relaxed">
              The Environmental Protection Agency (EPA) estimates that indoor air can be two to five times more polluted than outdoor air. Your air ducts serve as the lungs of your home.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              When ducts become dirty, they circulate dust, pollen, pet dander, mold spores, and other allergens every time your furnace or air conditioner runs.
            </p>
            
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                <Wind className="h-5 w-5 mr-2 text-primary" />
                Benefits of Duct Cleaning
              </h3>
              <ul className="space-y-3">
                {['Reduces dust in your home', 'Relieves allergy and asthma symptoms', 'Removes unpleasant odors', 'Improves airflow and HVAC efficiency', 'Lowers monthly energy bills'].map((benefit, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle className="h-5 w-5 text-primary-light mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-200 rounded-2xl h-48 md:h-64 flex items-center justify-center text-slate-500 font-bold shadow-inner">Dirty Duct (Before)</div>
            <div className="glass-card bg-primary/5 rounded-2xl h-48 md:h-64 flex items-center justify-center text-primary font-bold mt-8 border border-primary/20 shadow-xl">Clean Duct (After)</div>
          </div>
        </div>
      </Section>

      {/* Our Process */}
      <Section bg="slate" className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our 4-Step Cleaning Process</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We use industry-leading negative air machines and specialized tools to ensure every inch of your ductwork is thoroughly cleaned.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card variant="glass" key={index} className="p-6 relative pt-12 mt-6">
              <div className="absolute -top-6 left-6 glass p-4 rounded-xl shadow-lg border-white">
                {step.icon}
              </div>
              <div className="text-slate-200 font-bold text-6xl absolute top-4 right-4 opacity-30 select-none">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{step.title}</h3>
              <p className="text-slate-600 relative z-10 leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Banner */}
      <section className="bg-slate-900 relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-slate-900"></div>
        <div className="ambient-orb-dark bg-primary w-96 h-96 right-0 top-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-glow">Schedule Your Duct Cleaning Today</h2>
            <p className="text-primary-100 text-lg">Breathe easier starting tomorrow. Contact us for a free estimate.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button className="w-full md:w-auto box-glow shadow-primary text-lg px-8">Call (416) 800-0000</Button>
            <Button variant="glass" className="w-full md:w-auto text-lg px-8">Book Online</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DuctCleaning;
