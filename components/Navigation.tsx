import Link from "next/link";
import Logo from "./Logo";
import { getServerSession } from "next-auth";


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

          {isLoggedIn ? (
            <div className="flex items-center gap-3">
            <button className="relative rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">favorite</span>
            </button>
    
            <button className="relative rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-[#2b8cee] text-[10px] font-bold text-white dark:border-slate-900">
                3
              </span>
            </button>
    
            <div
              className="h-10 w-10 rounded-full border border-slate-300 bg-slate-200 bg-cover bg-center dark:border-slate-700"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCTXTuMzjJ5XB96bGEE-72ZlVaIHyMrvnCWkdYHo4y0DGt-hczQ6d7Ox1fSgFc6LnhkTYyr7ZerB7emfsom8Mtgabs9n375uTfw1QmsbEWaP_-B3pkMfGgYylG4JwhqUQ-H1ayQVjwAkq49Wt42XLLsbn6E9Gde7xlOcZicdZ8Pcm0UEm9Dz9yBDJLPm7ud3sjFQNJHmylZfxOyoi_3-Stx5nIvWfWQcdhswkZBoAC65JEpYtzOsbFef-1dowa8hp_PFYW1cn3rk_k")',
              }}
              aria-label="User profile avatar"
              role="img"
            />
          </div>
          ) : (
            <Link
              href="/login"
              className="flex h-10 min-w-[100px] items-center justify-center rounded-xl bg-[#2b8cee] px-5 text-sm font-bold tracking-wide text-white shadow-md transition-all hover:bg-[#2b8cee]/90"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
