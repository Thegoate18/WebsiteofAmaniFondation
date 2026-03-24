import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageCircle,
  Share2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "123 Avenue de la Paix, Gombe, Kinshasa, RDC",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+243 812 345 678",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@amanikwetu.org",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun - Ven : 08:30 - 17:00",
  },
];

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Une question ? Un projet de partenariat ? Nous sommes à votre écoute.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background -mt-10 lg:-mt-16">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-none shadow-md bg-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-foreground mb-1">{info.title}</h3>
                        <p className="text-sm text-muted-foreground">{info.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Socials or extra info */}
              <div className="p-8 bg-secondary/5 rounded-2xl border border-secondary/10 space-y-6">
                <h3 className="text-xl font-serif font-bold text-secondary flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Réseaux Sociaux
                </h3>
                <p className="text-sm text-muted-foreground">
                  Suivez nos actions au quotidien et rejoignez notre communauté en ligne.
                </p>
                <div className="flex gap-4">
                  {['FB', 'TW', 'IG', 'LI'].map((social) => (
                    <button key={social} className="w-10 h-10 bg-white border border-border rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors text-xs font-bold shadow-sm">
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-border/50">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground">Envoyez-nous un message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground ml-1">Nom Complet</label>
                      <Input 
                        placeholder="Votre nom complet" 
                        className="h-12 bg-muted/30 border-transparent focus:bg-white focus:border-primary transition-all rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground ml-1">Email</label>
                      <Input 
                        type="email" 
                        placeholder="votre.email@example.com" 
                        className="h-12 bg-muted/30 border-transparent focus:bg-white focus:border-primary transition-all rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground ml-1">Sujet</label>
                      <Input 
                        placeholder="Demande de partenariat / ou autre question" 
                        className="h-12 bg-muted/30 border-transparent focus:bg-white focus:border-primary transition-all rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground ml-1">Téléphone</label>
                      <Input 
                        placeholder="+243 ..." 
                        className="h-12 bg-muted/30 border-transparent focus:bg-white focus:border-primary transition-all rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground ml-1">Message</label>
                    <Textarea 
                      placeholder="Comment pouvons-nous vous aider ?" 
                      className="min-h-[150px] bg-muted/30 border-transparent focus:bg-white focus:border-primary transition-all rounded-xl resize-none"
                    />
                  </div>
                  <Button size="lg" className="w-full h-14 text-lg font-bold rounded-xl gap-2">
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] bg-muted relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-muted-foreground/10">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <p className="font-serif font-bold text-lg">Nous trouver à Kinshasa</p>
            <div className="w-[100%] h-[400px] grayscale opacity-50 bg-[url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1500')] bg-cover bg-center" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl max-w-xs border border-white">
                <p className="text-sm font-medium text-foreground text-center">
                  Gombe, Kinshasa, RDC
                </p>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  123 Avenue de la Paix
                </p>
                <Button variant="link" className="text-primary font-bold w-full mt-4">
                  Ouvrir dans Google Maps
                </Button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
