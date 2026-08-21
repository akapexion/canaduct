const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

const toReplace = `<div className="absolute bottom-4 left-4 z-20">
                 <h3 className="text-xl font-bold text-white text-glow">Furnace Filters</h3>
              </div>
            <form className="space-y-6">`;

const replacement = `<div className="absolute bottom-4 left-4 z-20">
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
        <div className="absolute inset-0">
          <img src={commercialImg} alt="Air Quality" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 to-slate-900/90 z-0"></div>
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
            <form className="space-y-6">`;

if(content.includes(toReplace)) {
    content = content.replace(toReplace, replacement);
    fs.writeFileSync('src/pages/Home.jsx', content);
    console.log("Success");
} else {
    console.log("Target not found");
}
