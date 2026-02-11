import AdminNavigation from "@/components/ADminNavigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="bg-[#f6f7f8] text-[#0d141b] transition-colors duration-300 dark:bg-[#101922] dark:text-slate-50">
      <AdminNavigation />
      {children}
      <footer className="py-10 text-center text-xs font-medium text-slate-400">
        © 2026 MyMeds E-Commerce. Admin Panel v2.4.0
      </footer>
    </div>
  );
}
