import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlugZap, Droplets, Hammer, Wrench, Paintbrush, Fan } from "lucide-react";
import Seo from "@/components/Seo";
import { useI18n } from "@/contexts/LanguageContext";

const baseCategories = [
  { key: "Electrician", icon: PlugZap, desc: "Wiring, repair, installations" },
  { key: "Plumber", icon: Droplets, desc: "Leaks, fittings, bathrooms" },
  { key: "Labourer", icon: Hammer, desc: "Loading, unloading, shifting" },
  { key: "Mechanic", icon: Wrench, desc: "Repairs and maintenance" },
  { key: "Painter", icon: Paintbrush, desc: "Walls, ceilings, touch-ups" },
  { key: "AC Technician", icon: Fan, desc: "AC service and repair" },
];

const Categories = () => {
  const { t } = useI18n();
  const [q, setQ] = useState("");

  const categories = useMemo(
    () => baseCategories.filter((c) => c.key.toLowerCase().includes(q.toLowerCase())),
    [q]
  );

  return (
    <main className="container py-8">
      <Seo title="Eazy | Service Categories" description="Browse service categories like electrician, plumber, labourer and more." />
      <h1 className="text-2xl font-semibold mb-4">{t("categories")}</h1>
      <div className="mb-4">
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`${t("search")}...`}
          className="max-w-sm"
        />
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(({ key, icon: Icon, desc }) => (
          <Card key={key} className="hover-scale">
            <CardHeader className="flex flex-row items-center gap-3">
              <Icon className="h-5 w-5" />
              <CardTitle className="text-base">{key}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{desc}</p>
              <Button asChild variant="secondary">
                <Link to={`/workers?category=${encodeURIComponent(key)}`}>{t("viewWorkers")}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default Categories;
