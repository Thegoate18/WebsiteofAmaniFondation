import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Stethoscope, 
  Leaf, 
  Bird, 
  Briefcase, 
  Scale, 
  Megaphone,
  CheckCircle2,
  Users,
  Target,
  BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    id: "education",
    title: "Éducation",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
    engagement: "Garantir un accès équitable à une éducation de qualité pour tous les enfants de Kinshasa.",
    actions: [
      "Réhabilitation d'écoles primaires dans les zones rurales.",
      "Distribution de kits scolaires et de manuels pédagogiques.",
      "Programmes de formation continue pour les enseignants.",
      "Soutien à la scolarisation des filles et des enfants vulnérables."
    ],
    impact: [
      { label: "Écoles réhabilitées", value: "12" },
      { label: "Élèves soutenus", value: "2,500" },
      { label: "Bourses octroyées", value: "150" }
    ]
  },
  {
    id: "sante",
    title: "Santé",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
    engagement: "Améliorer le bien-être physique et mental des populations à travers des services de santé accessibles.",
    actions: [
      "Campagnes de vaccination mobiles dans les quartiers précaires.",
      "Soutien aux centres de santé communautaires en médicaments.",
      "Programmes de sensibilisation sur l'hygiène et la nutrition.",
      "Accompagnement psychologique pour les victimes de violences."
    ],
    impact: [
      { label: "Consultations", value: "15,000+" },
      { label: "Kits d'hygiène", value: "5,000" },
      { label: "Centres soutenus", value: "8" }
    ]
  },
  {
    id: "environnement",
    title: "Environnement",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=1000",
    engagement: "Protéger notre écosystème et promouvoir des pratiques durables pour un avenir vert.",
    actions: [
      "Projets de reboisement urbain et péri-urbain.",
      "Initiatives de gestion et recyclage des déchets plastiques.",
      "Promotion de l'énergie solaire dans les structures sociales.",
      "Éducation environnementale dans les écoles."
    ],
    impact: [
      { label: "Arbres plantés", value: "20,000" },
      { label: "Plastique recyclé", value: "50T" },
      { label: "Clubs verts", value: "15" }
    ]
  },
  {
    id: "paix",
    title: "Paix & Cohésion",
    icon: Bird,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000",
    engagement: "Cultiver le dialogue et la tolérance pour bâtir une société harmonieuse et pacifiée.",
    actions: [
      "Ateliers de médiation et de résolution de conflits.",
      "Forums communautaires pour le dialogue interculturel.",
      "Activités sportives et culturelles pour la paix.",
      "Soutien à la réinsertion des jeunes à risque."
    ],
    impact: [
      { label: "Médiateurs formés", value: "120" },
      { label: "Jeunes réinsérés", value: "450" },
      { label: "Forums organisés", value: "24" }
    ]
  },
  {
    id: "entrepreneuriat",
    title: "Entrepreneuriat",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000",
    engagement: "Autonomiser les citoyens en soutenant l'innovation et la création d'emplois locaux.",
    actions: [
      "Incubateur pour micro-entreprises de jeunes et femmes.",
      "Formations en gestion financière et marketing digital.",
      "Facilitation de l'accès au micro-crédit solidaire.",
      "Accompagnement dans la formalisation des activités."
    ],
    impact: [
      { label: "Projets incubés", value: "85" },
      { label: "Emplois créés", value: "320" },
      { label: "Femmes formées", value: "200" }
    ]
  },
  {
    id: "droits",
    title: "Droits Humains",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000",
    engagement: "Défendre la dignité humaine et lutter contre toutes les formes d'injustice et d'exclusion.",
    actions: [
      "Permanences juridiques gratuites pour les vulnérables.",
      "Sensibilisation sur les droits de l'enfant et de la femme.",
      "Monitoring des violations des droits fondamentaux.",
      "Plaidoyer pour l'accès aux droits civils de base."
    ],
    impact: [
      { label: "Assistance légale", value: "1,200" },
      { label: "Campagnes", value: "12" },
      { label: "Droits rétablis", value: "300+" }
    ]
  },
  {
    id: "plaidoyer",
    title: "Plaidoyer",
    icon: Megaphone,
    image: "https://images.unsplash.com/photo-1544654803-b69140b285a1?auto=format&fit=crop&q=80&w=1000",
    engagement: "Porter la voix des sans-voix auprès des décideurs pour des politiques plus justes.",
    actions: [
      "Campagnes de sensibilisation auprès des autorités locales.",
      "Participation aux commissions de réformes sociales.",
      "Production de rapports d'analyse sur les besoins sociaux.",
      "Mobilisation citoyenne pour des causes d'intérêt général."
    ],
    impact: [
      { label: "Lois influencées", value: "3" },
      { label: "Rapports publiés", value: "8" },
      { label: "Partenaires publics", value: "15" }
    ]
  }
];

export default function ActionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container relative z-10 px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">
            Nos Piliers d'Action
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-sans">
            Une approche holistique pour répondre aux défis complexes du développement humain et social à Kinshasa.
          </p>
        </div>
      </section>

      {/* Pillars Navigation (Desktop) */}
      <nav className="sticky top-[60px] lg:top-[80px] z-40 bg-white shadow-sm hidden lg:block">
        <div className="container px-4 mx-auto">
          <ul className="flex justify-between py-4">
            {pillars.map((pillar) => (
              <li key={pillar.id}>
                <a 
                  href={`#${pillar.id}`}
                  className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-1"
                >
                  <pillar.icon className="w-5 h-5" />
                  {pillar.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Pillar Sections */}
      <div className="divide-y divide-border">
        {pillars.map((pillar, index) => (
          <section 
            key={pillar.id} 
            id={pillar.id}
            className={cn(
              "py-24 transition-colors",
              index % 2 === 0 ? "bg-background" : "bg-muted/30"
            )}
          >
            <div className="container px-4 mx-auto">
              <div className={cn(
                "grid lg:grid-cols-2 gap-12 items-center",
                index % 2 !== 0 && "lg:flex-row-reverse"
              )}>
                <div className={cn("space-y-8", index % 2 !== 0 && "lg:order-2")}>
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary">
                      <pillar.icon className="w-6 h-6" />
                      <span className="font-bold uppercase tracking-widest text-sm">{pillar.title}</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                      {pillar.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold flex items-center gap-2 text-primary mb-3">
                        <Target className="w-5 h-5" />
                        Notre Engagement
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {pillar.engagement}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold flex items-center gap-2 text-primary mb-4">
                        <CheckCircle2 className="w-5 h-5" />
                        Nos Actions
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {pillar.actions.map((action, i) => (
                          <li key={i} className="flex gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <h3 className="text-lg font-bold flex items-center gap-2 text-primary mb-6">
                        <BarChart3 className="w-5 h-5" />
                        Impact en Chiffres
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        {pillar.impact.map((stat, i) => (
                          <div key={i} className="text-center p-4 rounded-xl bg-white shadow-sm border border-border/50">
                            <p className="text-2xl font-serif font-bold text-secondary mb-1">{stat.value}</p>
                            <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground leading-tight">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cn(
                  "relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl",
                  index % 2 !== 0 && "lg:order-1"
                )}>
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Footer */}
      <section className="py-20 bg-secondary text-white">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold">
              Ensemble, multiplions l'impact sur le terrain
            </h2>
            <p className="text-xl text-white/90">
              Chaque action, aussi petite soit-elle, contribue à la transformation durable de notre communauté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="default" className="bg-white text-secondary hover:bg-white/90 font-bold px-8">
                Soutenir une action
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
