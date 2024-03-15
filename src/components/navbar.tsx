import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ui/ModeToggle";
import { TbBrandTelegram } from "react-icons/tb";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <header className="z-40 backdrop-saturate-[180%] bg-background/90 backdrop-blur-[10px] shadow-sm fixed top-0 left-0 right-0 h-16 px-6 flex items-center justify-between border-b">
      <h1 className="text-2xl font-bold">Dmytro Yurin</h1>
      <nav>
        <div className="sm:flex hidden items-center gap-2 md:gap-4">
          <a
            href="https://t.me/denvudd"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center gap-2"
            )}
            rel="noopener noreferrer"
          >
            <TbBrandTelegram className="h-[1.2rem] w-[1.2rem]" />
            <span className="md:inline hidden">Telegram</span>
          </a>
          <a
            href="mailto:dmitry.yurin2020@gmail"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center gap-2"
            )}
            rel="noopener noreferrer"
          >
            <BiLogoGmail className="h-[1.2rem] w-[1.2rem]" />
            <span className="md:inline hidden">Gmail</span>
          </a>
          <a
            href="https://www.linkedin.com/in/yurindmytro/"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center gap-2"
            )}
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="h-[1.2rem] w-[1.2rem]" />
            <span className="md:inline hidden">LinkedIn</span>
          </a>
          <a
            href="https://github.com/denvudd"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center gap-2"
            )}
            rel="noopener noreferrer"
          >
            <FiGithub className="h-[1.2rem] w-[1.2rem]" />
            <span className="md:inline hidden">Github</span>
          </a>
          <ModeToggle />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="flex sm:hidden">
              <MenuIcon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-2xl">Dmytro Yurin</SheetTitle>
              <SheetDescription>I build things for web</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4">
              <a
                href="https://t.me/denvudd"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex items-center justify-between gap-2 w-full"
                )}
                rel="noopener noreferrer"
              >
                <TbBrandTelegram className="h-[1.2rem] w-[1.2rem]" />
                <span className="">Telegram</span>
              </a>
              <a
                href="mailto:dmitry.yurin2020@gmail"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex items-center justify-between gap-2 w-full"
                )}
                rel="noopener noreferrer"
              >
                <BiLogoGmail className="h-[1.2rem] w-[1.2rem]" />
                <span className="">Gmail</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yurindmytro/"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex items-center justify-between gap-2 w-full"
                )}
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="h-[1.2rem] w-[1.2rem]" />
                <span className="">LinkedIn</span>
              </a>
              <a
                href=""
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex items-center justify-between gap-2 w-full"
                )}
                rel="noopener noreferrer"
              >
                <FiGithub className="h-[1.2rem] w-[1.2rem]" />
                <span className="https://github.com/denvudd">Github</span>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
