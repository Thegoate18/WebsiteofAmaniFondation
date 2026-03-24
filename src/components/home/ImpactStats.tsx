import { Users, Activity, TreePine, Store, ShieldAlert } from "lucide-react";

const stats = [
  {
    value: "15,000+",
    label: "Personnes sensibilisées (Santé)",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    value: "5,000+",
    label: "Kits de planification distribués",
    icon: <Activity className="h-8 w-8 text-secondary" />,
  },
  {
    value: "10,000+",
    label: "Arbres plantés",
    icon: <TreePine className="h-8 w-8 text-accent" />,
  },
  {
    value: "500+",
    label: "Micro-entreprises soutenues",
    icon: <Store className="h-8 w-8 text-primary" />,
  },
  {
    value: "1,500+",
    label: "Survivantes de violences accompagnées",
    icon: <ShieldAlert className="h-8 w-8 text-secondary" />,
  }
];

export const ImpactStats = () => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">
            Notre <span className="text-primary italic">Impact</span> en Chiffres
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Depuis notre création en 2020, nous avons touché des milliers de vies à travers la RDC.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-4 rounded-full bg-white shadow-lg mb-2">
                {stat.icon}
              </div>
              <div className="space-y-2">
                <span className="text-4xl font-bold font-serif tracking-tight text-foreground">
                  {stat.value}
                </span>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest leading-tight px-4">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
