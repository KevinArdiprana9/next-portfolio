import { MapPin } from "lucide-react";
import { siteInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-2 px-6 text-xs text-muted-foreground sm:flex-row">
        <span className="flex items-center gap-1">
          <MapPin size={12} /> {siteInfo.location}
        </span>
        <span>
          © {new Date().getFullYear()} {siteInfo.name}
        </span>
      </div>
    </footer>
  );
}
