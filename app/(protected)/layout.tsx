import SideNav from "./_components/sidenav";

interface ProtectedLyaoutProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLyaoutProps) {
  return (
    <div className="h-full w-full flex bg-purple-200">
      <SideNav />
      {children}
    </div>
  );
}
