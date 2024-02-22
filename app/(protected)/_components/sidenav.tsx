import Link from "next/link";
import { signOut } from "@/auth";
import { BiDumbbell } from "react-icons/bi";
import { rowdies } from "@/components/ui/fonts";
import { cn } from "@/lib/utils";
import { NavLinks } from "./nav-links";
import { PiSignOutBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";

export function SideNav() {
  return (
    <aside className="h-full w-[320px] flex flex-col bg-gray-900 rounded-tr-xl rounded-br-xl">
      {/* Logo */}
      <Link className="" href="/">
        <div className="flex pl-12 items-center gap-3 py-12 mx-auto">
          <BiDumbbell className="text-violet-400 w-8 h-8" />
          <p className={cn("text-xl text-white", rowdies.className)}>MHWP</p>
        </div>
      </Link>

      {/* Nav links */}
      <NavLinks />

      {/* Sign out button */}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
        className="mt-auto mb-5 ml-12"
      >
        <Button variant="signOut" size="xl">
          Sign out
          <PiSignOutBold className="text-navLinkColor w-5 h-5 hover:text-violet-400" />
        </Button>
      </form>
    </aside>
  );
}
