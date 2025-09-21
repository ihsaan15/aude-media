"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-foreground">Aude Media Creative</h1>
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
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-accent border-b-2 border-accent"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
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
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.id
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
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
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Aude Media Creative</h1>
              <h2 className="text-xl md:text-2xl text-accent mb-6">Software Developer</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                Kami menciptakan solusi digital inovatif yang mengubah ide Anda menjadi aplikasi yang powerful dan
                user-friendly. Dengan pengalaman bertahun-tahun dalam pengembangan software, kami siap membantu bisnis
                Anda berkembang di era digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Mulai Proyek
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection("portfolio")}>
                  Lihat Portfolio
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg blur-3xl"></div>
                <Card className="relative bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                          <Code2 className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Clean Code</h3>
                          <p className="text-sm text-muted-foreground">Kode yang rapi dan maintainable</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                          <Zap className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Fast Performance</h3>
                          <p className="text-sm text-muted-foreground">Optimasi performa maksimal</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                          <Users className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">User Focused</h3>
                          <p className="text-sm text-muted-foreground">Pengalaman pengguna terbaik</p>
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
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tentang Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Aude Media Creative adalah perusahaan pengembangan software yang berdedikasi untuk menciptakan solusi
              digital inovatif
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Visi & Misi Kami</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Visi</h4>
                    <p className="text-muted-foreground text-pretty">
                      Menjadi partner terpercaya dalam transformasi digital bisnis dengan menyediakan solusi software
                      berkualitas tinggi.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Misi</h4>
                    <p className="text-muted-foreground text-pretty">
                      Mengembangkan aplikasi yang user-friendly, scalable, dan sesuai dengan kebutuhan spesifik setiap
                      klien.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Proyek Selesai</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-accent mb-2">30+</div>
                  <div className="text-sm text-muted-foreground">Klien Puas</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Layanan Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Kami menyediakan berbagai layanan pengembangan software untuk memenuhi kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Web Development",
                description:
                  "Pengembangan website responsif dan modern menggunakan teknologi terkini seperti React, Next.js, dan Node.js.",
                features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
              },
              {
                icon: Smartphone,
                title: "Mobile Development",
                description: "Aplikasi mobile native dan cross-platform untuk iOS dan Android dengan performa optimal.",
                features: ["Native iOS/Android", "React Native", "Flutter", "Progressive Web App"],
              },
              {
                icon: Database,
                title: "Backend Development",
                description: "Sistem backend yang robust dan scalable dengan API yang aman dan efisien.",
                features: ["RESTful API", "Database Design", "Cloud Integration", "Security Implementation"],
              },
              {
                icon: Code2,
                title: "Custom Software",
                description: "Pengembangan software khusus sesuai kebutuhan bisnis spesifik Anda.",
                features: ["Business Analysis", "Custom Solution", "Integration", "Maintenance"],
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Optimasi performa aplikasi untuk meningkatkan kecepatan dan efisiensi.",
                features: ["Code Optimization", "Database Tuning", "Caching Strategy", "Monitoring"],
              },
              {
                icon: Users,
                title: "Consulting & Support",
                description: "Konsultasi teknologi dan dukungan teknis untuk proyek pengembangan Anda.",
                features: ["Technical Consulting", "24/7 Support", "Training", "Documentation"],
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
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
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Beberapa proyek yang telah kami kerjakan dengan hasil yang memuaskan
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
              },
              {
                title: "Mobile Banking App",
                category: "Mobile Development",
                description: "Aplikasi mobile banking dengan fitur transfer, pembayaran, dan investasi yang aman.",
                tech: ["React Native", "Firebase", "Biometric Auth"],
                image: "/mobile-banking-app.png",
              },
              {
                title: "CRM System",
                category: "Custom Software",
                description:
                  "Sistem manajemen pelanggan terintegrasi untuk meningkatkan efisiensi sales dan marketing.",
                tech: ["Vue.js", "Laravel", "MySQL", "Redis"],
                image: "/crm-dashboard-interface.jpg",
              },
              {
                title: "Learning Management System",
                category: "Web Development",
                description: "Platform pembelajaran online dengan fitur video streaming, quiz, dan progress tracking.",
                tech: ["Next.js", "PostgreSQL", "AWS", "WebRTC"],
                image: "/online-learning-platform.png",
              },
              {
                title: "IoT Dashboard",
                category: "Custom Software",
                description: "Dashboard monitoring dan kontrol perangkat IoT dengan real-time data visualization.",
                tech: ["Angular", "Python", "InfluxDB", "MQTT"],
                image: "/iot-monitoring-dashboard.jpg",
              },
              {
                title: "Restaurant POS System",
                category: "Mobile Development",
                description: "Sistem point of sale untuk restoran dengan fitur order management dan inventory.",
                tech: ["Flutter", "Firebase", "Thermal Printer API"],
                image: "/restaurant-pos-system-interface.jpg",
              },
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
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
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hubungi Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Siap memulai proyek Anda? Mari diskusikan kebutuhan dan wujudkan ide digital Anda bersama kami
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Mari Berkolaborasi</h3>
              <p className="text-muted-foreground mb-8 text-pretty">
                Kami siap membantu mewujudkan visi digital Anda. Hubungi kami untuk konsultasi gratis dan diskusi
                tentang proyek Anda.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">hello@audemedia.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Telepon</h4>
                    <p className="text-muted-foreground">+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Alamat</h4>
                    <p className="text-muted-foreground">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-foreground mb-4">Ikuti Kami</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Instagram className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Kirim Pesan</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Nama</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subjek</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Subjek pesan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Pesan</label>
                    <textarea
                      rows={5}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Ceritakan tentang proyek Anda..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
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
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Aude Media Creative</h3>
              <p className="text-primary-foreground/80 mb-4 text-pretty">
                Partner terpercaya untuk solusi digital Anda. Kami mengembangkan software berkualitas tinggi yang
                membantu bisnis berkembang.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>Backend Development</li>
                <li>Custom Software</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>hello@audemedia.com</li>
                <li>+62 812-3456-7890</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">© 2024 Aude Media Creative. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
