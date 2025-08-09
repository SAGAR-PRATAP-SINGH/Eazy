import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/contexts/LanguageContext";
import Seo from "@/components/Seo";

const OrderSummary = () => {
  const { t } = useI18n();
  const { toast } = useToast();
  const { state } = useLocation() as any;
  const nav = useNavigate();

  const worker = state?.worker as { name: string } | undefined;
  const booking = state?.booking as { date?: string; time?: string; location?: string } | undefined;

  const confirm = () => {
    toast({ title: "Booked!", description: "Your booking has been confirmed." });
    nav("/");
  };

  return (
    <main className="container py-8">
      <Seo title={`Eazy | ${t("orderSummary")}`} description="Review your booking details before confirming." />
      <h1 className="text-2xl font-semibold mb-4">{t("orderSummary")}</h1>
      {!worker ? (
        <Card>
          <CardHeader>
            <CardTitle>No booking found</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => nav("/workers")}>Go to Workers</Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="pt-6 space-y-2 text-sm">
            <p><strong>Worker:</strong> {worker.name}</p>
            <p><strong>{t("date")}:</strong> {booking?.date ? new Date(booking.date).toDateString() : "—"}</p>
            <p><strong>{t("time")}:</strong> {booking?.time || "—"}</p>
            <p><strong>{t("location")}:</strong> {booking?.location || "—"}</p>
            <Button onClick={confirm} className="mt-4">{t("confirmBooking")}</Button>
          </CardContent>
        </Card>
      )}
    </main>
  );
};

export default OrderSummary;
