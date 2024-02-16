import Link from "next/link";
import { BiDumbbell } from "react-icons/bi";

export default function SideNav() {
  return (
    <aside className="h-full w-[250px] bg-gray-900">
      <Link className="" href="/">
        <div className="flex justify-center gap-3 py-8 mb-11 mx-auto">
          <BiDumbbell className="text-violet-400 w-6 h-6" />
          <p className="  text-white">Logo</p>
        </div>
      </Link>
    </aside>
  );
}
