"use client";

import { LuDumbbell, LuLayoutDashboard } from "react-icons/lu";
import { LiaUserCircle } from "react-icons/lia";
import { NavLinksItem } from "./nav-links-item";

const links = [
  { name: "My workouts", href: "/myWorkouts", icon: LuDumbbell },
  {
    name: "Dashbord",
    href: "/dashboard",
    icon: LuLayoutDashboard,
  },
  { name: "Profile", href: "/profile", icon: LiaUserCircle },
];

export function NavLinks() {
  return (
    <ul>
      {links.map(({ name, href, icon }) => (
        <NavLinksItem key={name} name={name} href={href} icon={icon} />
      ))}
    </ul>
  );
}
