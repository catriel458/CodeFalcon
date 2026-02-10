import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const About = () => {
  const { t } = useLanguage();

  const certificates = [
    { icon: "📈", name: t('certificatesList.analistaData'), url: "https://openbadgefactory.com/obv3/credentials/36e66ddceca33dd75a75eb133ad14b2711efba43" },
    { icon: "🎓", name: t('certificatesList.nodeFullStack'), url: "https://drive.google.com/file/d/1z2i6wPmxXDGDePEk7ClYo-Nifqlzep60/view?usp=sharing" },
    { icon: "📊", name: t('certificatesList.bigData'), url: "https://drive.google.com/file/d/1PVzSSwXd3bChAHwOGAweV-Htbr0WXfId/view" },
    { icon: "💻", name: t('certificatesList.sicosFullStack'), url: "https://drive.google.com/file/d/15GiWdHC1JSah5iDHj46rbe3mEAyL67ys/view?usp=sharing" },
    { icon: "🔒", name: t('certificatesList.ethicalHacking'), url: "https://drive.google.com/file/d/1U9xyafQgsptOH1BJVoianYPUU0I2Oh7N/view" },
    { icon: "🌐", name: t('certificatesList.webFullStack'), url: "https://drive.google.com/file/d/1q_rP5wA57Kp5LIBqHAz4Ke6yyHNqL7z3/view" },
    { icon: "🚀", name: t('certificatesList.argPrograma'), url: "https://drive.google.com/file/d/1oJKtGtEQ6FucG7E5_2TiTmvTDI_0vsrV/view" },
    { icon: "⚛️", name: t('certificatesList.reactTalentoTech'), url: "https://drive.google.com/file/d/1fh8EyGNCtRp9WIekskRkBmuqBIEKxQu2/view?usp=sharing" },
    { icon: "🤖", name: t('certificatesList.fundamentosIA'), url: "https://drive.google.com/file/d/1xY3LEf2qHT7vQ4tNw6XF-p4Ym-fQL8hB/view?usp=sharing" }
    
  ];

  return (
    <div className="container mx-auto px-4 w-full max-w-7xl py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-12">{t('aboutTitle')}</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t('vision')}</h2>
              <p className="text-muted-foreground">
                {t('visionText')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t('mission')}</h2>
              <p className="text-muted-foreground">
                {t('missionText')}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <Card className="overflow-hidden">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-48 h-48 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 animate-pulse blur-xl opacity-50" />
                  <img
                    src="https://i.ibb.co/zHXtsggH/61b91680-355e-4c19-8851-271d43c8a54a.jpg"
                    alt="Catriel - CodeFalcon Developer"
                    className="relative w-full h-full rounded-full object-cover border-4 border-primary/20"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">{t('developerTitle')}</h2>
                  <p className="text-muted-foreground mb-4">
                    {t('developerDescription')}
                  </p>
                  <a
                    href="https://github.com/catriel458?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" className="gap-2">
                      <Github className="w-4 h-4" />
                      {t('githubProfile')}
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">{t('certifications')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="transition-colors hover:border-primary/50">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-2xl">{cert.icon}</span>
                      <p className="text-muted-foreground">{cert.name}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
