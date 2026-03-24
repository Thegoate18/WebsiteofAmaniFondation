import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = [
  {
    title: "La Fondation",
    links: [
      { name: "Qui sommes-nous ?", href: "/about" },
      { name: "Nos missions", href: "/missions" },
      { name: "Gouvernance", href: "/governance" },
      { name: "Rapports d'activité", href: "/reports" },
      { name: "Emplois et stages", href: "/jobs" },
    ],
  },
  {
    title: "Nos Actions",
    links: [
      { name: "Éducation", href: "/actions/education" },
      { name: "Santé & Hygiène", href: "/actions/health" },
      { name: "Environnement", href: "/actions/environment" },
      { name: "Urgences", href: "/actions/emergencies" },
      { name: "Protection de l'enfance", href: "/actions/protection" },
    ],
  },
  {
    title: "Nous aider",
    links: [
      { name: "Faire un don", href: "/donate" },
      { name: "Devenir bénévole", href: "/volunteer" },
      { name: "Partenariats", href: "/partners" },
      { name: "Legs et donations", href: "/bequests" },
      { name: "Boutique solidaire", href: "/shop" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
                <span className="text-white font-serif font-bold text-xl">AK</span>
              </div>
              <div className="flex flex-col">
                <span className="text-background font-serif font-bold text-lg leading-none">
                  Amani Kwetu
                </span>
                <span className="text-primary text-[10px] font-medium uppercase tracking-widest mt-0.5">
                  Fondation
                </span>
              </div>
            </Link>
            
            <p className="text-background/60 text-sm max-w-sm">
              Engagez-vous à nos côtés pour construire un avenir plus juste et solidaire. Chaque action compte pour transformer des vies.
            </p>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Newsletter</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Votre email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/20"
                />
                <Button variant="secondary" className="px-4">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-primary transition-colors rounded-full">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-primary transition-colors rounded-full">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-primary transition-colors rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-primary transition-colors rounded-full">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        className="text-background/60 hover:text-white text-sm transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Contact</h4>
            <div className="flex flex-col gap-4 text-sm text-background/60">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Avenue de la Paix, B.P. 4567, Goma, Nord-Kivu, RDC</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+243 81 234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@amanikwetu.org</span>
              </div>
            </div>
            
            <Button variant="default" className="mt-4 w-full flex items-center gap-2 font-bold py-6">
              <Heart className="w-5 h-5 fill-current" />
              Faire un don maintenant
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] lg:text-xs text-background/40 uppercase tracking-widest font-medium">
          <p>© {new Date().getFullYear()} Fondation Amani Kwetu. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Gestion des Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
