import { siteConfig } from "@/lib/site-config";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink py-10">
      <div className="container-xl flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-[family-name:var(--font-display)] text-base font-bold text-onDark">
            {siteConfig.brand}
          </p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-sm text-onDark-muted transition-colors hover:text-gold"
          >
            {siteConfig.contactEmail}
          </a>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-onDark-muted transition-colors hover:text-gold"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-onDark-muted transition-colors hover:text-gold"
          >
            <FacebookIcon size={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-onDark-muted transition-colors hover:text-gold"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>

      <p className="container-xl mt-8 text-center text-xs text-onDark-muted/70 md:text-left">
        © {new Date().getFullYear()} {siteConfig.brand}. Premium rozwiązania NFC dla lokalnego biznesu.
      </p>
    </footer>
  );
}
