import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Wind } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu and unlock scroll whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Duct Cleaning', path: '/duct-cleaning' },
    { name: 'Furnace Services', path: '/furnace' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3 border-b border-white/40' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src="./logo.png" alt="" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-sm font-medium transition-colors hover:text-primary pb-1 ${active ? 'text-primary' : 'text-slate-600'}`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-0.5 bg-primary rounded-full transition-all duration-300 ${active ? 'w-full' : 'w-0'}`}
                    />
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+14168000000" className="hidden lg:flex items-center space-x-2 text-primary font-semibold hover:text-primary-light transition-colors">
                <Phone className="h-4 w-4" />
                <span>(416) 800-0000</span>
              </a>
              <Button size="sm">Get a Quote</Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary focus:outline-none relative z-50 p-1"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className="relative block h-6 w-6">
                <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
                <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav — height/opacity transition instead of a hard mount/unmount */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                location.pathname === link.path ? 'text-primary bg-primary/5' : 'text-slate-700 hover:text-primary hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col space-y-3 px-3">
            <a href="tel:+14168000000" className="flex items-center justify-center space-x-2 text-primary font-semibold py-2">
              <Phone className="h-5 w-5" />
              <span>Call (416) 800-0000</span>
            </a>
            <Button className="w-full">Get a Quote</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;