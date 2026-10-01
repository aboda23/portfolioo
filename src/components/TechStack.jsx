import React from 'react';

const TECH_ITEMS = [
  {
    name: 'Next.js',
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 180 180" fill="currentColor">
        <circle cx="90" cy="90" r="85" fill="#000" stroke="#333" strokeWidth="6" />
        <path d="M149.508 157.52L69.142 54H54v72h15V74.453l66.974 86.87a84.975 84.975 0 0013.534-3.803z" fill="#FFF" />
        <path d="M115 54h15v72h-15z" fill="#FFF" />
      </svg>
    )
  },
  {
    name: 'React',
    icon: (
      <svg className="w-8 h-8 text-sky-400" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="currentColor" strokeWidth="4" />
        <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="currentColor" strokeWidth="4" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="currentColor" strokeWidth="4" transform="rotate(120 50 50)" />
        <circle cx="50" cy="50" r="7" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg className="w-8 h-8 text-teal-400" viewBox="0 0 100 100" fill="currentColor">
        <path d="M25 40c5-10 15-15 30-15 15 0 20 10 25 15 5 5 10 7.5 15 7.5s10-2.5 15-7.5c-5 10-15 15-30 15-15 0-20-10-25-15-5-5-10-7.5-15-7.5S30 35 25 40zm-20 25c5-10 15-15 30-15 15 0 20 10 25 15 5 5 10 7.5 15 7.5S95 70 100 65c-5 10-15 15-30 15-15 0-20-10-25-15-5-5-10-7.5-15-7.5S10 60 5 65z" />
      </svg>
    )
  },
  {
    name: 'JavaScript',
    icon: (
      <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 100 100" fill="currentColor">
        <rect width="100" height="100" rx="16" fill="#F7DF1E" />
        <path d="M57 73c3 4 7 7 14 7 6 0 11-3 11-10 0-7-4-10-12-13l-4-2c-11-4-16-9-16-19 0-11 9-18 22-18 10 0 17 4 21 11l-9 6c-3-4-7-6-12-6-5 0-8 3-8 7 0 5 3 7 11 10l4 2c12 4 17 10 17 20 0 13-10 20-25 20-13 0-22-6-26-15l10-6zM22 72c3 3 6 5 10 5 5 0 8-2 8-8V18h14v46c0 14-8 22-22 22-9 0-16-4-20-10l10-4z" fill="#000" />
      </svg>
    )
  },
  {
    name: 'Node.js',
    icon: (
      <svg className="w-8 h-8 text-emerald-500" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 10L10 33v44l40 23 40-23V33L50 10zm0 14l26 15v30L50 84 24 69V39L50 24z" />
      </svg>
    )
  },
  {
    name: 'MongoDB',
    icon: (
      <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 5C45 20 20 40 20 62c0 18 13 33 30 33s30-15 30-33C80 40 55 20 50 5zm0 85c-1 0-2-3-2-8 0-15 2-45 2-57 0 12 2 42 2 57 0 5-1 8-2 8z" />
      </svg>
    )
  },
  {
    name: 'Vercel',
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 15L95 85H5L50 15Z" />
      </svg>
    )
  }
];

export default function TechStack() {
  return (
    <section className="py-16 sm:py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-2 block">
          TECH STACK
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Technologies I Work With
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          We leverage cutting-edge frameworks and modern developer tooling to build ultra-fast, scalable digital products.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
        {TECH_ITEMS.map((item, index) => (
          <div
            key={index}
            className="group glass-card p-6 rounded-2xl border border-white/[0.08] hover:border-indigo-500/40 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.03] group-hover:bg-indigo-500/10 transition-colors">
              {item.icon}
            </div>
            <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
