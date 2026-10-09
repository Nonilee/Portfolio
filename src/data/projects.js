const projects = [
  {
     id: 'cosmoremit',
  name: 'CosmoRemit',
  category: 'Fintech · Web App',
  summary:
    'A remittance and money-transfer platform for sending money between accounts, with a live backend.',
  problem:
    'Sending money between accounts needed a flow that felt trustworthy and quick, not a form buried in steps.',
  solution:
    'Built multi-step transfer modals, transaction history, and beneficiary management in React, with dedicated pages for account limits, profile, and transfer confirmation — backed by a REST API deployed separately from the frontend.',
  stack: ['React', 'React Router', 'JSON Server', 'JavaScript'],
  links: {
    live: 'https://fintech-cosmo.netlify.app',
    code: 'https://github.com/FinTechWeb/FinTech',
  },
  image: '/assets/images/portfolio/cosmoremit-1.png',
  featured: true,
  },
  {
  id: 'coffee-site',
  name: 'Coffee Shop Landing Page',
  category: 'Marketing Site',
  summary:
    'A landing page for a coffee shop focused on good coffee and a relaxed atmosphere for guests to unwind.',
  problem:
    'A coffee shop needed a simple site that conveys atmosphere and quality, not just a menu list.',
  solution:
    'Built a static landing page in plain HTML, CSS, and JavaScript, deployed on Netlify.',
  stack: ['HTML', 'CSS', 'JavaScript'],
  links: {
    live: 'https://candid-dieffenbachia-9618b8.netlify.app',
    code: '#',
  },
  image: '/assets/images/portfolio/coffee-site-1.png',
  featured: true,
},
  {
    id: 'area-landing-page',
  name: 'Area',
  category: 'Marketing Site · Product Launch',
  summary:
    'A model product launch landing page built to practice component-based, mobile-first frontend development.',
  problem:
    'A launch page needs to read clearly on a phone first, since that is where most launch traffic lands.',
  solution:
    'Built the navigation, header, feature sections, and footer as independent React components, with a hamburger menu that only appears at mobile and tablet widths.',
  stack: ['React', 'Vite', 'CSS'],
  links: {
    live: 'https://area-landing-page.netlify.app',
    code: 'https://github.com/Nonilee/area-LandingPage',
  },
  image: '/assets/images/portfolio/area-landing-page-1.png',
  featured: false,
  },
  
];

export default projects;
