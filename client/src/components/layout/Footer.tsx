import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-primary">CodeFalcon</h3>
            <p className="text-sm text-muted-foreground">
              Donde la creatividad vuela alto, el código se perfecciona y la innovación cobra vida.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Creatividad en vuelo, precisión en cada línea.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} CodeFalcon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
