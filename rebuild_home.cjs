const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// 1. Imports
const imports = `
import truckImg from '../assets/images/truck.jpg';
import ductCleaningImg from '../assets/images/duct-cleaning.jpg';
import furnaceServicesImg from '../assets/images/furnace-services.jpg';
import commercialImg from '../assets/images/commercial.jpg';
import hepaAirCleanerImg from '../assets/images/hepa-air-cleaner.jpg';
import humidifiersImg from '../assets/images/humidifiers.jpg';
import uvLightsImg from '../assets/images/uv-lights.jpg';
import furnaceFiltersImg from '../assets/images/furnace-filters.jpg';
`;
content = content.replace(/(import Card from '\.\.\/components\/Card';)/, "$1" + imports);

// 2. Fix cards in Main Services Section
content = content.replace(/<div className="absolute inset-0 bg-primary-dark flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">\s*<Wind className="h-32 w-32 text-primary-light\/30" \/>\s*<\/div>/, '<img src={ductCleaningImg} alt="" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />');
content = content.replace(/<div className="absolute inset-0 bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">\s*<Flame className="h-32 w-32 text-white\/20" \/>\s*<\/div>/, '<img src={furnaceServicesImg} alt="" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />');
content = content.replace(/<div className="absolute inset-0 bg-slate-800 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">\s*<Shield className="h-32 w-32 text-slate-500\/40" \/>\s*<\/div>/, '<img src={commercialImg} alt="" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />');

// 3. Special Package
const packageSection = `
      {/* Special Package Section */}
      <Section id="special-offer" bg="white" className="py-20 relative z-10 border-t border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Limited Time <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Offer</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary-light mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600">
            Take advantage of our comprehensive starting package for complete home air quality improvement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
            {/* Banner/Badge */}
            <div className="absolute top-0 right-0 bg-primary text-white font-bold px-6 py-2 rounded-bl-xl z-20 shadow-lg">
              Most Popular
            </div>

            {/* Left side: Price & Title */}
            <div className="p-10 md:w-2/5 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-700 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] z-0"></div>
               <div className="relative z-10 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Starting Package</h3>
                  <p className="text-primary-100 mb-6 font-medium">House under 2000 sqft</p>
                  <div className="flex items-baseline justify-center md:justify-start mb-6">
                    <span className="text-5xl font-bold text-white">$249</span>
                    <span className="text-xl text-slate-400 ml-2">+hst</span>
                  </div>
                  <Button className="w-full box-glow shadow-primary">Book Now</Button>
               </div>
            </div>

            {/* Right side: Features */}
            <div className="p-10 md:w-3/5 bg-slate-800/50">
              <h4 className="text-lg font-bold text-white mb-6 border-b border-slate-700 pb-2">What's Included:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {[
                  "Unlimited air ducts cleaning",
                  "Unlimited air vents cleaning",
                  "Unlimited air returns cleaning",
                  "Sanitizing",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-bold text-white mt-8 mb-4 border-b border-slate-700 pb-2">Plus Free Inspection On:</h4>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                 {[
                  "Furnace",
                  "AC Coil",
                  "Dryer vent",
                  "Air Filters"
                 ].map((item, idx) => (
                  <div key={idx} className="flex items-center text-slate-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-light mr-3"></div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
`;
content = content.replace(/({\/\* Split Section: Why Choose Us \*\/})/, packageSection + "\n      $1");

// 4. Truck image in Split Section
content = content.replace(/<div className="glass-panel w-full aspect-square md:aspect-\[4\/3\] rounded-3xl relative z-10 flex flex-col items-center justify-center border-white shadow-2xl">\s*<Wind className="h-24 w-24 text-primary-light\/50 mb-4" \/>\s*<p className="text-slate-500 font-bold tracking-widest uppercase">Visual Showcase<\/p>\s*<\/div>/, '<div className="w-full aspect-square md:aspect-[4/3] rounded-3xl relative z-10 flex flex-col items-center justify-center shadow-2xl overflow-hidden border-4 border-white">\n                 <img src={truckImg} alt="Top Line Duct Cleaning Truck" className="w-full h-full object-cover" />\n              </div>');

// 5. Air Quality Cards
content = content.replace(/<div className="absolute inset-0 bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">\s*<Wind className="h-24 w-24 text-white\/20" \/>\s*<\/div>/, '<img src={hepaAirCleanerImg} alt="" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />');
content = content.replace(/<div className="absolute inset-0 bg-slate-800 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">\s*<Droplet className="h-24 w-24 text-primary-light\/40" \/>\s*<\/div>/, '<img src={humidifiersImg} alt="" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />');
content = content.replace(/<div className="absolute inset-0 bg-primary-dark flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">\s*<Sun className="h-24 w-24 text-white\/10" \/>\s*<\/div>/, '<img src={uvLightsImg} alt="" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />');
content = content.replace(/<div className="absolute inset-0 bg-slate-700 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">\s*<Layers className="h-24 w-24 text-white\/20" \/>\s*<\/div>/, '<img src={furnaceFiltersImg} alt="" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />');

// 6. CTA Background Image
content = content.replace(/(<section className="bg-slate-900 py-24 relative overflow-hidden">)\s*(<div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-slate-900 z-0"><\/div>)/, '$1\n        <div className="absolute inset-0">\n          <img src={commercialImg} alt="Air Quality" className="w-full h-full object-cover opacity-20" />\n        </div>\n        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 to-slate-900/90 z-0"></div>');

fs.writeFileSync('src/pages/Home.jsx', content);
console.log("Successfully rebuilt Home.jsx");
