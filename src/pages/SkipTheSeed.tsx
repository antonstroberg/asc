import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowRight } from "lucide-react";

const productShowcase = [
  {
    name: "BoxTag",
    description: "BoxTag transforms physical storage into a smart, searchable system: attach a QR-code to a box, snap a photo of its contents, and let AI automatically generate a searchable catalogue of items. Designed for personal and light-commercial use, it brings order to storage, moves and inventory through intuitive tagging, scanning and indexing.",
    audience: "Homeowners, movers, hobby collectors, and anyone with a storage unit who wants instant clarity instead of chaos.",
    url: "https://boxtag.se",
    image: "/boxtag.webp",
    members: ["Anton Ströberg", "Christer Svensson", "Klas Hansson-Gladh"],
  },
  {
    name: "Buildo",
    description: "Buildo turns residential construction into a guided, organised and stress-free journey. Collect drawings, documents and costs in one place, get a clear timeline, and let AI deliver the right insights at the right moment. From building permits to contractors, schedules and budgets, Buildo helps you keep control while staying calm. ",
    audience: "Perfect for home builders, renovators and small teams who want clarity instead of chaos.",
    url: "https://buildo.se",
    image: "/buildo.webp",
    members: ["Anton Ströberg", "Home Builders"],
  },
  {
    name: "Your Product?",
    description: "Your product deserves more than another prototype or workshop. It deserves to launch. If you bring the insight, we bring the engineering. Together we move from idea to shipped, market-ready product using the same disciplined process we use on our own ventures. Designed, built, instrumented and deployed — without noise or ceremony.",
    audience: "Founders tired of pitch-deck theater.",
    url: null,
    image: "/yourventure.webp",
    members: ["You", "Me", "Our Team"],
  },
];

const SkipTheSeed = () => {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-ambient hero-ambient--rainbow">
          <div className="hero-ambient-overlay hero-ambient-overlay--rainbow" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-4">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-white">Skip The Seed</h1>
          <p className="text-xl text-white/80">
            Build the product first. Raise money later. Or not at all.
          </p>
        </div>
      </section>



      <section className="section-container bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">Why This Exists</h2>
          <p className="text-muted-foreground">
            Early-stage culture became theater. Founders polish decks while nothing ships. Corporates pay
            for workshops instead of outcomes. Teams celebrate funding announcements with no product in
            users’ hands. We reject the waiting. We build first and let the market decide if capital is
            even necessary.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-3">Ideation &amp; Definition</h3>
              <p className="text-muted-foreground">
                We live with the problem until it hurts, then frame a product that solves it with measurable
                outcomes. This is the same drill we run before greenlighting any internal venture.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-3">Architecture &amp; Build</h3>
              <p className="text-muted-foreground">
                No MVP theater. We design the final system, choose the stack, and ship an end-to-end build.
                The identical engineering discipline powers our portfolio products.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-3">Launch &amp; Learn</h3>
              <p className="text-muted-foreground">
                We launch into the real market, instrument everything, and iterate under live conditions.
                Internal projects get the same treatment—shipping to customers, not rehearsing investor demos.
              </p>
            </div>
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-3">Team Assembly &amp; Handoff</h3>
              <p className="text-muted-foreground">
                When the product has momentum, we place or hire the team that will run it. Because we do this
                for our ventures, the transition for partners is clean and calm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">Proof</p>
            <h2 className="text-3xl font-bold">Products Running on This Model</h2>
            <p className="text-muted-foreground mt-3">
              These aren’t case studies; they’re live products we own or co-build. Same crew, same process.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {productShowcase.map((product) => (
              <Card key={product.name} className="overflow-hidden border-border flex flex-col">
                <div className="h-48 bg-muted/50">
                  <img
                    src={product.image}
                    alt={`${product.name} preview`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold">{product.name}</h3>
                    {product.url ? (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        {product.url.replace("https://", "")}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-muted-foreground text-sm">Available to partners</span>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {product.description} <span className="block mt-2 text-foreground">{product.audience}</span>
                  </p>
                  <div className="mt-auto">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Project members</p>
                    <ul className="space-y-1 text-sm text-foreground">
                      {product.members.map((member) => (
                        <li key={`${product.name}-${member}`} className="flex items-center gap-2">
                          <span className="text-accent">•</span>
                          {member}
                        </li>
                      ))}
                    </ul>
                    {!product.url && (
                      <Button asChild size="sm" className="mt-4 w-full">
                        <NavLink to="/contact">
                          Start yours
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </NavLink>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl font-bold">We Do This In-House</h2>
          <p className="text-lg opacity-90">
            This framework powers multiple products we own outright. We spend our own capital, run our own
            squads, and keep every lesson. Partners step into a process that is already tested on us.
          </p>
          <p className="text-lg opacity-90">
            When we say “skip the seed,” it is because we already have. If you want that energy applied to
            your next product, you know where to find us.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SkipTheSeed;
