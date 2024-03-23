import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/loginButtons";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-fuchsia-500 to-cyan-500">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-lg}",
            font.className
          )}
        >
          🔏 MegaSoft
        </h1>
        <p className="text-center text-2xl text-white">Authentication Service</p>
        <div>
          <LoginButton asChild>
            <Button variant="secondary">Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
