"use client";

import { Home } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 border-b bg-background px-[1.2rem] md:px-[3rem]">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6" />
            <span className="text-xl font-bold">StudentLodge</span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <Button
            size="sm"
            onClick={() => router.push("/houses")}
            className="hover:scale-110 duration-200 cursor-pointer"
          >
            Properties
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
