import { Link } from "lucide-react";
import { getServerSession } from "next-auth";

export default async function AdminProf() {
  const session = await getServerSession();

  const isLoggedIn = Boolean((session as any)?.user?.email);

  return (
    <>
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
    </>
  );
}
