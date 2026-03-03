import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="px-6 py-10 border-t border-border text-center">
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        Made with <Heart size={14} className="text-primary" /> by Shubham Rahangdale
      </p>
    </footer>
  );
};

export default FooterSection;
