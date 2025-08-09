import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import Seo from "@/components/Seo";

const Login = () => {
  const { t } = useI18n();
  const { toast } = useToast();
  const [params] = useSearchParams();
  const initialTab = params.get("tab") === "register" ? "register" : "login";
  const initialRole = params.get("role") === "worker" ? "worker" : "user";

  const [tab, setTab] = useState<string>(initialTab);
  const [role, setRole] = useState<string>(initialRole);

  useEffect(() => {
    const pTab = params.get("tab");
    const pRole = params.get("role");
    if (pTab) setTab(pTab);
    if (pRole) setRole(pRole);
  }, [params]);

  const title = useMemo(() => (tab === "login" ? t("login") : t("register")), [tab, t]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: `${title} (${role})`, description: "UI only — no backend wired yet." });
  };

  return (
    <main className="container max-w-md py-8">
      <Seo title={`Eazy | ${title}`} description="Login or register as user or worker on Eazy." />
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">{t("roleUser")}/{t("roleWorker")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">{t("login")}</TabsTrigger>
              <TabsTrigger value="register">{t("register")}</TabsTrigger>
            </TabsList>
            <div className="my-4">
              <RadioGroup value={role} onValueChange={setRole} className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="user" id="role-user" />
                  <Label htmlFor="role-user">{t("roleUser")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="worker" id="role-worker" />
                  <Label htmlFor="role-worker">{t("roleWorker")}</Label>
                </div>
              </RadioGroup>
            </div>
            <TabsContent value="login">
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email">{t("email")}</Label>
                  <Input id="email" type="email" required placeholder="name@example.com" />
                </div>
                <div>
                  <Label htmlFor="password">{t("password")}</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">{t("login")}</Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">{t("name")}</Label>
                  <Input id="name" required />
                </div>
                <div>
                  <Label htmlFor="phone">{t("phone")}</Label>
                  <Input id="phone" required />
                </div>
                <div>
                  <Label htmlFor="email2">{t("email")}</Label>
                  <Input id="email2" type="email" required placeholder="name@example.com" />
                </div>
                <div>
                  <Label htmlFor="password2">{t("password")}</Label>
                  <Input id="password2" type="password" required />
                </div>
                <Button type="submit" className="w-full">{t("register")}</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </main>
  );
};

export default Login;
