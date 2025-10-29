export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 text-sm text-muted-foreground">
          <a 
            href="/terms" 
            className="hover:text-foreground transition-colors"
          >
            Terms & Conditions
          </a>
          <span className="hidden md:inline">•</span>
          <a 
            href="/privacy" 
            className="hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
          <span className="hidden md:inline">•</span>
          <a 
            href="/data-deletion" 
            className="hover:text-foreground transition-colors"
          >
            Data Deletion
          </a>
        </div>
        <div className="text-center mt-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Binder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
