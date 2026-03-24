import { Button } from "@/components/ui/button";

export const MissionHistory = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8 animate-slide-up">
            <div className="space-y-4">
              <span className="text-primary font-semibold uppercase tracking-widest text-sm italic">
                Notre Héritage
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground leading-tight">
                Histoire et <span className="text-primary italic">Mission</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground font-sans leading-relaxed">
              <p>
                Fondée en 2020 à Kinshasa, son nom signifie <span className="text-primary font-bold italic">"la paix chez nous"</span> en swahili. 
                Amani Kwetu est née d'une vision profonde : celle de voir une République Démocratique du Congo où chaque citoyen, 
                quelle que soit sa condition sociale, a accès aux droits fondamentaux et aux opportunités de développement.
              </p>
              <p>
                Depuis sa création, la fondation s'est investie sans relâche pour améliorer les conditions de vie des populations vulnérables. 
                Nous croyons fermement que le changement commence par l'autonomisation, l'éducation et la solidarité communautaire.
              </p>
              <p>
                Notre mission est claire : accompagner les populations dans leur quête de dignité, de santé et de prospérité, tout en préservant 
                notre environnement et en bâtissant une paix durable entre les communautés.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold h-12 px-8">
                En savoir plus sur nous
              </Button>
              <Button size="lg" variant="ghost" className="text-primary hover:bg-primary/10 font-semibold h-12 px-8">
                Nous contacter
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-primary/10 -rotate-3 rounded-2xl transform scale-105 z-0" />
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop" 
                alt="Communauté en RDC" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-xl shadow-lg max-w-[240px] hidden md:block">
                <p className="text-sm font-medium text-foreground">
                  "Chaque action compte pour bâtir un avenir meilleur en RDC."
                </p>
                <p className="text-xs text-primary mt-2 italic">
                  — Direction Amani Kwetu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
