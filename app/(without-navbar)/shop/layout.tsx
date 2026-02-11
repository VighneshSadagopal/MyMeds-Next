export default function ShopLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="bg-[#f6f7f8] text-[#0d141b] transition-colors duration-300 dark:bg-[#101922] dark:text-slate-50">
        {children}
      </div>
    );
  }
  