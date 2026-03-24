import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl space-y-6 animate-slide-up">
          <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm border border-white/20">
            Fondation Amani Kwetu
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl font-serif">
            Amani Kwetu : <br />
            <span className="text-primary italic">Ensemble, nous y arriverons</span>
          </h1>
          <p className="max-w-[600px] text-lg text-white/90 md:text-xl font-sans leading-relaxed">
            Fondée en 2020, la Fondation Amani Kwetu s'engage à améliorer les conditions de vie des populations vulnérables en RDC.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold text-base h-12 px-8">
              Découvrir nos actions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold text-base h-12 px-8">
              À propos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};
