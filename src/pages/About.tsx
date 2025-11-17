import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowRight, Award, Building2, GraduationCap } from "lucide-react";

const About = () => {
  const experience = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Founder & Product Leader",
      description: "Founded and scaled multiple successful SaaS products from concept to market-ready solutions.",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Startup Mentor at STING",
      description: "Advising early-stage startups at Stockholm Innovation & Growth on technical strategy and product development.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Enterprise Software",
      description: "Led engineering teams building large-scale enterprise solutions serving millions of users.",
    },
  ];

  const expertise = [
    "Full-stack Development",
    "Software Architecture",
    "AI & Machine Learning",
    "Product Management",
    "Team Leadership",
    "Business Development",
    "Cloud Infrastructure",
    "Startup Scaling",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hi, I'm Anton Ströberg
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            With over 20 years in software development, product leadership, and business development, 
            I help companies transform technical challenges into competitive advantages.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-container bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">My Journey</h2>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              My career in technology spans from the early days of web development to today's 
              AI-driven product landscape. I've worn many hats: founder, CTO, product leader, 
              and technical advisor.
            </p>
            
            <p>
              I founded my first tech startup in the early 2000s, learning firsthand the challenges 
              of building products that users love while maintaining technical excellence. Since then, 
              I've started and scaled multiple SaaS products, gaining deep insights into what it takes to
              succeed in competitive markets.
            </p>
            
            <p>
              As a mentor at STING Stockholm, one of Europe's leading startup incubators, I work with 
              ambitious founders to refine their technical strategies and build products that scale. 
              I've also led engineering teams at enterprise companies, managing the complexity of serving 
              millions of users while maintaining velocity.
            </p>
            
            <p>
              Today, through Stroberg Consulting AB, I bring this breadth of experience to help 
              companies tackle their toughest technical challenges. Whether you're a startup finding 
              product-market fit or an established company undergoing digital transformation, I provide 
              the strategic and hands-on expertise you need.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="section-container">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience Highlights</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {experience.map((item, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="text-accent mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="section-container bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Expertise</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertise.map((skill, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-4 text-center hover:border-accent/50 transition-colors"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How I Work</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Pragmatic Excellence</h3>
              <p className="text-muted-foreground">
                I believe in building what's needed, not what's possible. Every technical decision 
                should serve business goals and user needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Clear Communication</h3>
              <p className="text-muted-foreground">
                Technology is complex enough. I translate technical concepts into clear business 
                language and ensure all stakeholders are aligned.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Long-term Thinking</h3>
              <p className="text-muted-foreground">
                Quick fixes create technical debt. I focus on sustainable solutions that scale 
                with your business.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Hands-on Leadership</h3>
              <p className="text-muted-foreground">
                I'm not just a strategist—I roll up my sleeves and work alongside your team to 
                deliver results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to discuss how I can help your company build better products?
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

export default About;
