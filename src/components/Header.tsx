import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSkipPage = location.pathname === "/skip-the-seed";
  const canBeTransparent = ["/", "/skip-the-seed"].includes(location.pathname);
  const showTransparentHeader = canBeTransparent && !isScrolled;
  const useLightNav = isSkipPage && showTransparentHeader;
  const navLinkBaseClass = useLightNav
    ? "text-sm text-white/80 hover:text-white transition-colors"
    : "text-sm text-muted-foreground hover:text-foreground transition-colors";
  const navLinkActiveClass = useLightNav
    ? "text-white font-medium"
    : "text-foreground font-medium";
  const mobileLinkBaseClass = useLightNav
    ? "text-base text-white/80 hover:text-white transition-colors py-2"
    : "text-base text-muted-foreground hover:text-foreground transition-colors py-2";

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Skip the Seed", path: "/skip-the-seed" },
  ];

  const scrolledClass = isSkipPage
    ? "bg-white/60 backdrop-blur-md shadow-sm"
    : "bg-background/80 backdrop-blur-md shadow-sm";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparentHeader ? "bg-transparent" : scrolledClass
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-between h-20">
        <NavLink
          to="/"
          className={`flex items-center justify-center gap-3 ${
            useLightNav ? "text-white" : "text-foreground"
          }`}
        >
          <img
            src={useLightNav ? "/logo_svg_white.svg" : "/logo_svg.svg"}
            alt="Anton Ströberg Consulting"
            className="h-12 w-12"
          />
          <span className="text-base font-small hidden sm:inline">Anton Stroberg Consulting</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <NavLink
          key={item.path}
          to={item.path}
          className={navLinkBaseClass}
          activeClassName={navLinkActiveClass}
          >
          {item.label}
          </NavLink>
        ))}
        <Button
          asChild
          size="sm"
          className={`ml-4 ${useLightNav ? "bg-white/20 text-white hover:bg-white/30" : ""}`}
        >
          <NavLink to="/contact">Work with ASC</NavLink>
        </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`md:hidden p-2 ${
          useLightNav ? "text-white" : "text-foreground"
        }`}
        aria-label="Toggle menu"
        >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav
          className={`md:hidden py-6 border-t border-border ${
            useLightNav ? "bg-black/50" : ""
          }`}
        >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={mobileLinkBaseClass}
            activeClassName={navLinkActiveClass}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </NavLink>
          ))}
          <Button asChild className="mt-2">
          <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Work with ASC
          </NavLink>
          </Button>
        </div>
        </nav>
      )}
      </div>
    </header>
  );
};

export default Header;
