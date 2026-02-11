import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AdminAddProductForm from "@/components/admin/AdminAddProductForm";

export default async function AdminAddProductPage() {
  const session = await getServerSession();

  if (!session) redirect("/login");
  if (session?.user?.email !== "admin1@gmail.com") redirect("/403");

  return (
    <div className="min-h-screen bg-background-light text-[#0d141b] dark:bg-background-dark dark:text-slate-100">
      <main className="mx-auto max-w-[1100px] px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-black tracking-tight text-[#0d141b] dark:text-white">
            Add New Product
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            Fill in the details below to add a new medicine or medical supply to
            the catalog.
          </p>
        </div>

        <AdminAddProductForm />

        {/* Preview Note */}
        <div className="mt-10 flex items-center gap-6 rounded-xl border border-primary/10 bg-primary/5 p-6">
          <div className="rounded-lg border border-slate-100 bg-white p-2 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <span className="material-symbols-outlined text-4xl text-[#2b8cee]">
              medication
            </span>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 dark:text-slate-100">
              Visibility Note
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Once saved, this product will be immediately visible in the public
              pharmacy storefront under the selected category.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
