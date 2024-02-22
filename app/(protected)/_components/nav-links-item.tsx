import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface NavLinksItemProps {
  name: string;
  href: string;
  icon: IconType;
}

export function NavLinksItem({ name, href, icon }: NavLinksItemProps) {
  const pathname = usePathname();
  const LinkIcon = icon;
  const currentLink = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "h-[56px] bg-gray-900 text-lg flex items-center gap-5 pl-12 pr-1 py-1 grow",
          {
            "bg-gray-800  after:h-full after:ml-auto after:border-2 after:border-violet-400 after:rounded-sm":
              currentLink,
          }
        )}
      >
        <LinkIcon
          className={cn("text-navLinkColor w-7 h-7", {
            "text-violet-400 ": currentLink,
          })}
        />
        <p
          className={cn(
            "text-navLinkColor hidden md:block",
            currentLink && "text-white"
          )}
        >
          {name}
        </p>
      </Link>
    </li>
  );
}
