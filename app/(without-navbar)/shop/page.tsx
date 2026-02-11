"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Product } from "@/types/content";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchAllProducts, searchProducts, type SearchItem } from "@/utils/drupal-api";

function BadgePill({
  text,
  variant,
}: {
  text: string;
  variant: "green" | "red";
}) {
  const cls =
    variant === "green"
      ? "bg-green-500"
      : "bg-red-500";
  return (
    <div
      className={`absolute left-2 top-2 ${cls} z-10 rounded px-2 py-1 text-[10px] font-black uppercase tracking-wider text-white`}
    >
      {text}
    </div>
  );
}




export default function ShopPage() {
  
  const [brandPfizer, setBrandPfizer] = React.useState(true);

  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [searchValue, setSearchValue] = React.useState<string | ("")>("");


  React.useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      try {
        setLoading(true);
        setError(null);

        // If you later add more fetches, Promise.all already scales.
        const data = await fetchAllProducts();
        console.log("Fetched products data:", data);
        if (!isMounted) return;

        // Expecting fetchAllProducts() to return an array.
        const safe = Array.isArray(data) ? data : [];
        setProducts(safe as Product[]);

        // ✅ correct output: actual data, not a Promise
      } catch (e) {
        console.error(e);
        if (!isMounted) return;
        setError("Failed to load products.");
      } finally {
        if (!isMounted) return;
        setLoading(false);
      }
    }

    loadProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!searchValue || searchValue.trim() === "") {
        const allProducts = await fetchAllProducts();
        const safe = Array.isArray(allProducts) ? allProducts : [];
        setProducts(safe as Product[]);
      } else {
        const data = await searchProducts(searchValue);
        setProducts(data.items);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">

      <div className="layout-container flex min-h-screen flex-col">
        {/* Top Navigation */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4">
            <div className="flex flex-1 items-center gap-8">
              <div className="flex items-center gap-2 text-[#2b8cee]">
                <span className="material-symbols-outlined fill-1 text-4xl">
                  medical_services
                </span>
                <Link href="/" className= "text-2xl font-black tracking-tight text-slate-900 dark:text-white">MyMeds</Link>
              </div>

              {/* Search */}
              <div className="flex w-full max-w-lg items-center overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <div className="flex items-center justify-center pl-4 text-slate-500">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <Input
                  className="h-11 border-0 bg-transparent px-3 text-sm font-medium text-slate-900 placeholder:text-slate-500 focus-visible:ring-0 dark:text-white"
                  placeholder="Search medicines, brands, or health needs..."
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
              <Button onClick={handleSearch} className="rounded-lg bg-[#2b8cee] font-bold hover:bg-[#2b8cee]/90">Search</Button>
            </div>

            <div className="ml-8 flex items-center gap-6">
              

              <div className="hidden h-6 w-px bg-slate-200 dark:bg-slate-700 xl:block" />
              {/* <Link href="/login" className="flex h-10 min-w-[100px] items-center justify-center rounded-xl bg-[#2b8cee] px-5 text-sm font-bold tracking-wide text-white shadow-md transition-all hover:bg-[#2b8cee]/90">
              Sign In
               </Link> */}

            {/* This will be called for logged in */}
              {/* <div className="flex items-center gap-3">
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
              </div> */}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-8 md:flex-row">
          {/* Sidebar */}
          <aside className="w-full flex-shrink-0 md:w-64">
            <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <Button className="mb-8 w-full gap-2 rounded-lg bg-[#2b8cee] py-6 font-bold hover:bg-[#2b8cee]/90">
                <span className="material-symbols-outlined">upload_file</span>
                Upload Prescription
              </Button>

              <div className="space-y-8">
                {/* Categories */}
                <section>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Categories
                  </h3>

                  <nav className="flex flex-col gap-1">
                    <a
                      className="flex items-center gap-3 rounded-lg bg-[#2b8cee]/10 px-3 py-2.5 font-bold text-[#2b8cee]"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-xl">pill</span>
                      <span className="text-sm">All Products</span>
                    </a>

                    {[
                      { icon: "prescriptions", label: "Prescription" },
                      { icon: "medical_information", label: "OTC Medicines" },
                      { icon: "stethoscope", label: "Medical Devices" },
                      { icon: "face", label: "Skincare" },
                    ].map((x) => (
                      <a
                        key={x.label}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-xl">{x.icon}</span>
                        <span className="text-sm">{x.label}</span>
                      </a>
                    ))}
                  </nav>
                </section>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* Price Range (static UI) */}
                <section>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Price Range
                  </h3>
                  <div className="px-2">
                    <div className="relative h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                      <div className="absolute left-1/4 right-1/4 h-full rounded-full bg-[#2b8cee]" />
                      <div className="absolute left-1/4 top-1/2 h-4 w-4 -translate-y-1/2 cursor-pointer rounded-full border-2 border-[#2b8cee] bg-white shadow-md" />
                      <div className="absolute right-1/4 top-1/2 h-4 w-4 -translate-y-1/2 cursor-pointer rounded-full border-2 border-[#2b8cee] bg-white shadow-md" />
                    </div>

                    <div className="mt-4 flex justify-between">
                      <span className="text-xs font-bold text-slate-500">$10</span>
                      <span className="text-xs font-bold text-slate-500">$500+</span>
                    </div>
                  </div>
                </section>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* Brands */}
                <section>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Top Brands
                  </h3>

                  <div className="flex flex-col gap-3">
                    {[
                      { id: "bayer", label: "Bayer", checked: false },
                      { id: "pfizer", label: "Pfizer", checked: brandPfizer },
                      { id: "jnj", label: "Johnson & Johnson", checked: false },
                      { id: "gsk", label: "GlaxoSmithKline", checked: false },
                    ].map((b) => (
                      <label
                        key={b.id}
                        className="group flex cursor-pointer items-center gap-3"
                      >
                        <Checkbox
                          checked={b.id === "pfizer" ? brandPfizer : b.checked}
                          onCheckedChange={(v) => {
                            if (b.id === "pfizer") setBrandPfizer(Boolean(v));
                          }}
                          className="h-5 w-5"
                        />
                        <span className="text-sm font-medium text-slate-600 group-hover:text-[#2b8cee] dark:text-slate-400">
                          {b.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </aside>

          {/* Product Area */}
          <div className="flex flex-1 flex-col">
            {/* Breadcrumb */}
            <nav className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              <a className="hover:text-[#2b8cee]" href="#">
                Home
              </a>
              <span className="material-symbols-outlined text-[10px]">
                chevron_right
              </span>
              <span className="text-slate-900 dark:text-slate-300">
                Medicines & Supplies
              </span>
            </nav>

            {/* Title + Sort */}
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h1 className="mb-2 text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                  Medicines & Supplies
                </h1>
                <p className="font-medium text-slate-500">
                {searchValue
                    ? `Showing results for "${searchValue}"`
                    : "Showing all products"}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="whitespace-nowrap text-sm font-bold text-slate-400">
                  Sort by:
                </span>

                <Select defaultValue="popular">
                  <SelectTrigger className="w-[220px] rounded-lg border-slate-200 bg-white text-sm font-bold dark:border-slate-800 dark:bg-slate-900">
                    <SelectValue placeholder="Most Popular" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="low">Price: Low to High</SelectItem>
                    <SelectItem value="high">Price: High to Low</SelectItem>
                    <SelectItem value="new">Newest Arrivals</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="group flex flex-col rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                >

                  <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#2b8cee]">
                    {p.productCategory}
                  </span>

                  <h3 className="mb-2 flex-grow text-lg font-bold leading-tight text-slate-900 dark:text-white">
                    {p.productName}
                  </h3>

                  <div className="mb-4 flex items-center gap-1">
                    <span className="material-symbols-outlined fill-1 text-sm text-yellow-400">
                      star
                    </span>
                    <span className="text-xs font-black text-slate-900 dark:text-white">
                      {p.productRating}
                    </span>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xl font-black text-slate-900 dark:text-white">
                      ${p.productPrice}
                    </span>

                    <button className="flex items-center justify-center rounded-lg bg-[#2b8cee]/10 p-2 text-[#2b8cee] transition-colors hover:bg-[#2b8cee] hover:text-white">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {/* <div className="mt-12 flex items-center justify-center gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2b8cee] font-bold text-white">
                1
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 font-bold text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800">
                2
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 font-bold text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800">
                3
              </button>
              <span className="px-2 text-slate-400">...</span>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 font-bold text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800">
                12
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div> */}
          </div>
        </main>

        {/* Footer Banner */}
        <footer className="mt-auto border-t border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="mx-auto max-w-[1440px] px-6 py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                {
                  icon: "verified_user",
                  title: "Authentic Products",
                  desc: "100% genuine medical supplies sourced from verified distributors.",
                },
                {
                  icon: "local_shipping",
                  title: "Fast Delivery",
                  desc: "Same-day delivery available for essential medicines in major cities.",
                },
                {
                  icon: "medical_services",
                  title: "Pharmacist Help",
                  desc: "Connect with our licensed pharmacists for dosage guidance.",
                },
                {
                  icon: "security",
                  title: "Secure Payments",
                  desc: "Your transactions and medical history are encrypted and safe.",
                },
              ].map((x) => (
                <div key={x.title} className="flex flex-col items-center p-4 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2b8cee]/10 text-[#2b8cee]">
                    <span className="material-symbols-outlined text-3xl">
                      {x.icon}
                    </span>
                  </div>
                  <h4 className="mb-1 font-bold">{x.title}</h4>
                  <p className="text-xs text-slate-500">{x.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 md:flex-row">
              <div className="flex items-center gap-2 opacity-50">
                <span className="material-symbols-outlined">medical_services</span>
                <span className="font-bold tracking-tight">MyMeds © 2024</span>
              </div>

              <div className="flex gap-6 text-xs font-bold text-slate-500">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map(
                  (t) => (
                    <a key={t} className="transition-colors hover:text-[#2b8cee]" href="#">
                      {t}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
