import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">ASC</h3>
            <p className="text-sm text-muted-foreground">Stroberg Consulting AB</p>
            <p className="text-sm text-muted-foreground mb-4">Org: 559551-3705</p>
            <p className="text-sm text-muted-foreground">
              Consulting in IT, AI, and product development for modern tech companies.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <NavLink to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </NavLink>
              <NavLink to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </NavLink>
              <NavLink to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </NavLink>
              <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </NavLink>
              <NavLink to="/skip-the-seed" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skip the Seed
              </NavLink>
            </nav>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4">Contact</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Based in Stockholm, Sweden</p>
              <p>Available for remote and on-site consulting</p>
              <a
                href="https://www.linkedin.com/in/andreasstroberg/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                <img src="/linkedin.svg" alt="" className="h-4 w-4" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <NavLink
                to="/contact"
                className="flex items-center gap-2 text-foreground hover:text-accent transition-colors" >
                <img src="/mail-icon.svg" alt="contact anton stroberg" className="h-4 w-4" aria-hidden="true" />
                <span>Email</span>
              </NavLink>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Stroberg Consulting AB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
