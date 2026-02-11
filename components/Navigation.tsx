import Link from "next/link";
import Logo from "./Logo";
import { getServerSession } from "next-auth";
import AdminProf from "./navigation/AdminProf";


export default async function Navigation() {
  const session = await getServerSession();

  const isLoggedIn = Boolean((session as any)?.user?.email);

  return (
    <header className="sticky top-0 z-50 border-b border-solid border-[#e7edf3] bg-[#f6f7f8]/80 backdrop-blur-md dark:border-slate-800 dark:bg-[#101922]/80">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between whitespace-nowrap px-6 py-3 lg:px-10">
        <div className="flex items-center gap-8">
          {/* Brand */}
          <Logo />

          {/* Links */}
          <nav className="hidden items-center gap-9 md:flex">
            <Link
              href="/shop"
              className="text-sm font-semibold text-[#0d141b] transition-colors hover:text-[#2b8cee] dark:text-slate-300"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-[#0d141b] transition-colors hover:text-[#2b8cee] dark:text-slate-300"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="text-sm font-semibold text-[#0d141b] transition-colors hover:text-[#2b8cee] dark:text-slate-300"
            >
              Blog
            </Link>
            <Link
              href="/news"
              className="text-sm font-semibold text-[#0d141b] transition-colors hover:text-[#2b8cee] dark:text-slate-300"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-[#0d141b] transition-colors hover:text-[#2b8cee] dark:text-slate-300"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-xl text-[#4c739a]">
              search
            </span>
            <input
              className="w-64 rounded-xl border-none bg-[#e7edf3] py-2 pl-10 pr-4 text-sm text-[#0d141b] placeholder:text-[#4c739a] transition-all focus:ring-2 focus:ring-primary/50 dark:bg-slate-800 dark:text-slate-50"
              placeholder="Search medicines..."
            />
          </div>

         <AdminProf />
        </div>
      </div>
    </header>
  );
}
