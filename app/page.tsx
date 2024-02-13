import { Button } from "@/components/ui/button";
import { rowdies } from "@/components/ui/fonts";
import { cn } from "@/lib/utils";
import { LoginButton } from "../components/auth/login-button";

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center bg-gradient-to-b from-purple-400 via-fuchsia-100 to-yellow-200">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-4xl sm:text-5xl lg:text-6xl font-semibold drop-shadow-md text-gray-700",
            rowdies.className
          )}
        >
          My home workout planner
        </h1>
        <div>
          <LoginButton>
            <Button variant="singIn" size="lg">
              Sing in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
