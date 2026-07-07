import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

type SocialLinksProps = {
  github: string;
  linkedin: string;
  whatsapp: string;
};

export function SocialLinks({ github, linkedin, whatsapp }: SocialLinksProps) {
  const links = [
    { href: github, label: "GitHub", Icon: FaGithub },
    { href: linkedin, label: "LinkedIn", Icon: FaLinkedin },
    { href: whatsapp, label: "WhatsApp", Icon: FaWhatsapp },
  ];

  return (
    <div className="flex justify-center gap-3">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="clay-social-link flex h-10 w-10 items-center justify-center rounded-xl text-lg text-white/80 transition hover:text-[var(--color-secondary)]"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
