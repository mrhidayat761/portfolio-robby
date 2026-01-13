'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Code2, Server, Database, Zap, Mail, MessageCircle, Menu, X, BarChart3, Wrench } from 'lucide-react';

// Komponen Logo WhatsApp
const WhatsAppLogo = ({ size = 24, className = "" }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function PortfolioFullStack() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (item: any) => {
    setIsMobileMenuOpen(false);
    let targetId = "";
    
    if (typeof item === 'string') {
        if (item === 'About') targetId = "about"; 
        else if (item === 'Projects') targetId = "projects";
        else if (item === 'Services') targetId = "services";
        else if (item === 'Contact') targetId = "contact"; 
        else if (item === 'Frontend' || item === 'Backend' || item === 'Tools') {
          targetId = "tech";
          setActiveTab(item.toLowerCase());
        } else if (item === 'Tech Stack') {
           targetId = "tech";
        }
    }
    
    // Fallback otomatis
    if (!targetId && typeof item === 'string') {
        targetId = item.toLowerCase();
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (id: any) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- FRONTEND STACK ---
  const frontend = [
    { tech: "React", level: 95, description: "Build interactive UI dengan hooks, context API, dan state management", projects: 12, color: "from-sky-500 to-blue-600" },
    { tech: "Next.js", level: 90, description: "SSR, SSG, API routes untuk aplikasi production-ready", projects: 8, color: "from-cyan-500 to-sky-600" },
    { tech: "Vue.js", level: 88, description: "Composition API dan reactive data binding", projects: 6, color: "from-blue-500 to-indigo-600" },
    { tech: "Tailwind CSS", level: 96, description: "Utility-first CSS untuk rapid UI development", projects: 20, color: "from-sky-400 to-cyan-500" },
    { tech: "TypeScript", level: 87, description: "Static typing untuk skalabilitas dan maintainability kode frontend", projects: 10, color: "from-blue-500 to-purple-600" },
    { tech: "JavaScript (ES6+)", level: 98, description: "Fundamental modern web development dengan fitur terkini", projects: 25, color: "from-yellow-500 to-orange-500" }
  ];

  // --- BACKEND STACK ---
  const backend = [
    { tech: "PHP", level: 93, description: "Native PHP untuk logika bisnis, integrasi, dan sistem legacy", projects: 20, color: "from-purple-500 to-fuchsia-600" },
    { tech: "Laravel", level: 90, description: "Framework PHP MVC untuk aplikasi web enterprise & UMKM", projects: 14, color: "from-red-500 to-rose-600" },
    { tech: "CodeIgniter", level: 85, description: "Framework PHP ringan untuk proyek cepat & tugas akademik", projects: 9, color: "from-orange-500 to-red-500" },
    { tech: "Node.js", level: 92, description: "Server-side JavaScript dengan Express, Koa, dan Fastify", projects: 15, color: "from-blue-600 to-sky-500" },
    { tech: "Express.js", level: 94, description: "REST API development, middleware, routing", projects: 18, color: "from-sky-600 to-blue-500" },
    { tech: "Python", level: 82, description: "Pengembangan script, data processing, dan integrasi AI/ML", projects: 7, color: "from-green-500 to-emerald-600" },
    { tech: "MySQL", level: 88, description: "Relational database design, query optimization, migration", projects: 16, color: "from-blue-700 to-cyan-600" },
    { tech: "PostgreSQL", level: 86, description: "Database open-source kuat untuk sistem transaksional", projects: 10, color: "from-sky-700 to-blue-600" },
    { tech: "MongoDB", level: 89, description: "NoSQL database untuk aplikasi fleksibel & scalable", projects: 12, color: "from-cyan-600 to-sky-500" }
  ];

  // --- TOOLS & DEVOPS STACK (Baru) ---
  const tools = [
    { tech: "Git & GitHub", level: 95, description: "Version control, branching strategy, dan kolaborasi tim", projects: 30, color: "from-gray-600 to-slate-700" },
    { tech: "Postman", level: 90, description: "API Testing, dokumentasi endpoints, dan automation", projects: 22, color: "from-orange-400 to-amber-500" },
    { tech: "Nginx", level: 80, description: "Web server configuration, reverse proxy, load balancing", projects: 8, color: "from-green-600 to-teal-600" },
    { tech: "Docker", level: 75, description: "Containerization aplikasi untuk environment yang konsisten", projects: 5, color: "from-blue-600 to-indigo-500" },
    { tech: "Authentication", level: 91, description: "Implementasi JWT, OAuth2, dan Session Management", projects: 14, color: "from-red-500 to-pink-600" },
    { tech: "SEO Optimization", level: 85, description: "Technical SEO, Core Web Vitals, dan performa website", projects: 12, color: "from-yellow-500 to-orange-400" }
  ];

  const projects = [
    { name: "E-Commerce Platform", description: "Platform belanja online dengan payment gateway dan real-time inventory", frontend: ["React", "Redux", "Tailwind CSS"], backend: ["Node.js", "Express", "MongoDB"], features: ["Product Catalog", "Shopping Cart", "Payment", "Dashboard"], year: "2024", gradient: "from-sky-500 to-blue-600" },
    { name: "Real-time Chat App", description: "Aplikasi chat dengan WebSocket, message history, dan user presence", frontend: ["Next.js", "Socket.io", "Tailwind"], backend: ["Node.js", "Express", "PostgreSQL", "Redis"], features: ["WebSocket", "Message History", "User Status", "File Sharing"], year: "2024", gradient: "from-cyan-500 to-sky-600" },
    { name: "Analytics Dashboard", description: "Dashboard analytics dengan visualisasi data real-time dan export reports", frontend: ["React", "Chart.js", "Tailwind"], backend: ["Node.js", "Express", "MongoDB"], features: ["Real-time Data", "Custom Reports", "Export Data", "Management"], year: "2023", gradient: "from-blue-500 to-indigo-600" },
    { name: "Social Media Clone", description: "Platform media sosial dengan feed, comments, likes, dan follow system", frontend: ["Vue.js", "Vuex", "Tailwind"], backend: ["Node.js", "Express", "PostgreSQL"], features: ["User Feed", "Comments", "Likes", "Follow System"], year: "2023", gradient: "from-sky-400 to-cyan-500" }
  ];

  const services = [
    {
      category: "Pembuatan Web Custom",
      icon: "🛠️",
      items: [
        "Website custom dari nol dengan Laravel, CodeIgniter, atau native PHP",
        "Disesuaikan sepenuhnya dengan visi & kebutuhan bisnis Anda",
        "Responsive, cepat, dan mudah dikelola"
      ]
    },
    {
      category: "Penambahan Fitur & Perbaikan",
      icon: "🔧",
      items: [
        "Tambah fitur unggulan ke website lama (Laravel/CI/PHP)",
        "Perbaikan bug, error, atau performa lambat",
        "Optimasi SEO & keamanan website"
      ]
    },
    {
      category: "Bantuan Akademik",
      icon: "🎓",
      items: [
        "Pengembangan website tugas kuliah/sekolah (PHP-based)",
        "Hosting sementara untuk tugas akhir (siap akses publik)",
        "Dokumentasi lengkap & bimbingan teknis"
      ]
    },
    {
      category: "Konsultasi IT & Teknologi",
      icon: "💡",
      items: [
        "Strategi pengembangan sistem digital",
        "Rekomendasi stack teknologi terbaik",
        "Solusi IT untuk UMKM & startup"
      ]
    }
  ];

  const whatsappNumber = "6282223750826"; 
  const email = "mrhidayat761@gmail.com";

  // Helper untuk memilih data stack yang aktif
  const getActiveData = () => {
    if (activeTab === 'frontend') return frontend;
    if (activeTab === 'backend') return backend;
    return tools;
  };

  return (
    <div className="bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 text-slate-900 overflow-hidden">
      
      {/* Background Animated */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3">
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition transform group" title="Hubungi via WhatsApp">
          <WhatsAppLogo size={28} />
          <span className="absolute right-20 bg-green-600 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Chat di WhatsApp</span>
        </a>
        <a href={`mailto:${email}`} className="w-16 h-16 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition transform group" title="Kirim Email">
          <Mail size={28} />
          <span className="absolute right-20 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Email</span>
        </a>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/70 backdrop-blur-xl shadow-sm border-b border-sky-200/50' : 'bg-white/40 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center relative z-10">
            {/* Logo */}
            <div className="text-2xl font-black cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                RobbyDevXVX
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-12">
              {[
                { name: 'Tech Stack', id: 'tech' },
                { name: 'Projects', id: 'projects' },
                { name: 'Services', id: 'services' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' } 
              ].map((item) => (
                <button 
                  key={item.name} 
                  onClick={() => scrollToSection(item.name)}
                  className="font-medium text-slate-700 hover:text-sky-900 transition relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-700 hover:text-sky-600 transition"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-sky-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200">
              {[
                { name: 'Tech Stack', id: 'tech' },
                { name: 'Projects', id: 'projects' },
                { name: 'Services', id: 'services' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' } 
              ].map((item) => (
                <button 
                  key={item.name} 
                  onClick={() => scrollToSection(item.name)}
                  className="text-left font-medium text-lg text-slate-700 hover:text-sky-600 py-2 border-b border-slate-100 last:border-0"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative z-10 pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-6">
              <span className="text-xs font-semibold text-sky-900 bg-sky-100 px-4 py-2 rounded-full border border-sky-200">
                Full Stack Developer
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                RobbyDevXVX 
              </span>
            </h1>
            <p className="text-lg text-slate-700 mb-10 leading-relaxed max-w-lg font-light">
              ROBBYDEVXVX | Jasa Website & Aplikasi 🛠 Bikin Aplikasi & Website Custom Sesuai Request 🏫 Sekolah | 🏪 Toko | 💼 Kantor | 👤 Personal 💡 Konsultasi Gratis sampai nemu solusi! 
            </p>
            <div className="flex gap-4">
              <button onClick={() => handleNavClick('projects')} className="px-8 py-3 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-sky-500/40 transition flex items-center gap-2 group">
                Lihat Proyek <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
              <button 
                onClick={() => handleNavClick('services')}
                className="px-8 py-3 border-2 border-sky-600 text-sky-700 rounded-lg font-semibold hover:bg-sky-50 transition backdrop-blur-sm"
              >
                Lihat Layanan
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sky-200/50 shadow-sm hover:shadow-md hover:border-sky-300/70 transition group cursor-pointer">
                <Code2 size={32} className="text-sky-600 mb-3 group-hover:text-sky-700 transition" />
                <p className="font-semibold text-slate-900 text-sm">Frontend</p>
                <p className="text-xs text-slate-600 mt-1">React, Next.js, Vue</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-sm hover:shadow-md hover:border-blue-300/70 transition group cursor-pointer">
                <Server size={32} className="text-blue-600 mb-3 group-hover:text-blue-700 transition" />
                <p className="font-semibold text-slate-900 text-sm">Backend</p>
                <p className="text-xs text-slate-600 mt-1">PHP, Laravel, Node.js</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-cyan-200/50 shadow-sm hover:shadow-md hover:border-cyan-300/70 transition group cursor-pointer">
                <Database size={32} className="text-cyan-600 mb-3 group-hover:text-cyan-700 transition" />
                <p className="font-semibold text-slate-900 text-sm">Database</p>
                <p className="text-xs text-slate-600 mt-1">MySQL, PostgreSQL</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sky-200/50 shadow-sm hover:shadow-md hover:border-sky-300/70 transition group cursor-pointer">
                <Zap size={32} className="text-sky-600 mb-3 group-hover:text-sky-700 transition" />
                <p className="font-semibold text-slate-900 text-sm">Tools</p>
                <p className="text-xs text-slate-600 mt-1">Git, Postman, Nginx</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section (UPDATED: Added Tools Tab) */}
      <section id="tech" className="relative z-10 py-24 px-6 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-4 text-slate-900">Tech Stack</h2>
          <p className="text-lg text-slate-700 mb-16 max-w-2xl">
            Teknologi modern yang saya kuasai untuk membangun aplikasi production-ready
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['frontend', 'backend', 'tools'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-lg font-semibold transition ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-lg shadow-sky-500/40'
                    : 'bg-white text-slate-900 border-2 border-sky-200 hover:border-sky-300'
                }`}
              >
                {tab === 'frontend' ? '🎨 Frontend' : tab === 'backend' ? '⚙️ Backend' : '🛠️ Tools'}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {getActiveData().map((tech, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${tech.color} p-0.5 rounded-xl`}>
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl hover:bg-white transition">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{tech.tech}</h3>
                    <span className="bg-sky-100 text-sky-900 text-xs font-bold px-3 py-1 rounded-full">
                      {tech.projects} projects
                    </span>
                  </div>
                  <p className="text-slate-700 mb-6 text-sm">{tech.description}</p>
                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-slate-600">Proficiency</span>
                      <span className="text-sm font-bold text-slate-900">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-sky-100 rounded-full h-2.5">
                      <div className={`h-2.5 rounded-full bg-gradient-to-r ${tech.color} transition-all`} style={{ width: `${tech.level}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black mb-4 text-slate-900">Proyek Full-Stack</h2>
        <p className="text-lg text-slate-700 mb-16">
          Aplikasi yang telah saya bangun dari frontend hingga backend infrastructure
        </p>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${project.gradient} p-0.5 rounded-xl group hover:shadow-2xl transition`}>
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.name}</h3>
                        <p className="text-sm text-slate-700">{project.description}</p>
                      </div>
                      <span className="text-xs font-semibold text-sky-900 bg-sky-100 px-3 py-1 rounded-full whitespace-nowrap">
                        {project.year}
                      </span>
                    </div>
                    <h4 className="font-semibold text-xs uppercase tracking-wide text-slate-600 mb-3 mt-6">Fitur Utama</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span key={i} className="bg-sky-50 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-sky-200">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-xs uppercase tracking-wide text-slate-600 mb-3 flex items-center gap-2">
                        <Code2 size={14} /> Frontend Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.frontend.map((tech, i) => (
                          <span key={i} className="bg-sky-100 text-sky-900 text-xs font-semibold px-3 py-1.5 rounded-lg border border-sky-200">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs uppercase tracking-wide text-slate-600 mb-3 flex items-center gap-2">
                        <Server size={14} /> Backend Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.backend.map((tech, i) => (
                          <span key={i} className="bg-blue-100 text-blue-900 text-xs font-semibold px-3 py-1.5 rounded-lg border border-blue-200">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-24 px-6 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-4 text-slate-900">Jasa & Layanan</h2>
          <p className="text-lg text-slate-700 mb-16">
            Solusi tepat untuk kebutuhan digital Anda — dari ide hingga deploy!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white/70 backdrop-blur-sm p-8 rounded-xl border border-sky-200/50 shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{service.category}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 mt-1 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-24 px-6 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center text-slate-900">Pencapaian</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[{ number: "40+", label: "Full-Stack Projects" }, { number: "8+", label: "Years Experience" }, { number: "50+", label: "Happy Clients" }, { number: "100+", label: "Apps Deployed" }].map((stat, idx) => (
              <div key={idx} className="text-center bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-sky-200/50 shadow-sm hover:shadow-md transition">
                <div className="text-4xl font-black bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <p className="text-slate-700 font-medium text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (CONTACT) */}
      <section id="contact" className="relative z-10 py-24 px-6 bg-gradient-to-r from-sky-200/50 via-blue-100/50 to-cyan-100/50 border-t border-sky-200/50 border-b border-sky-200/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6 text-slate-900">Siap Untuk Proyek Berikutnya?</h2>
          <p className="text-lg text-slate-700 mb-10">
            Saya terbuka untuk freelance, tugas kuliah, atau kolaborasi bisnis. Mari wujudkan ide Anda!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href={`mailto:${email}`} className="px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-sky-500/40 transition flex items-center justify-center gap-2">
              <Mail size={20} /> Email
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-green-500/40 transition flex items-center justify-center gap-2">
              <WhatsAppLogo size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p className="text-center py-8 text-slate-600 text-sm bg-white/40 backdrop-blur-sm">
          &copy; {new Date().getFullYear()} RobbyDevXVX. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
