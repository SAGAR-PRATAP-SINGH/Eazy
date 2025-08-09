import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";
import Seo from "@/components/Seo";
import { useI18n } from "@/contexts/LanguageContext";

interface Worker {
  id: string;
  name: string;
  rating: number;
  skills: string[];
  category: string;
  location: string;
}

const ALL_WORKERS: Worker[] = [
  { id: "w1", name: "Ravi Kumar", rating: 4.8, skills: ["Wiring", "Fan"], category: "Electrician", location: "Delhi" },
  { id: "w2", name: "Aman Verma", rating: 4.6, skills: ["Pipes", "Faucet"], category: "Plumber", location: "Noida" },
  { id: "w3", name: "Sunil", rating: 4.5, skills: ["Loading", "Shifting"], category: "Labourer", location: "Gurugram" },
  { id: "w4", name: "Arjun", rating: 4.7, skills: ["AC Service", "Cooling"], category: "AC Technician", location: "Delhi" },
];

const Workers = () => {
  const { t } = useI18n();
  const [params] = useSearchParams();
  const category = params.get("category") || "";
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return ALL_WORKERS.filter((w) =>
      (category ? w.category === category : true) &&
      ([w.name, w.location, w.category, ...w.skills].join(" ").toLowerCase().includes(q.toLowerCase()))
    );
  }, [q, category]);

  return (
    <main className="container py-8">
      <Seo title="Eazy | Workers" description="Find nearby workers with ratings and skills, and book instantly." />
      <h1 className="text-2xl font-semibold mb-4">{t("workers")}{category ? ` — ${category}` : ""}</h1>
      <div className="mb-4">
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={`${t("search")}...`} className="max-w-sm" />
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((w) => (
          <Card key={w.id} className="hover-scale">
            <CardHeader>
              <CardTitle className="text-base flex items-center justify-between">
                <span>{w.name}</span>
                <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 text-yellow-500" />
                  {w.rating.toFixed(1)}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{w.category} • {w.location}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {w.skills.map((s) => (
                  <Badge key={s} variant="secondary">{s}</Badge>
                ))}
              </div>
              <Button asChild>
                <Link to="/booking" state={{ worker: w }}>{t("bookNow")}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default Workers;
