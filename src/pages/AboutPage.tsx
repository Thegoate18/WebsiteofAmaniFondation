import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Users, History } from "lucide-react";

/** Portrait officiel — servi depuis `public/images/patricia-phanzu.png` */
const PATRICIA_PHOTO = "/images/patricia-phanzu.png";

const team = [
  {
    name: "Mme Patricia Phanzu",
    role: "Fondatrice & Présidente",
    image: PATRICIA_PHOTO,
  },
  {
    name: "Mme Sarah Kabange",
    role: "Directrice des Opérations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "Marc Luvumbu",
    role: "Responsable Plaidoyer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "Aminata Diallo",
    role: "Coordinatrice Projets Santé",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400&h=400",
  },
];

const values = [
  {
    title: "Solidarité",
    description: "Nous croyons en la force du collectif pour transformer les vies et construire un avenir meilleur.",
    icon: Heart,
  },
  {
    title: "Compassion",
    description: "Chaque action est guidée par l'empathie et le respect de la dignité humaine.",
    icon: Target,
  },
  {
    title: "Intégrité",
    description: "Une transparence totale dans nos actions et une éthique irréprochable au service de tous.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
            Notre Mission, Notre Histoire
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-sans leading-relaxed">
            Depuis 2020, nous œuvrons chaque jour pour apporter espoir et dignité aux populations les plus vulnérables de Kinshasa.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
                <History className="w-4 h-4" />
                Notre Histoire
              </div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
                Fondée en 2020 à Kinshasa
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Amani Kwetu est née d'un constat simple mais alarmant : l'accès aux services de base restait un défi majeur pour de nombreuses familles dans les quartiers précaires de notre capitale.
                </p>
                <p>
                  Ce qui a commencé comme un petit groupe de bénévoles distribuant des kits d'hygiène s'est transformé en une fondation structurée, intervenant dans sept piliers fondamentaux du développement humain.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers d'avoir touché plus de 50 000 bénéficiaires directs, tout en restant fidèles à notre ancrage local et à notre volonté de changement systémique.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1000"
                  alt="History"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary p-8 rounded-xl text-white shadow-xl hidden lg:block">
                <p className="text-4xl font-serif font-bold mb-1">4+</p>
                <p className="text-sm font-bold uppercase tracking-widest">Années d'Impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fondatrice & Présidente — Patricia Phanzu */}
      <section className="py-20 bg-muted/20 border-y border-border/60">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
              Leadership & vision
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
              Fondatrice et présidente
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid lg:grid-cols-[minmax(0,280px)_1fr] gap-12 lg:gap-16 items-start mb-16">
            <div className="mx-auto lg:mx-0 shrink-0">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
                <img
                  src={PATRICIA_PHOTO}
                  alt="Portrait de Patricia Phanzu, fondatrice et présidente de l’ONG AMANI KWETU"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="mt-4 text-center lg:text-left text-sm font-semibold text-foreground">
                Mme Patricia Phanzu
              </p>
              <p className="text-center lg:text-left text-sm text-primary font-medium">
                Fondatrice &amp; Présidente — ONG AMANI KWETU
              </p>
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">
                  Fondatrice et présidente de l’ONG AMANI KWETU
                </span>
                , Patricia Phanzu est une actrice de terrain, une stratège du changement social et une
                bâtisseuse de solutions durables. Elle œuvre avec détermination à la promotion des droits
                des femmes et des filles, au leadership féminin transformationnel, à la santé sexuelle et
                reproductive, à la lutte contre les violences basées sur le genre et à l’autonomisation
                économique des femmes.
              </p>
              <p>
                À travers ses actions, elle contribue activement à transformer les normes sociales, à
                renforcer le pouvoir d’agir des femmes et à faire émerger une nouvelle génération de
                jeunes filles leaders, conscientes, engagées et autonomes.
              </p>
            </div>
          </div>

          <div className="space-y-6 mb-16">
            <h3 className="text-2xl font-serif font-bold text-foreground">
              Qui est Patricia Phanzu&nbsp;?
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Née le 1<sup>er</sup> mai 1983 à Kinshasa, Patricia Phanzu est une leader féministe
                congolaise, épouse et mère de cinq enfants, engagée depuis plus de 10 ans dans la
                transformation sociale et l’autonomisation des femmes et des filles en République
                Démocratique du Congo.
              </p>
              <p>
                Communicologue de formation à l’Université Catholique du Congo, elle a renforcé son
                expertise à travers plusieurs formations spécialisées, notamment en marketing management,
                inclusion et genre, gestion des conflits et approche Nexus
                (humanitaire-développement-paix). Ce parcours multidimensionnel lui confère une vision
                stratégique, humaniste et profondément ancrée dans les réalités locales.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-serif font-bold text-foreground text-center lg:text-left">
              Quelle est sa contribution dans le leadership féminin transformationnel&nbsp;?
            </h3>

            <div className="grid gap-6">
              <Card className="border-border/80 shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-serif">
                    1. Architecte de modèles innovants d’empowerment féminin
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <p>Patricia Phanzu a conçu et piloté plusieurs programmes structurants favorisant&nbsp;:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>L’éveil du leadership dès l’adolescence</li>
                    <li>Le développement personnel et la confiance en soi</li>
                    <li>La prise de parole publique</li>
                    <li>L’engagement citoyen et communautaire</li>
                    <li>L’autonomie économique durable</li>
                  </ul>
                  <p className="pt-1">Notamment à travers&nbsp;:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>L’Académie de Leadership Féminin (en collaboration avec l’UNFPA)</li>
                    <li>Le projet Yebela Lobi («&nbsp;Pense à demain&nbsp;»)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/80 shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-serif">
                    2. Mentore de la nouvelle génération de leaders féminines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Elle a formé, encadré et inspiré plusieurs milliers de jeunes filles et femmes à
                    Kinshasa et dans 13 provinces de la RDC, en leur transmettant&nbsp;:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Les compétences de leadership</li>
                    <li>L’intelligence émotionnelle</li>
                    <li>La résilience</li>
                    <li>L’esprit entrepreneurial</li>
                    <li>Le courage d’agir</li>
                  </ul>
                  <p>Son approche transforme les bénéficiaires en véritables actrices de changement.</p>
                </CardContent>
              </Card>

              <Card className="border-border/80 shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-serif">
                    3. Voix stratégique du plaidoyer féministe en RDC
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <p className="font-medium text-foreground">Elle est&nbsp;:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Membre du Groupe de Travail Santé Sexuelle et Reproductive de l’UNFPA</li>
                    <li>Membre de la Coalition Beijing RDC</li>
                    <li>Membre de la SOCIFU</li>
                    <li>Membre de la ligue de féministes RDC</li>
                  </ul>
                  <p className="pt-2 font-medium text-foreground">Elle contribue activement&nbsp;:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>À l’influence des politiques publiques sensibles au genre</li>
                    <li>Au plaidoyer national et communautaire pour les droits des femmes</li>
                    <li>À la structuration du mouvement féministe congolais</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/80 shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-serif">
                    4. Leader humanitaire dans les contextes fragiles et post-conflits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Dans l’Est de la RDC, elle a conduit des interventions humanitaires intégrées à fort
                    impact&nbsp;:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Réinsertion scolaire des enfants déplacés</li>
                    <li>Accompagnement psychosocial</li>
                    <li>Promotion de la dignité menstruelle</li>
                    <li>Soutien aux femmes survivantes de violences</li>
                  </ul>
                  <p>Elle incarne un leadership de compassion, de proximité et d’impact réel.</p>
                </CardContent>
              </Card>

              <Card className="border-border/80 shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-serif">
                    5. Bâtisseuse d’institutions durables
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    À travers AMANI KWETU, elle a structuré une organisation active dans 13 provinces,
                    avec&nbsp;:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Des partenariats stratégiques solides</li>
                    <li>Des mécanismes de redevabilité</li>
                    <li>Des projets à fort potentiel de transformation sociale</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-foreground/95 text-lg font-serif leading-relaxed bg-primary/5 rounded-r-lg pr-4">
              Patricia Phanzu est une architecte du changement social et une bâtisseuse de leadership
              féminin transformationnel, qui façonne aujourd’hui les femmes leaders de demain en
              République Démocratique du Congo.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Notre Équipe
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des hommes et des femmes passionnés, engagés au quotidien pour la cause humanitaire en RDC.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Vous souhaitez nous rejoindre ?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
            Que vous soyez un particulier, une entreprise ou un futur bénévole, votre engagement peut faire la différence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="font-bold">
              Faire un don
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-bold">
              Devenir bénévole
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
