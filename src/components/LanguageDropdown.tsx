import { useI18n, Language } from "@/contexts/LanguageContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const LanguageDropdown = () => {
  const { lang, setLang, t } = useI18n();
  return (
    <div className="flex items-center gap-2">
      <Select value={lang} onValueChange={(v) => setLang(v as Language)}>
        <SelectTrigger className="w-28">
          <SelectValue placeholder={t("language")} />
        </SelectTrigger>
        <SelectContent className="z-50">
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="hi">हिन्दी</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageDropdown;
