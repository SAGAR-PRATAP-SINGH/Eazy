import { Link } from "react-router-dom";
import { useI18n } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="border-t mt-10">
      <div className="container py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground">© {new Date().getFullYear()} {t("appName")}</p>
        <div className="flex items-center gap-4">
          <Link to="#" className="hover:underline">{t("about")}</Link>
          <Link to="#" className="hover:underline">{t("contact")}</Link>
          <Link to="#" className="hover:underline">{t("terms")}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
