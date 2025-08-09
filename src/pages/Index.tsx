import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { useI18n } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useI18n();
  return (
    <main>
      <Seo
        title="Eazy | Find Local Workers Near You"
        description="Eazy connects you to trusted local electricians, plumbers, labourers and more. Book instantly."
      />
      <section className="container min-h-[60vh] flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          {t("heroTitle")}
        </h1>
        <p className="max-w-2xl text-muted-foreground text-base sm:text-lg">
          {t("heroSubtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Button asChild size="lg" className="shadow">
            <Link to="/workers">{t("findWorker")}</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link to="/login?role=worker&tab=register">{t("becomeWorker")}</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
