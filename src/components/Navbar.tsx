import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LanguageDropdown from "./LanguageDropdown";
import ThemeToggle from "./ThemeToggle";
import { useI18n } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { t } = useI18n();
  const navCls = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm ${isActive ? "bg-muted text-primary" : "hover:bg-muted/60"}`;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-lg">
            {t("appName")}
          </Link>
          <div className="hidden sm:flex items-center gap-1">
            <NavLink to="/workers" className={navCls} end>
              {t("findWorker")}
            </NavLink>
            <NavLink to="/categories" className={navCls} end>
              {t("categories")}
            </NavLink>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <LanguageDropdown />
          <ThemeToggle />
          <Button asChild variant="default" size="sm">
            <Link to="/login">{t("login")}</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
