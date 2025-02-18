import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import { LanguageContext, en, es } from "./lib/i18n";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = language === 'es' ? es : en;

    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </LanguageContext.Provider>
  );
}

export default App;