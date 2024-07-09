import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Briefcase,
  HomeIcon,
  MessagesSquare,
  SearchIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

 function Header() {
  return (
    <div className="flex items-center p-2 max-w-6xl mx-auto">
      {/* Logo */}
      <Image
        className="rounded-lg"
        src="/logo.png"
        width={40}
        height={40}
        alt="logo"
      />
      <h1><div >InnoPulse</div></h1>

      {/* Search */}
      {/* SearchIcon */}
      <div className="flex-1">
        <form className="flex items-center space-x-1 bg-gray-100 p-2 rounded-md flex-1 mx-2 max-w-96">
          <SearchIcon className="h-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 outline-none"
          />
        </form>
      </div>

      <div className="flex items-center space-x-4 px-6">
        <Link href="/" className="icon">
          <HomeIcon className="h-5 " />
          <p>Home</p>
        </Link>

        <Link href="" className="icon hidden md:flex">
          <UsersIcon className="h-5" />
          <p>Connect</p>
        </Link>

        <Link href="/myjobs" className="icon hidden md:flex">
          <Briefcase className="h-5" />
          <p>Jobs</p>
        </Link>

        <Link href="/notification" className="icon">
          <MessagesSquare className="h-5" />
          <p>Notifications</p>
        </Link>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button asChild variant="secondary">
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </div>
  );
}

export default Header;
