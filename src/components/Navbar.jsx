"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { authClient, useSession } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter(); 

  const links = (
    <>
      <Link className="hover:text-blue-600 rounded-lg text-[16px]" href={`/`}>
        Home
      </Link>
      <Link
        className="hover:text-blue-600 rounded-lg text-[16px]"
        href={`/ideas`}
      >
        Ideas
      </Link>
      <Link
        className="hover:text-blue-600 rounded-lg text-[16px]"
        href={`/add-idea`}
      >
        Add Idea
      </Link>
      <Link
        className="hover:text-blue-600 rounded-lg text-[16px]"
        href={`/my-ideas`}
      >
        My Ideas
      </Link>
      <Link
        className="hover:text-blue-600 rounded-lg text-[16px]"
        href={`/my-interactions`}
      >
        My Interactions
      </Link>
    </>
  );

  const { data: section, isPending } = useSession();
  const user = section?.user;

  const handleLogOut = async () => {
    await authClient.signOut();

    router.refresh();
    router.push("/");
  };
  return (
    <div className="navbar shadow px-4 sm:px-8 sticky top-0 z-10">
      <div className="container mx-auto flex items-center gap-2 cursor-pointer ">
        {/* Navbar Start: Logo Section */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* Mobile Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 font-medium"
            >
              {links}
            </ul>
          </div>

          {/* Logo Link */}
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer group"
          >
            {/* Inline Logo SVG (Lightbulb + Vault Nodes) */}
            <svg
              className="w-8 h-8 text-blue-600 transition-transform group-hover:scale-105"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
              <circle cx="12" cy="10" r="1.5" className="fill-blue-600" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-base-content">
              Idea<span className="text-blue-600">Vault</span>
            </span>
          </Link>
        </div>

        {/* Navbar Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 font-medium ">
            {links}
          </ul>
        </div>

        {/* Navbar End: Action Button */}
        <div className="navbar-end">
          <ThemeToggle />
          {!section && !isPending ? (
            <div className="flex gap-4">
              <Link href={`/login`}>
                <Button variant="outline" className={`rounded-md border-none`}>
                  Login
                </Button>
              </Link>
              <Link href={`/register`}>
                <Button className={`bg-[#155dfc] rounded-md`}>Register</Button>
              </Link>
            </div>
          ) : (
            <div className="relative group">
              <button className="flex items-center gap-3 p-1 rounded-full hover:bg-gray-100 transition-colors border border-transparent hover:border-border">
                {user?.image ? (
                  <Image
                    width={40}
                    height={40}
                    src={user?.image}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm ring-2 ring-blue-600/10">
                    {user?.name ? (
                      user.name[0].toUpperCase()
                    ) : (
                      <CgProfile className="w-6 h-6" />
                    )}
                  </div>
                )}
                <div className="text-left hidden lg:block">
                  <p className="text-sm font-bold truncate max-w-25">{user?.name || "User"}</p>
                  <p className="text-[10px] text-slate-500">
                    Student
                  </p>
                </div>
              </button>

              <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-3 border-b border-slate-100">
                  <p className="font-bold text-sm" style={{ color: "#000" }}>
                    Welcome back!
                  </p>
                  <p className="text-xs truncate text-slate-500">
                    <span>{user?.email}</span>
                  </p>
                </div>
                <Link
                  href="/profile"
                  className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-3 transition-colors"
                >
                  <CgProfile className="w-4 h-4" /> Profile
                </Link>
                <button
                  onClick={handleLogOut}
                  className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left w-full"
                >
                  <LogOut className="w-4 h-4" /> Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
