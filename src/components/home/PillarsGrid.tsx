import { 
  BookOpen, 
  HeartPulse, 
  Leaf, 
  Handshake, 
  Briefcase, 
  Scale, 
  Megaphone,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "Éducation et Recherche",
    description: "Bâtir un avenir grâce au savoir",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    color: "bg-primary/5",
    action: "En savoir plus"
  },
  {
    title: "Santé",
    description: "Un accès aux soins pour tous",
    icon: <HeartPulse className="h-10 w-10 text-secondary" />,
    color: "bg-secondary/5",
    action: "Voir nos cliniques"
  },
  {
    title: "Environnement",
    description: "Protéger notre planète pour les générations futures",
    icon: <Leaf className="h-10 w-10 text-accent" />,
    color: "bg-accent/5",
    action: "Nos projets verts"
  },
  {
    title: "Paix et Réconciliation",
    description: "Construire des ponts entre les communautés",
    icon: <Handshake className="h-10 w-10 text-primary" />,
    color: "bg-primary/5",
    action: "Médiation"
  },
  {
    title: "Entrepreneuriat",
    description: "Autonomisation économique des populations",
    icon: <Briefcase className="h-10 w-10 text-secondary" />,
    color: "bg-secondary/5",
    action: "Soutenir un projet"
  },
  {
    title: "Droits Humains",
    description: "Défendre la dignité et l'égalité pour tous",
    icon: <Scale className="h-10 w-10 text-accent" />,
    color: "bg-accent/5",
    action: "Nos actions juridiques"
  },
  {
    title: "Plaidoyer et Mobilisation",
    description: "Amplifier notre impact",
    icon: <Megaphone className="h-10 w-10 text-primary" />,
    color: "bg-primary/5",
    action: "Nous rejoindre"
  }
];

export const PillarsGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-foreground">
            Les Piliers <span className="text-primary italic">Stratégiques</span>
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Notre approche holistique vise à transformer durablement les communautés à travers sept domaines d'intervention clés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-none transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pillar.color} ${index === 6 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <CardHeader className="pb-4">
                <div className="mb-4 p-3 rounded-2xl bg-white w-fit shadow-sm">
                  {pillar.icon}
                </div>
                <CardTitle className="text-xl font-bold font-serif tracking-tight">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 hover:bg-transparent text-primary font-semibold flex items-center gap-2 group">
                  {pillar.action}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
