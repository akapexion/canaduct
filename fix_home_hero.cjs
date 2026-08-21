const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

if (!content.includes('homeHeroBgImg')) {
  content = content.replace(
    "import furnaceFiltersImg from '../assets/images/furnace-filters.jpg';",
    "import furnaceFiltersImg from '../assets/images/furnace-filters.jpg';\nimport homeHeroBgImg from '../assets/images/home_hero_bg.jpg';"
  );
}

if (content.includes('<div className="absolute inset-0 bg-slate-900 z-0"></div>')) {
  content = content.replace(
    '<div className="absolute inset-0 bg-slate-900 z-0"></div>',
    `<div className="absolute inset-0">
          <img src={homeHeroBgImg} alt="Canaduct Home Hero" className="w-full h-full object-cover opacity-45" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-sky-950/65 to-blue-900/50 z-0"></div>`
  );
}

fs.writeFileSync('src/pages/Home.jsx', content);
console.log('Home hero bg applied successfully');
