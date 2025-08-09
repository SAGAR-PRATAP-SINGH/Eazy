import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SeoProps {
  title: string;
  description?: string;
}

const Seo = ({ title, description }: SeoProps) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      return el as HTMLMetaElement;
    };

    if (description) {
      const desc = ensureMeta("description");
      desc.setAttribute("content", description);
    }

    // canonical tag
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    const origin = window.location.origin;
    link.setAttribute("href", `${origin}${location.pathname}`);
  }, [title, description, location.pathname]);

  return null;
};

export default Seo;
