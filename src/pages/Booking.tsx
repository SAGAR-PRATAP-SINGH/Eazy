import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
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

const slots = ["09:00", "10:00", "11:00", "13:00", "15:00", "17:00"];

const Booking = () => {
  const { t } = useI18n();
  const nav = useNavigate();
  const { state } = useLocation();
  const worker = (state as any)?.worker as Worker | undefined;

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string>(slots[0]);
  const [location, setLocation] = useState<string>("");

  const title = useMemo(() => `${t("book")} ${worker ? `- ${worker.name}` : ""}`, [worker, t]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!worker) return;
    nav("/summary", { state: { worker, booking: { date: date?.toISOString(), time, location } } });
  };

  return (
    <main className="container py-8">
      <Seo title={`Eazy | ${t("book")}`} description="Choose date, time and location to book a worker." />
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      {!worker ? (
        <Card>
          <CardHeader>
            <CardTitle>No worker selected</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => nav("/workers")}>Go to Workers</Button>
          </CardContent>
        </Card>
      ) : (
        <form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{worker.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{worker.category} • {worker.location}</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">{t("date")}</label>
                  <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                </div>
                <div>
                  <label className="block text-sm mb-1">{t("time")}</label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {slots.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm mb-1">{t("location")}</label>
                  <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter address or landmark" />
                </div>
                <Button type="submit" className="w-full">{t("confirmBooking")}</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t("orderSummary")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li><strong>Worker:</strong> {worker.name}</li>
                <li><strong>{t("date")}:</strong> {date?.toDateString()}</li>
                <li><strong>{t("time")}:</strong> {time}</li>
                <li><strong>{t("location")}:</strong> {location || "—"}</li>
              </ul>
            </CardContent>
          </Card>
        </form>
      )}
    </main>
  );
};

export default Booking;
