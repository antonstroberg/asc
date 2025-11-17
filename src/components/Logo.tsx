import logoPrimary from "@/assets/logo-primary.png";

interface LogoProps {
  className?: string;
  variant?: "primary" | "text";
}

const Logo = ({ className = "", variant = "text" }: LogoProps) => {
  if (variant === "primary") {
    return (
      <img 
        src={logoPrimary} 
        alt="ASC Logo" 
        className={`h-10 w-auto ${className}`}
      />
    );
  }

  return (
    <span className={`font-mono text-xl font-bold tracking-tight ${className}`}>
      <span className="text-muted-foreground">{"{"}</span>
      ASC
      <span className="text-muted-foreground">{"}"}</span>
    </span>
  );
};

export default Logo;
