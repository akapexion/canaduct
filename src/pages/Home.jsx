import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Clock, Star, Wind, Flame, Droplet, Sun, Layers, Sparkles } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white min-h-[90vh] flex items-center pt-24 pb-32">
        <div className="absolute inset-0 overflow-hidden">
          {/* Advanced Mesh Gradient / Orbs */}
          <div className="absolute inset-0 bg-slate-900 z-0"></div>
          <div className="ambient-orb-dark bg-primary w-3/4 h-3/4 -top-1/4 -left-1/4"></div>
          <div className="ambient-orb-dark bg-primary-light w-1/2 h-1/2 top-1/4 right-0 animate-float-delayed"></div>
          <div className="ambient-orb-dark bg-accent/30 w-96 h-96 bottom-0 left-1/3"></div>
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] z-10"></div>
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left pr-0 md:pr-8 mb-12 md:mb-0">
            <div className="inline-flex items-center space-x-2 glass-dark px-4 py-2 rounded-full mb-6">
               <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
               </span>
               <span className="text-primary-100 text-xs font-semibold uppercase tracking-wider">Toronto's Top Rated</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-glow">
              Breathe <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-white">Cleaner Air</span> <br className="hidden lg:block"/> Everywhere.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl font-light">
              Advanced duct cleaning & HVAC maintenance for healthier homes and businesses across the GTA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="px-8 shadow-primary/40 shadow-xl box-glow">
                Get a Free Quote
              </Button>
              <Button variant="glass" size="lg" className="px-8">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Floating Glass Badges */}
          <div className="flex-1 relative w-full h-[300px] md:h-[500px] hidden md:block">
            <div className="absolute top-10 right-10 glass-dark p-6 rounded-2xl w-64 animate-float">
               <div className="flex items-center space-x-4 mb-2">
                 <div className="bg-green-500/20 p-3 rounded-full"><CheckCircle className="h-6 w-6 text-green-400"/></div>
                 <div>
                   <p className="text-xs text-slate-400">Air Quality</p>
                   <p className="font-bold text-lg text-white">Improved 99%</p>
                 </div>
               </div>
            </div>
            
            <div className="absolute bottom-20 left-10 glass-dark p-6 rounded-2xl w-72 animate-float-delayed">
               <div className="flex items-center space-x-2 mb-3">
                 {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 text-accent fill-accent" />)}
                 <span className="text-sm text-slate-300 ml-2">5.0 Rating</span>
               </div>
               <p className="text-sm text-slate-400 italic">"Canaduct completely transformed the air in our home. Highly recommended!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Bar - Now overlapping using glassmorphism */}
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card variant="glass" hover={false} className="p-6 text-center flex flex-col items-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Certified Experts</h3>
            <p className="text-sm text-slate-600">Fully licensed and insured.</p>
          </Card>
          <Card variant="glass" hover={false} className="p-6 text-center flex flex-col items-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Upfront Pricing</h3>
            <p className="text-sm text-slate-600">No hidden fees, ever.</p>
          </Card>
          <Card variant="glass" hover={false} className="p-6 text-center flex flex-col items-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">5-Star Service</h3>
            <p className="text-sm text-slate-600">Hundreds of happy clients.</p>
          </Card>
          <Card variant="glass" hover={false} className="p-6 text-center flex flex-col items-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Reliable</h3>
            <p className="text-sm text-slate-600">We respect your time.</p>
          </Card>
        </div>
      </div>

      {/* Main Services Section */}
      <Section id="services" bg="white" className="relative overflow-hidden">
        {/* Subtle background ambient light */}
        <div className="ambient-orb bg-primary-light/10 w-[800px] h-[800px] -top-1/4 -right-1/4 -z-10"></div>
        
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Services</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary-light mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Advanced cleaning and maintenance solutions designed to maximize your indoor air quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {/* Service 1 */}
          <Card variant="glass" className="flex flex-col h-full group p-2">
            <div className="h-56 rounded-xl bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-primary-dark flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                 <Wind className="h-32 w-32 text-primary-light/30" />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                 <h3 className="text-2xl font-bold text-white text-glow">Duct Cleaning</h3>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                Remove dust, allergens, and debris. Improve efficiency and breathe cleaner, healthier air in your home.
              </p>
              <Link to="/duct-cleaning" className="flex items-center text-primary font-bold hover:text-primary-light transition-colors mt-auto group-hover:translate-x-2 duration-300">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Card>

          {/* Service 2 */}
          <Card variant="glass" className="flex flex-col h-full group p-2">
            <div className="h-56 rounded-xl bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                 <Flame className="h-32 w-32 text-white/20" />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                 <h3 className="text-2xl font-bold text-white text-glow">Furnace Services</h3>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                Peak performance heating. Thorough cleaning, preventative maintenance, and expert repair services.
              </p>
              <Link to="/furnace" className="flex items-center text-primary font-bold hover:text-primary-light transition-colors mt-auto group-hover:translate-x-2 duration-300">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Card>

           {/* Service 3 */}
           <Card variant="glass" className="flex flex-col h-full group p-2">
            <div className="h-56 rounded-xl bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                 <Shield className="h-32 w-32 text-slate-500/40" />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                 <h3 className="text-2xl font-bold text-white text-glow">Commercial</h3>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                Heavy-duty cleaning solutions tailored for commercial properties to ensure a healthy environment.
              </p>
              <Link to="/duct-cleaning" className="flex items-center text-primary font-bold hover:text-primary-light transition-colors mt-auto group-hover:translate-x-2 duration-300">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* Split Section: Why Choose Us */}
      <Section bg="slate" className="py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Why Clean Ducts Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Essential.</span>
              </h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every time your HVAC system runs, it circulates everything hiding in your ducts—dust, pollen, pet dander, and mold. We eliminate the source, completely transforming your indoor environment.
            </p>
            
            <ul className="space-y-5">
              {[
                "Reduces allergens and asthma irritants",
                "Maximizes HVAC energy efficiency",
                "Eliminates lingering odors",
                "Extends the lifespan of your equipment"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center glass-card p-3 rounded-lg">
                  <div className="flex-shrink-0 bg-gradient-to-br from-primary-light to-primary rounded-full p-1.5 shadow-md">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="ml-4 text-slate-700 font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative h-full flex items-center justify-center p-8">
              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-2xl animate-float-delayed"></div>
              
              <div className="glass-panel w-full aspect-square md:aspect-[4/3] rounded-3xl relative z-10 flex flex-col items-center justify-center border-white shadow-2xl">
                 <Wind className="h-24 w-24 text-primary-light/50 mb-4" />
                 <p className="text-slate-500 font-bold tracking-widest uppercase">Visual Showcase</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Indoor Air Quality Showcase Section */}
      <Section id="air-quality" bg="white" className="relative overflow-hidden">
        <div className="ambient-orb bg-primary-light/10 w-[800px] h-[800px] -bottom-1/4 -left-1/4 -z-10 animate-float-delayed"></div>
        
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Indoor Air <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Quality Solutions</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary-light mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Professional systems integrated with your home ventilation to actively sanitize, filter, and humidify your indoor air.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {/* HEPA Cleaners */}
          <Card variant="glass" className="flex flex-col h-full group p-2">
            <div className="h-48 rounded-xl bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                 <Wind className="h-24 w-24 text-white/20" />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                 <h3 className="text-xl font-bold text-white text-glow">HEPA Air Cleaner</h3>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                Medical-grade air filtration trapping 99.97% of viruses, allergens, and ultra-fine dust.
              </p>
              <Link to="/hepa-air-cleaner" className="flex items-center text-primary font-bold hover:text-primary-light transition-colors mt-auto group-hover:translate-x-2 duration-300">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Card>

          {/* Humidifiers */}
          <Card variant="glass" className="flex flex-col h-full group p-2">
            <div className="h-48 rounded-xl bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                 <Droplet className="h-24 w-24 text-primary-light/40" />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                 <h3 className="text-xl font-bold text-white text-glow">Humidifiers</h3>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                Maintain optimal moisture levels. Protect your wood floor and skin while saving energy.
              </p>
              <Link to="/humidifier" className="flex items-center text-primary font-bold hover:text-primary-light transition-colors mt-auto group-hover:translate-x-2 duration-300">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Card>

          {/* UV Lights */}
          <Card variant="glass" className="flex flex-col h-full group p-2">
            <div className="h-48 rounded-xl bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-primary-dark flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                 <Sun className="h-24 w-24 text-white/10" />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                 <h3 className="text-xl font-bold text-white text-glow">UV Lights</h3>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                Sterilize airborne bacteria, mold spores, and viral contaminants with germicidal UV-C.
              </p>
              <Link to="/uv-lights" className="flex items-center text-primary font-bold hover:text-primary-light transition-colors mt-auto group-hover:translate-x-2 duration-300">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Card>

          {/* Furnace Filters */}
          <Card variant="glass" className="flex flex-col h-full group p-2">
            <div className="h-48 rounded-xl bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-slate-700 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                 <Layers className="h-24 w-24 text-white/20" />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                 <h3 className="text-xl font-bold text-white text-glow">Furnace Filters</h3>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                High-efficiency media filtration protecting your HVAC system parts and home airflow.
              </p>
              <Link to="/furnace-filters" className="flex items-center text-primary font-bold hover:text-primary-light transition-colors mt-auto group-hover:translate-x-2 duration-300">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-slate-900 z-0"></div>
        <div className="ambient-orb-dark bg-primary-light w-[600px] h-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow">
            Ready for a Change in the Air?
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto font-light">
            Contact us today for a free, no-obligation quote. Experience the Canaduct difference.
          </p>
          
          <div className="glass-dark rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 transform md:translate-y-12 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white mb-8">Request Your Free Estimate</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name *" className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:bg-white/10 transition-all placeholder:text-slate-400" />
                <input type="text" placeholder="Last Name *" className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:bg-white/10 transition-all placeholder:text-slate-400" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="email" placeholder="Email Address *" className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:bg-white/10 transition-all placeholder:text-slate-400" />
                <input type="tel" placeholder="Phone Number *" className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:bg-white/10 transition-all placeholder:text-slate-400" />
              </div>
              <textarea placeholder="How can we help you?" rows="4" className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:bg-white/10 transition-all placeholder:text-slate-400"></textarea>
              <Button className="w-full text-lg py-4 box-glow shadow-primary" size="lg">Send Request</Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Spacer */}
      <div className="h-16 md:h-24 bg-slate-50"></div>

    </div>
  );
};

export default Home;
