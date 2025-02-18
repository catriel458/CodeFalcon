import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      className="text-muted-foreground hover:text-primary"
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
    >
      {language.toUpperCase()}
    </Button>
  );
}
