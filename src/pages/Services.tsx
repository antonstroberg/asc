import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { 
  Code2, 
  Brain, 
  Lightbulb, 
  Rocket, 
  Users, 
  LineChart,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "Software Development & Architecture",
      description: "Design and build scalable, maintainable systems using modern technologies and best practices.",
      details: [
        "Full-stack development (React, Node.js, Python)",
        "Microservices architecture",
        "Cloud infrastructure (AWS, Azure, GCP)",
        "API design and integration",
        "Technical debt reduction",
      ]
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI Product Development",
      description: "Transform your business with intelligent products that leverage the latest AI capabilities.",
      details: [
        "AI strategy and roadmap",
        "LLM integration and fine-tuning",
        "Machine learning model development",
        "Intelligent automation",
        "AI product validation",
      ]
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "CTO-for-Hire",
      description: "Strategic technical leadership without the full-time commitment.",
      details: [
        "Technology strategy and planning",
        "Team building and mentoring",
        "Architecture reviews",
        "Vendor and technology selection",
        "Engineering process optimization",
      ]
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Product Strategy",
      description: "Define clear product roadmaps from concept to market-ready solutions.",
      details: [
        "Product discovery and validation",
        "MVP definition and scoping",
        "User research and testing",
        "Go-to-market planning",
        "Product-market fit optimization",
      ]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Team & Process Development",
      description: "Build high-performing engineering teams and efficient development processes.",
      details: [
        "Agile/Scrum implementation",
        "DevOps and CI/CD setup",
        "Technical hiring and onboarding",
        "Engineering culture development",
        "Performance metrics and KPIs",
      ]
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: "Business Development",
      description: "Strategic guidance for scaling your technology business.",
      details: [
        "Digital transformation strategy",
        "Technology investment evaluation",
        "Partnership and integration strategy",
        "Technical due diligence",
        "Scalability planning",
      ]
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Technology Consulting
          </h1>
          <p className="text-xl text-muted-foreground">
            From strategic planning to hands-on development, I provide end-to-end consulting 
            services to help your company build better products faster.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container bg-muted/30">
        <div className="grid gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-accent mt-1">{service.icon}</div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Approach</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Listen & Understand</h3>
              <p className="text-muted-foreground">
                Deep dive into your business goals, challenges, and technical landscape.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Plan & Design</h3>
              <p className="text-muted-foreground">
                Create clear, actionable strategies with defined milestones and outcomes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Execute & Deliver</h3>
              <p className="text-muted-foreground">
                Hands-on implementation with continuous communication and iteration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a consultation to explore how I can help accelerate your technical vision.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 w-4 h-4" />
            </NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
