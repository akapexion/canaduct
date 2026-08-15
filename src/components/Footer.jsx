import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wind, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

// lucide-react dropped branded logos (Facebook/Instagram/Twitter etc.) from its export list,
// so these are small inline SVGs instead of lucide imports.
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 2H22l-7.6 8.7L23 22h-7l-5.5-6.9L4.1 22H1l8.2-9.4L1 2h7.2l5 6.3L18.9 2Zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20Z" />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | error | success

  const handleSubscribe = (e) => {
    e.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-white p-1.5 rounded-lg">
                <Wind className="h-6 w-6 text-primary" />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">CANADUCT</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Toronto's trusted experts in air duct cleaning and HVAC maintenance. Breathing cleaner air starts here.
            </p>
            <div className="flex space-x-3 pt-2">
              {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, i) => (
                <a                
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="bg-white/5 hover:bg-primary hover:text-white p-2.5 rounded-full transition-colors duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/duct-cleaning" className="hover:text-white hover:pl-1 transition-all duration-200 text-sm">Residential Duct Cleaning</Link></li>
              <li><Link to="/duct-cleaning" className="hover:text-white hover:pl-1 transition-all duration-200 text-sm">Commercial Duct Cleaning</Link></li>
              <li><Link to="/furnace" className="hover:text-white hover:pl-1 transition-all duration-200 text-sm">Furnace Maintenance</Link></li>
              <li><Link to="/furnace" className="hover:text-white hover:pl-1 transition-all duration-200 text-sm">A/C Coil Cleaning</Link></li>
              <li><Link to="/" className="hover:text-white hover:pl-1 transition-all duration-200 text-sm">Dryer Vent Cleaning</Link></li>
            </ul>
          </div>

          {/* Air Quality */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Air Quality</h3>
            <ul className="space-y-3">
              <li><Link to="/hepa-air-cleaner" className="hover:text-white hover:pl-1 transition-all duration-200 text-sm">HEPA Air Cleaner</Link></li>
              <li><Link to="/humidifier" className="hover:text-white hover:pl-1 transition-all duration-200 text-sm">Humidifiers</Link></li>
              <li><Link to="/uv-lights" className="hover:text-white hover:pl-1 transition-all duration-200 text-sm">UV Germicidal Lights</Link></li>
              <li><Link to="/furnace-filters" className="hover:text-white hover:pl-1 transition-all duration-200 text-sm">Furnace Filters</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated</h3>
            <p className="text-sm text-slate-400 mb-4">Seasonal tips and maintenance reminders — no spam.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
                  placeholder="you@email.com"
                  className={`w-full px-4 py-2.5 bg-white/5 border rounded-l-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    status === 'error' ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-primary-light'
                  }`}
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-light px-4 rounded-r-lg text-sm font-semibold text-white transition-colors"
                >
                  Join
                </button>
              </div>
              {status === 'error' && <p className="text-xs text-red-400">Please enter a valid email address.</p>}
              {status === 'success' && (
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" /> You're subscribed!
                </p>
              )}
            </form>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-light flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 Clean Air Way,<br />Toronto, ON M1M 1M1</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-light flex-shrink-0" />
                <a href="tel:+14168000000" className="text-sm hover:text-white transition-colors">(416) 800-0000</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-light flex-shrink-0" />
                <a href="mailto:info@canaduct.sample" className="text-sm hover:text-white transition-colors">info@canaduct.sample</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Canaduct Sample. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;