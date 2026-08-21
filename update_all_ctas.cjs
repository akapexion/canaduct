const fs = require('fs');

// 1. Humidifier.jsx -> Restore Comfort in Your Home CTA bg
let humidifier = fs.readFileSync('src/pages/Humidifier.jsx', 'utf8');
if (!humidifier.includes('humidifierCtaBgImg')) {
  humidifier = humidifier.replace(
    "import moistureBalanceImg from '../assets/images/moisture_balance.jpg';",
    "import moistureBalanceImg from '../assets/images/moisture_balance.jpg';\nimport humidifierCtaBgImg from '../assets/images/humidifier_cta_bg.jpg';"
  );
}

humidifier = humidifier.replace(
  '<div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-slate-900"></div>',
  `<div className="absolute inset-0">
          <img src={humidifierCtaBgImg} alt="Restore Comfort" className="w-full h-full object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-sky-950/65 to-blue-900/60 z-0"></div>`
);
// Lighten hero overlay
humidifier = humidifier.replace('opacity-30', 'opacity-40');
humidifier = humidifier.replace('bg-primary/20', 'bg-sky-900/30');
fs.writeFileSync('src/pages/Humidifier.jsx', humidifier);
console.log('Humidifier updated');

// 2. UvLights.jsx -> Sanitize Your Indoor Air CTA bg
let uv = fs.readFileSync('src/pages/UvLights.jsx', 'utf8');
if (!uv.includes('uvCtaBgImg')) {
  uv = uv.replace(
    "import uvShieldImg from '../assets/images/uv_shield.jpg';",
    "import uvShieldImg from '../assets/images/uv_shield.jpg';\nimport uvCtaBgImg from '../assets/images/uv-lights.jpg';"
  );
}

uv = uv.replace(
  '<div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-slate-900"></div>',
  `<div className="absolute inset-0">
          <img src={uvCtaBgImg} alt="Sanitize Air" className="w-full h-full object-cover opacity-35 mix-blend-luminosity" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-indigo-950/65 to-sky-900/60 z-0"></div>`
);
// Lighten hero overlay
uv = uv.replace('opacity-30', 'opacity-40');
uv = uv.replace('bg-primary/20', 'bg-indigo-900/30');
fs.writeFileSync('src/pages/UvLights.jsx', uv);
console.log('UvLights updated');

// 3. FurnaceFilters.jsx -> Optimize Your HVAC Performance CTA bg
let filters = fs.readFileSync('src/pages/FurnaceFilters.jsx', 'utf8');
if (!filters.includes('filtersCtaBgImg')) {
  filters = filters.replace(
    "import multiLayerImg from '../assets/images/multi_layer_filtration.jpg';",
    "import multiLayerImg from '../assets/images/multi_layer_filtration.jpg';\nimport filtersCtaBgImg from '../assets/images/furnace-filters.jpg';"
  );
}

filters = filters.replace(
  '<div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-slate-900"></div>',
  `<div className="absolute inset-0">
          <img src={filtersCtaBgImg} alt="Optimize HVAC" className="w-full h-full object-cover opacity-35 mix-blend-luminosity" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-sky-950/65 to-blue-900/60 z-0"></div>`
);
// Lighten hero overlay
filters = filters.replace('opacity-30', 'opacity-40');
filters = filters.replace('bg-primary/20', 'bg-blue-900/30');
fs.writeFileSync('src/pages/FurnaceFilters.jsx', filters);
console.log('FurnaceFilters updated');

// 4. DuctCleaning.jsx -> Lighten hero overlay bluish shade
let duct = fs.readFileSync('src/pages/DuctCleaning.jsx', 'utf8');
duct = duct.replace('opacity-30', 'opacity-45');
duct = duct.replace('bg-primary/20', 'bg-sky-900/30');
fs.writeFileSync('src/pages/DuctCleaning.jsx', duct);
console.log('DuctCleaning updated');

// 5. Furnace.jsx -> Lighten hero overlay bluish shade
let furnace = fs.readFileSync('src/pages/Furnace.jsx', 'utf8');
furnace = furnace.replace('opacity-30', 'opacity-45');
furnace = furnace.replace('bg-primary/20', 'bg-sky-900/30');
fs.writeFileSync('src/pages/Furnace.jsx', furnace);
console.log('Furnace updated');

// 6. HepaAirCleaner.jsx -> Lighten hero overlay bluish shade
let hepa = fs.readFileSync('src/pages/HepaAirCleaner.jsx', 'utf8');
hepa = hepa.replace('opacity-30', 'opacity-45');
hepa = hepa.replace('bg-primary/20', 'bg-sky-900/30');
fs.writeFileSync('src/pages/HepaAirCleaner.jsx', hepa);
console.log('HepaAirCleaner updated');
