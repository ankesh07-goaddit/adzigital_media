import Link from "next/link";
import { ThemeToggle } from "./ThemeProvider";

export function NavBar() {
  return (
    <>
      <header className="z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0 sm:h-20">
          <div className="flex items-center space-x-2">
            <span className="font-bold sm:inline-block">
              <Link href="/" className="flex items-center text-3xl font-bold ">
                GOADDIT
              </Link>
            </span>
          </div>
          <div className="flex flex-col items-end">
             <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
