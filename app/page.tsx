"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Zap,
  Users,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Menu,
  X,
  ChevronRight,
  Award,
  Target,
} from "lucide-react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = (): void => {
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Aude Media Creative
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: "home", label: "Beranda" },
                  { id: "about", label: "Tentang" },
                  { id: "services", label: "Layanan" },
                  { id: "portfolio", label: "Portfolio" },
                  { id: "contact", label: "Kontak" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-cyan-400 border-b-2 border-cyan-400"
                        : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50 rounded-md"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-cyan-400 hover:bg-slate-800"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 border-t border-slate-700/50 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: "home", label: "Beranda" },
                { id: "about", label: "Tentang" },
                { id: "services", label: "Layanan" },
                { id: "portfolio", label: "Portfolio" },
                { id: "contact", label: "Kontak" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 rounded-md ${
                    activeSection === item.id
                      ? "text-cyan-400 bg-slate-800/80"
                      : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Aude Media Creative
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-cyan-300 mb-6 font-semibold">
                Software Developer
              </h2>
              <p className="text-lg text-slate-300 mb-8 text-pretty leading-relaxed">
                Kami menciptakan solusi digital inovatif yang mengubah ide Anda
                menjadi aplikasi yang powerful dan user-friendly. Dengan
                pengalaman bertahun-tahun dalam pengembangan software, kami siap
                membantu bisnis Anda berkembang di era digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Mulai Proyek
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("portfolio")}
                  className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-cyan-500"
                >
                  Lihat Portfolio
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
                <Card className="relative bg-slate-800/80 backdrop-blur-xl border-slate-700/50 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                          <Code2 className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">
                            Clean Code
                          </h3>
                          <p className="text-sm text-slate-400">
                            Kode yang rapi dan maintainable
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                          <Zap className="h-6 w-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">
                            Fast Performance
                          </h3>
                          <p className="text-sm text-slate-400">
                            Optimasi performa maksimal
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center">
                          <Users className="h-6 w-6 text-emerald-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">
                            User Focused
                          </h3>
                          <p className="text-sm text-slate-400">
                            Pengalaman pengguna terbaik
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tentang Kami
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto text-pretty">
              Aude Media Creative adalah perusahaan pengembangan software yang
              berdedikasi untuk menciptakan solusi digital inovatif
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Visi & Misi Kami
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Visi</h4>
                    <p className="text-slate-300 text-pretty">
                      Menjadi partner terpercaya dalam transformasi digital
                      bisnis dengan menyediakan solusi software berkualitas
                      tinggi.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Misi</h4>
                    <p className="text-slate-300 text-pretty">
                      Mengembangkan aplikasi yang user-friendly, scalable, dan
                      sesuai dengan kebutuhan spesifik setiap klien.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 bg-slate-800/80 border-slate-700/50 hover:bg-slate-700/80 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    5+
                  </div>
                  <div className="text-sm text-slate-400">Tahun Pengalaman</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-slate-800/80 border-slate-700/50 hover:bg-slate-700/80 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <div className="text-sm text-slate-400">Proyek Selesai</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-slate-800/80 border-slate-700/50 hover:bg-slate-700/80 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                    30+
                  </div>
                  <div className="text-sm text-slate-400">Klien Puas</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-slate-800/80 border-slate-700/50 hover:bg-slate-700/80 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-slate-400">Support</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto text-pretty">
              Kami menyediakan berbagai layanan pengembangan software untuk
              memenuhi kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Web Development",
                description:
                  "Pengembangan website responsif dan modern menggunakan teknologi terkini seperti React, Next.js, dan Node.js.",
                features: [
                  "Responsive Design",
                  "SEO Optimized",
                  "Fast Loading",
                  "Modern UI/UX",
                ],
                gradient: "from-cyan-500/20 to-blue-500/20",
                iconColor: "text-cyan-400",
              },
              {
                icon: Smartphone,
                title: "Mobile Development",
                description:
                  "Aplikasi mobile native dan cross-platform untuk iOS dan Android dengan performa optimal.",
                features: [
                  "Native iOS/Android",
                  "React Native",
                  "Flutter",
                  "Progressive Web App",
                ],
                gradient: "from-purple-500/20 to-pink-500/20",
                iconColor: "text-purple-400",
              },
              {
                icon: Database,
                title: "Backend Development",
                description:
                  "Sistem backend yang robust dan scalable dengan API yang aman dan efisien.",
                features: [
                  "RESTful API",
                  "Database Design",
                  "Cloud Integration",
                  "Security Implementation",
                ],
                gradient: "from-emerald-500/20 to-teal-500/20",
                iconColor: "text-emerald-400",
              },
              {
                icon: Code2,
                title: "Custom Software",
                description:
                  "Pengembangan software khusus sesuai kebutuhan bisnis spesifik Anda.",
                features: [
                  "Business Analysis",
                  "Custom Solution",
                  "Integration",
                  "Maintenance",
                ],
                gradient: "from-orange-500/20 to-red-500/20",
                iconColor: "text-orange-400",
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description:
                  "Optimasi performa aplikasi untuk meningkatkan kecepatan dan efisiensi.",
                features: [
                  "Code Optimization",
                  "Database Tuning",
                  "Caching Strategy",
                  "Monitoring",
                ],
                gradient: "from-yellow-500/20 to-orange-500/20",
                iconColor: "text-yellow-400",
              },
              {
                icon: Users,
                title: "Consulting & Support",
                description:
                  "Konsultasi teknologi dan dukungan teknis untuk proyek pengembangan Anda.",
                features: [
                  "Technical Consulting",
                  "24/7 Support",
                  "Training",
                  "Documentation",
                ],
                gradient: "from-indigo-500/20 to-purple-500/20",
                iconColor: "text-indigo-400",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-2 bg-slate-800/80 backdrop-blur-lg border-slate-700/50"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 mb-4 text-pretty">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <div
                          className={`w-1.5 h-1.5 ${service.iconColor.replace(
                            "text-",
                            "bg-"
                          )} rounded-full`}
                        ></div>
                        <span className="text-sm text-slate-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-800/50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Portfolio
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto text-pretty">
              Beberapa proyek yang telah kami kerjakan dengan hasil yang
              memuaskan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                category: "Web Development",
                description:
                  "Platform e-commerce lengkap dengan sistem pembayaran, inventory management, dan dashboard admin.",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                image: "/modern-ecommerce-interface.png",
                categoryColor:
                  "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
              },
              {
                title: "Mobile Banking App",
                category: "Mobile Development",
                description:
                  "Aplikasi mobile banking dengan fitur transfer, pembayaran, dan investasi yang aman.",
                tech: ["React Native", "Firebase", "Biometric Auth"],
                image: "/mobile-banking-app.png",
                categoryColor:
                  "bg-purple-500/20 text-purple-300 border-purple-500/30",
              },
              {
                title: "CRM System",
                category: "Custom Software",
                description:
                  "Sistem manajemen pelanggan terintegrasi untuk meningkatkan efisiensi sales dan marketing.",
                tech: ["Vue.js", "Laravel", "MySQL", "Redis"],
                image: "/crm-dashboard-interface.jpg",
                categoryColor:
                  "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
              },
              {
                title: "Learning Management System",
                category: "Web Development",
                description:
                  "Platform pembelajaran online dengan fitur video streaming, quiz, dan progress tracking.",
                tech: ["Next.js", "PostgreSQL", "AWS", "WebRTC"],
                image: "/online-learning-platform.png",
                categoryColor:
                  "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
              },
              {
                title: "IoT Dashboard",
                category: "Custom Software",
                description:
                  "Dashboard monitoring dan kontrol perangkat IoT dengan real-time data visualization.",
                tech: ["Angular", "Python", "InfluxDB", "MQTT"],
                image: "/iot-monitoring-dashboard.jpg",
                categoryColor:
                  "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
              },
              {
                title: "Restaurant POS System",
                category: "Mobile Development",
                description:
                  "Sistem point of sale untuk restoran dengan fitur order management dan inventory.",
                tech: ["Flutter", "Firebase", "Thermal Printer API"],
                image: "/restaurant-pos-system-interface.jpg",
                categoryColor:
                  "bg-purple-500/20 text-purple-300 border-purple-500/30",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 bg-slate-800/80 backdrop-blur-lg border-slate-700/50"
              >
                <div className="aspect-video overflow-hidden bg-slate-700/50 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center group-hover:from-slate-500 group-hover:to-slate-700 transition-all duration-300">
                            <span class="text-slate-400 text-sm">Project Preview</span>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      className={`text-xs border ${project.categoryColor}`}
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 text-pretty">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-slate-600 text-slate-400 hover:border-cyan-500 hover:text-cyan-300 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hubungi Kami
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto text-pretty">
              Siap memulai proyek Anda? Mari diskusikan kebutuhan dan wujudkan
              ide digital Anda bersama kami
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Mari Berkolaborasi
              </h3>
              <p className="text-slate-300 mb-8 text-pretty">
                Kami siap membantu mewujudkan visi digital Anda. Hubungi kami
                untuk konsultasi gratis dan diskusi tentang proyek Anda.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-slate-300">hello@audemedia.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Telepon</h4>
                    <p className="text-slate-300">+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Alamat</h4>
                    <p className="text-slate-300">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-white mb-4">Ikuti Kami</h4>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-600 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-cyan-500"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-600 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-cyan-500"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-600 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-cyan-500"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800/80 backdrop-blur-lg border-slate-700/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Kirim Pesan
                </h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Nama
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-700/50 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="Nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-700/50 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Subjek
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-700/50 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Subjek pesan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-700/50 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none transition-all duration-300"
                      placeholder="Ceritakan tentang proyek Anda..."
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    Kirim Pesan
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Aude Media Creative
              </h3>
              <p className="text-slate-300 mb-4 text-pretty">
                Partner terpercaya untuk solusi digital Anda. Kami mengembangkan
                software berkualitas tinggi yang membantu bisnis berkembang.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Layanan</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Web Development
                </li>
                <li className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Mobile Development
                </li>
                <li className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Backend Development
                </li>
                <li className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Custom Software
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Kontak</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="hover:text-cyan-300 transition-colors">
                  hello@audemedia.com
                </li>
                <li className="hover:text-cyan-300 transition-colors">
                  +62 812-3456-7890
                </li>
                <li className="hover:text-cyan-300 transition-colors">
                  Jakarta, Indonesia
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 Aude Media Creative. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
