import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function AdminNavigation() {
  return (
    /* Header */
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-[#e7edf3] bg-white px-10 py-3 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-[#2b8cee]">
          <div className="size-6">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
            </svg>
          </div>
          <Link href="/" className="text-lg font-bold leading-tight tracking-tight">
            MyMeds Admin
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[#2b8cee] dark:text-slate-400"
            href="#"
          >
            Dashboard
          </a>
          <a
            className="border-b-2 border-primary pb-1 text-sm font-bold text-[#2b8cee]"
            href="#"
          >
            Products
          </a>
          <a
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[#2b8cee] dark:text-slate-400"
            href="#"
          >
            Orders
          </a>
          <a
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[#2b8cee] dark:text-slate-400"
            href="#"
          >
            Customers
          </a>
          <a
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[#2b8cee] dark:text-slate-400"
            href="#"
          >
            Analytics
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            search
          </span>
          <Input
            className="h-10 w-64 rounded-xl border-0 bg-slate-100 pl-10 pr-4 text-sm focus-visible:ring-2 focus-visible:ring-primary/50 dark:bg-slate-800"
            placeholder="Search product database..."
          />
        </div>

        <div
          className="size-10 rounded-full border-2 border-primary/20 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvEGgaQrO4yAUuwYMD5FXKtUpRK4x6DIYJQw23iCdU0-sgdIRzJdtfTJNhRaSZHmLYd7brMQ6EIdh_p5l93BLTmfHWQuibisjQYK0F0MbjAA9PFJ0eGlqXU8j6LcUpWv2zPZauS18djUUtDrlOjtD5qrYIj6qIs2JUXyicOV24Qrklxckg0ebtKOBfdkpEf5dOhVaDkXoLpI2Utv3WIQSkLIc6_diPymSgVdE2sYIe9Xgp6Y4ICRDME1mahIzikirJjPk0ofCCICE")',
          }}
          aria-label="Admin profile avatar"
          role="img"
        />
      </div>
    </header>
  );
}
