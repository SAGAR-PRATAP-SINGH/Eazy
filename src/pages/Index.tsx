import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { useI18n } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-services.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShieldCheck,
  Zap,
  Wallet,
  Clock,
  Search,
  CalendarClock,
  CheckCircle2,
} from "lucide-react";

const Index = () => {
  const { t } = useI18n();
  return (
    <main>
      <Seo
        title="Eazy | Find Local Workers Near You"
        description="Eazy connects you to trusted local electricians, plumbers, labourers and more. Book instantly."
      />

      {/* Hero Section */}
      <section className="container min-h-[70vh] grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-10">
        <div className="flex flex-col gap-6 text-center md:text-left animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{t("heroTitle")}</h1>
          <p className="text-lg text-muted-foreground">{t("tagline")}</p>
          <p className="max-w-2xl text-muted-foreground text-base sm:text-lg mx-auto md:mx-0">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 justify-center md:justify-start">
            <Button asChild size="lg" className="shadow hover-scale">
              <Link to="/workers">{t("findWorker")}</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="hover-scale">
              <Link to="/login?role=worker&tab=register">{t("becomeWorker")}</Link>
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-xl mx-auto md:mx-0 animate-scale-in">
          <img
            src={heroImage}
            alt="Eazy home services illustration: electrician, plumber, cleaner, handyman"
            className="rounded-xl shadow-xl w-full h-auto"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute -bottom-4 -right-4 bg-background/70 backdrop-blur rounded-md px-3 py-2 border shadow hover-scale hidden sm:flex items-center gap-2">
            <Clock className="text-primary" />
            <span className="text-sm text-muted-foreground">{t("benefitInstantTitle")}</span>
          </div>
        </div>
      </section>

      {/* Why Choose Eazy */}
      <section className="container py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">{t("whyChoose")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="hover-scale">
            <CardContent className="p-6 flex items-start gap-4">
              <Zap className="text-primary" />
              <div>
                <h3 className="font-medium">{t("benefitConvenienceTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("benefitConvenienceText")}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 flex items-start gap-4">
              <ShieldCheck className="text-primary" />
              <div>
                <h3 className="font-medium">{t("benefitVerifiedTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("benefitVerifiedText")}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 flex items-start gap-4">
              <Wallet className="text-primary" />
              <div>
                <h3 className="font-medium">{t("benefitTransparentTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("benefitTransparentText")}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 flex items-start gap-4">
              <Clock className="text-primary" />
              <div>
                <h3 className="font-medium">{t("benefitInstantTitle")}</h3>
                <p className="text-sm text-muted-foreground">{t("benefitInstantText")}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">{t("howItWorks")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover-scale">
            <CardContent className="p-6 text-center flex flex-col items-center gap-3">
              <div className="size-12 rounded-full border flex items-center justify-center">
                <Search />
              </div>
              <h3 className="font-medium">1. {t("step1Title")}</h3>
              <p className="text-sm text-muted-foreground">{t("step1Text")}</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 text-center flex flex-col items-center gap-3">
              <div className="size-12 rounded-full border flex items-center justify-center">
                <CalendarClock />
              </div>
              <h3 className="font-medium">2. {t("step2Title")}</h3>
              <p className="text-sm text-muted-foreground">{t("step2Text")}</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 text-center flex flex-col items-center gap-3">
              <div className="size-12 rounded-full border flex items-center justify-center">
                <CheckCircle2 />
              </div>
              <h3 className="font-medium">3. {t("step3Title")}</h3>
              <p className="text-sm text-muted-foreground">{t("step3Text")}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Index;
