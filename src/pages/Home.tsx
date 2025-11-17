import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { ArrowRight, Code2, Brain, Lightbulb, Rocket } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Software Architecture",
      description: "Design scalable, maintainable systems that grow with your business.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Product Development",
      description: "Build intelligent products that leverage modern AI capabilities.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Product Strategy",
      description: "Define clear roadmaps from concept to market-ready products.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "CTO Advisory",
      description: "Strategic technical leadership for growing companies.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-ambient">
          <div className="hero-ambient-overlay" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Better : Cooler : Faster
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Expert consulting in software development, AI integration, and technical leadership for modern tech companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <NavLink to="/contact">
          Start a Conversation
          <ArrowRight className="ml-2 w-4 h-4" />
              </NavLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <NavLink to="/services">Explore Services</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-container bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            20+ years of experience building SaaS products, leading engineering teams, and scaling digital platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-6">
                <div className="text-accent mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <NavLink to="/services">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </NavLink>
          </Button>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technical Leadership for Modern Companies
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm Andreas Ströberg, and I've spent over two decades building software products, 
              leading engineering teams, and helping companies scale from startup to enterprise.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From founding my own ventures to advising at STING Stockholm and building enterprise 
              solutions, I bring a unique blend of startup agility and enterprise-grade expertise.
            </p>
            <Button asChild>
              <NavLink to="/about">
                Read My Story
                <ArrowRight className="ml-2 w-4 h-4" />
              </NavLink>
            </Button>
          </div>
          
          <div className="bg-muted/50 p-8 rounded-lg border border-border">
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">20+</div>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">Multiple</div>
                <p className="text-muted-foreground">Successful Startups</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">Enterprise</div>
                <p className="text-muted-foreground">Scale Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how I can help accelerate your technical vision.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
