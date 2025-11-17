import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Unable to send message right now.");
      }

      toast.success("Message sent! I'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-xl text-muted-foreground">
            Whether you're exploring ideas or ready to start a project, I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-container bg-muted/30">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@company.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company (optional)"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or challenge..."
                    rows={6}
                    className="mt-2"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-accent mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Based in Stockholm, Sweden<br />
                      Available for remote and on-site consulting
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-accent mt-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-accent mt-1">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Availability</h3>
                    <p className="text-muted-foreground">
                      Currently accepting new projects<br />
                      Short and long-term engagements available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-accent/50 bg-accent/5">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Initial response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Free 30-minute discovery call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Clear scope and pricing proposal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Flexible engagement models</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Common Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">What types of projects do you take on?</h3>
              <p className="text-muted-foreground">
                I work on both strategic consulting (CTO advisory, architecture reviews) and 
                hands-on development (building MVPs, implementing features). Projects range from 
                a few weeks to ongoing retainer relationships.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do you charge for your services?</h3>
              <p className="text-muted-foreground">
                Depending on the project, I offer hourly rates, fixed-price projects, or 
                monthly retainers. We'll discuss the best model during our initial conversation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you work with startups?</h3>
              <p className="text-muted-foreground">
                Absolutely! I have extensive experience with early-stage startups and understand 
                the unique challenges of building products with limited resources. I can adjust 
                my approach and pricing to fit startup needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can you work remotely?</h3>
              <p className="text-muted-foreground">
                Yes, I work with clients globally through remote collaboration. For clients in 
                the Stockholm area, I'm also available for on-site work when needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
