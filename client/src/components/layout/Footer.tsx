import { Link } from "wouter";
import { Instagram } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const Footer = () => {
  const { t } = useLanguage();

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
            <h3 className="font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t('projects')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t('about')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {t('contact')}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">{t('socialMedia')}</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/codefalcon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} CodeFalcon. {t('ourCommitment')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;