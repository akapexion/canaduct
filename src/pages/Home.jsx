import { Link } from "react-router-dom";

import {
  ArrowRight,
  Shield,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react";

import Section from "../components/Section";
import Button from "../components/Button";
import Card from "../components/Card";

import truckImg from "../assets/images/truck.jpg";
import ductCleaningImg from "../assets/images/duct-cleaning.jpg";
import furnaceServicesImg from "../assets/images/furnace-services.jpg";
import commercialImg from "../assets/images/commercial.jpg";
import hepaAirCleanerImg from "../assets/images/hepa-air-cleaner.jpg";
import humidifiersImg from "../assets/images/humidifiers.jpg";
import uvLightsImg from "../assets/images/uv-lights.jpg";
import furnaceFiltersImg from "../assets/images/furnace-filters.jpg";
import homeHeroBgImg from "../assets/images/home_hero_bg.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[700px] flex items-center overflow-hidden bg-slate-900"
        style={{
          backgroundImage: `url(${homeHeroBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/75"></div>

        {/* Ambient Glow */}
        <div className="ambient-orb-dark bg-primary-light/30 w-[600px] h-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            {/* Hero Content */}
            <div className="flex-1 text-center md:text-left pr-0 md:pr-8 mb-12 md:mb-0">
              <div className="inline-flex items-center space-x-2 glass-dark px-4 py-2 rounded-full mb-6">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>

                <span className="text-white text-xs font-semibold uppercase tracking-wider">
                  Toronto&apos;s Top Rated
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-glow text-white">
                Breathe{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-white">
                  Cleaner Air
                </span>{" "}
                <br className="hidden lg:block" />
                Everywhere.
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl font-light">
                Advanced duct cleaning & HVAC maintenance for healthier homes
                and businesses across the GTA.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="px-8 shadow-primary/40 shadow-xl box-glow"
                >
                  Get a Free Quote
                </Button>

                <Button variant="glass" size="lg" className="px-8">
                  Explore Services
                </Button>
              </div>
            </div>

            {/* Floating Glass Badges */}
            <div className="flex-1 relative w-full h-[300px] md:h-[500px] hidden md:block">
              {/* Air Quality Badge */}
              <div className="absolute top-10 right-10 glass-dark p-6 rounded-2xl w-64 animate-float">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Air Quality</p>
                    <p className="font-bold text-lg text-white">
                      Improved 99%
                    </p>
                  </div>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute bottom-20 left-10 glass-dark p-6 rounded-2xl w-72 animate-float-delayed">
                <div className="flex items-center space-x-2 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-accent fill-accent"
                    />
                  ))}

                  <span className="text-sm text-slate-300 ml-2">
                    5.0 Rating
                  </span>
                </div>

                <p className="text-sm text-slate-400 italic">
                  &quot;Canaduct completely transformed the air in our home.
                  Highly recommended!&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            variant="glass"
            hover={false}
            className="p-6 text-center flex flex-col items-center"
          >
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>

            <h3 className="font-bold text-slate-900 mb-2">
              Certified Experts
            </h3>

            <p className="text-sm text-slate-600">
              Fully licensed and insured.
            </p>
          </Card>

          <Card
            variant="glass"
            hover={false}
            className="p-6 text-center flex flex-col items-center"
          >
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>

            <h3 className="font-bold text-slate-900 mb-2">
              Upfront Pricing
            </h3>

            <p className="text-sm text-slate-600">
              No hidden fees, ever.
            </p>
          </Card>

          <Card
            variant="glass"
            hover={false}
            className="p-6 text-center flex flex-col items-center"
          >
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Star className="h-8 w-8 text-primary" />
            </div>

            <h3 className="font-bold text-slate-900 mb-2">
              5-Star Service
            </h3>

            <p className="text-sm text-slate-600">
              Hundreds of happy clients.
            </p>
          </Card>

          <Card
            variant="glass"
            hover={false}
            className="p-6 text-center flex flex-col items-center"
          >
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>

            <h3 className="font-bold text-slate-900 mb-2">
              Reliable
            </h3>

            <p className="text-sm text-slate-600">
              We respect your time.
            </p>
          </Card>
        </div>
      </div>

      {/* Main Services Section */}
      <Section
        id="services"
        bg="white"
        className="relative overflow-hidden"
      >
        <div className="ambient-orb bg-primary-light/10 w-[800px] h-[800px] -top-1/4 -right-1/4 -z-10"></div>

        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Premium{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Services
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary-light mx-auto mb-6 rounded-full"></div>

          <p className="text-lg text-slate-600">
            Advanced cleaning and maintenance solutions designed to maximize
            your indoor air quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {/* Duct Cleaning */}
          <Card
            variant="glass"
            className="flex flex-col h-full group p-2"
          >
            <div className="h-56 rounded-xl bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>

              <img
                src={ductCleaningImg}
                alt="Duct Cleaning"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-2xl font-bold text-white text-glow">
                  Duct Cleaning
                </h3>
              </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                Remove dust, allergens, and debris. Improve efficiency and
                breathe cleaner, healthier air in your home.
              </p>

              <Link
                to="/duct-cleaning"
                className="flex items-center text-primary font-bold hover:text-primary-light transition-colors mt-auto group-hover:translate-x-2 duration-300"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Card>

          {/* Furnace Services */}
          <Card
            variant="glass"
            className="flex flex-col h-full group p-2"
          >
            <div className="h-56 rounded-xl bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>

              <img
                src={furnaceServicesImg}
                alt="Furnace Services"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-2xl font-bold text-white text-glow">
                  Furnace Services
                </h3>
              </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                Peak performance heating. Thorough cleaning, preventative
                maintenance, and expert repair services.
              </p>

              <Link
                to="/furnace"
                className="flex items-center text-primary font-bold hover:text-primary-light transition-colors mt-auto group-hover:translate-x-2 duration-300"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Card>

          {/* Commercial */}
          <Card
            variant="glass"
            className="flex flex-col h-full group p-2"
          >
            <div className="h-56 rounded-xl bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>

              <img
                src={commercialImg}
                alt="Commercial Services"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-2xl font-bold text-white text-glow">
                  Commercial
                </h3>
              </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                Heavy-duty cleaning solutions tailored for commercial
                properties to ensure a healthy environment.
              </p>

              <Link
                to="/duct-cleaning"
                className="flex items-center text-primary font-bold hover:text-primary-light transition-colors mt-auto group-hover:translate-x-2 duration-300"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* Special Package Section */}
      <Section
        id="special-offer"
        bg="white"
        className="py-20 relative z-10 border-t border-slate-100"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Limited Time{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Offer
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary-light mx-auto mb-6 rounded-full"></div>

          <p className="text-lg text-slate-600">
            Take advantage of our comprehensive starting package for complete
            home air quality improvement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-primary text-white font-bold px-6 py-2 rounded-bl-xl z-20 shadow-lg">
              Most Popular
            </div>

            {/* Left Side */}
            <div className="p-10 md:w-2/5 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:20px_20px] z-0"></div>

              <div className="relative z-10 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Starting Package
                </h3>

                <p className="text-primary-100 mb-6 font-medium">
                  House under 2000 sqft
                </p>

                <div className="flex items-baseline justify-center md:justify-start mb-6">
                  <span className="text-5xl font-bold text-white">
                    $249
                  </span>

                  <span className="text-xl text-slate-400 ml-2">
                    +hst
                  </span>
                </div>

                <Button className="w-full box-glow shadow-primary">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Right Side */}
            <div className="p-10 md:w-3/5 bg-slate-800/50">
              <h4 className="text-lg font-bold text-white mb-6 border-b border-slate-700 pb-2">
                What&apos;s Included:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {[
                  "Unlimited air ducts cleaning",
                  "Unlimited air vents cleaning",
                  "Unlimited air returns cleaning",
                  "Sanitizing",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />

                    <span className="text-slate-300 text-sm leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-bold text-white mt-8 mb-4 border-b border-slate-700 pb-2">
                Plus Free Inspection On:
              </h4>

              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                {[
                  "Furnace",
                  "AC Coil",
                  "Dryer vent",
                  "Air Filters",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-slate-300"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-light mr-3"></div>

                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section bg="slate" className="py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Why Clean Ducts Are{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                  Essential.
                </span>
              </h2>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              Every time your HVAC system runs, it circulates everything hiding
              in your ducts—dust, pollen, pet dander, and mold. We eliminate
              the source, completely transforming your indoor environment.
            </p>

            <ul className="space-y-5">
              {[
                "Reduces allergens and asthma irritants",
                "Maximizes HVAC energy efficiency",
                "Eliminates lingering odors",
                "Extends the lifespan of your equipment",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center glass-card p-3 rounded-lg"
                >
                  <div className="flex-shrink-0 bg-gradient-to-br from-primary-light to-primary rounded-full p-1.5 shadow-md">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>

                  <span className="ml-4 text-slate-700 font-semibold">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Truck Image */}
          <div className="order-1 lg:order-2">
            <div className="relative h-full flex items-center justify-center p-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>

              <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-2xl animate-float-delayed"></div>

              <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl relative z-10 flex flex-col items-center justify-center shadow-2xl overflow-hidden border-4 border-white">
                <img
                  src={truckImg}
                  alt="Top Line Duct Cleaning Truck"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Indoor Air Quality */}
      <Section
        id="air-quality"
        bg="white"
        className="relative overflow-hidden"
      >
        <div className="ambient-orb bg-primary-light/10 w-[800px] h-[800px] -bottom-1/4 -left-1/4 -z-10 animate-float-delayed"></div>

        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Indoor Air{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Quality Solutions
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary-light mx-auto mb-6 rounded-full"></div>

          <p className="text-lg text-slate-600">
            Professional systems integrated with your home ventilation to
            actively sanitize, filter, and humidify your indoor air.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {/* HEPA Air Cleaner */}
          <Card
            variant="glass"
            className="flex flex-col h-full group p-2"
          >
            <div className="h-48 rounded-xl bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>

              <img
                src={hepaAirCleanerImg}
                alt="HEPA Air Cleaner"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-xl font-bold text-white text-glow">
                  HEPA Air Cleaner
                </h3>
              </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                Medical-grade air filtration trapping 99.97% of viruses,
                allergens, and ultra-fine dust.
              </p>

              <Link
                to="/hepa-air-cleaner"
                className="flex items-center text-primary font-bold hover:text-primary-light transition-colors mt-auto group-hover:translate-x-2 duration-300"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Card>

          {/* Humidifiers */}
          <Card
            variant="glass"
            className="flex flex-col h-full group p-2"
          >
            <div className="h-48 rounded-xl bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>

              <img
                src={humidifiersImg}
                alt="Humidifiers"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-xl font-bold text-white text-glow">
                  Humidifiers
                </h3>
              </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                Maintain optimal moisture levels. Protect your wood floor and
                skin while saving energy.
              </p>

              <Link
                to="/humidifier"
                className="flex items-center text-primary font-bold hover:text-primary-light transition-colors mt-auto group-hover:translate-x-2 duration-300"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Card>

          {/* UV Lights */}
          <Card
            variant="glass"
            className="flex flex-col h-full group p-2"
          >
            <div className="h-48 rounded-xl bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>

              <img
                src={uvLightsImg}
                alt="UV Lights"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-xl font-bold text-white text-glow">
                  UV Lights
                </h3>
              </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                Sterilize airborne bacteria, mold spores, and viral
                contaminants with germicidal UV-C.
              </p>

              <Link
                to="/uv-lights"
                className="flex items-center text-primary font-bold hover:text-primary-light transition-colors mt-auto group-hover:translate-x-2 duration-300"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Card>

          {/* Furnace Filters */}
          <Card
            variant="glass"
            className="flex flex-col h-full group p-2"
          >
            <div className="h-48 rounded-xl bg-slate-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>

              <img
                src={furnaceFiltersImg}
                alt="Furnace Filters"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-xl font-bold text-white text-glow">
                  Furnace Filters
                </h3>
              </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                High-efficiency media filtration protecting your HVAC system
                parts and home airflow.
              </p>

              <Link
                to="/furnace-filters"
                className="flex items-center text-primary font-bold hover:text-primary-light transition-colors mt-auto group-hover:translate-x-2 duration-300"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={commercialImg}
            alt="Air Quality"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 to-slate-900/90 z-0"></div>

        {/* Ambient Orb */}
        <div className="ambient-orb-dark bg-primary-light w-[600px] h-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow">
            Ready for a Change in the Air?
          </h2>

          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto font-light">
            Contact us today for a free, no-obligation quote. Experience the
            Canaduct difference.
          </p>

          <div className="glass-dark rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 transform md:translate-y-12 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white mb-8">
              Request Your Free Estimate
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:bg-white/10 transition-all placeholder:text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Last Name *"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:bg-white/10 transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:bg-white/10 transition-all placeholder:text-slate-400"
                />

                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:bg-white/10 transition-all placeholder:text-slate-400"
                />
              </div>

              <textarea
                placeholder="How can we help you?"
                rows="4"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:bg-white/10 transition-all placeholder:text-slate-400"
              ></textarea>

              <Button
                className="w-full text-lg py-4 box-glow shadow-primary"
                size="lg"
              >
                Send Request
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Spacer */}
      <div className="h-16 md:h-24 bg-slate-50"></div>
    </>
  );
};

export default Home;