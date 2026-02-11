import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Headset,
  Info,
  MapPin,
  Pill,
  ShieldCheck,
  LockKeyhole,
  LogIn,
  Plus,
} from "lucide-react";

export default function AccessDenied403Page() {
  return (
    <div className="min-h-screen bg-[#f6f7f8] text-slate-900 dark:bg-[#101922] dark:text-slate-100">

      {/* Main */}
      <main className="mx-auto flex min-h-screen max-w-[1200px] items-center justify-center px-6 pb-10 pt-28 md:px-12">
        <div className="flex w-full flex-col items-center gap-12 md:flex-row md:gap-20">
          {/* Illustration */}
          <div className="w-full md:w-1/2">
            <div className="mx-auto aspect-square w-full max-w-[420px]">
              <div className="relative h-full w-full">
                {/* soft glow */}
                <div className="absolute inset-0 scale-110 rounded-full bg-[#2b8cee]/5 blur-3xl" />

                {/* dashed circle */}
                <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#2b8cee]/20" />

                {/* center card */}
                <div className="relative z-10 flex h-full w-full items-center justify-center">
                  <div className="relative">
                    <div className="relative flex h-[240px] w-[200px] items-center justify-center rounded-3xl border border-[#2b8cee]/10 bg-white shadow-2xl dark:bg-slate-800">
                      <LockKeyhole className="h-20 w-20 text-[#2b8cee]/30" />

                      {/* top-right blue tile */}
                      <div className="absolute -right-6 -top-6 flex h-16 w-16 rotate-12 items-center justify-center rounded-2xl bg-[#2b8cee] shadow-lg">
                        <LockKeyhole className="h-7 w-7 text-white" />
                      </div>

                      {/* bottom-left white tile */}
                      <div className="absolute -bottom-4 -left-8 flex h-14 w-14 -rotate-6 items-center justify-center rounded-2xl border border-[#2b8cee]/20 bg-white shadow-md dark:bg-slate-700">
                        <ShieldCheck className="h-6 w-6 text-[#2b8cee]" />
                      </div>
                    </div>

                    {/* small pill bubble */}
                    <div className="absolute right-[-52px] top-1/2 -translate-y-1/2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2b8cee]/20">
                        <Pill className="h-4 w-4 text-[#2b8cee]" />
                      </div>
                    </div>

                    {/* tiny shield bottom-left (extra depth like screenshot) */}
                    <div className="absolute left-[-10px] top-[165px] hidden md:block">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-slate-800">
                        <ShieldCheck className="h-4 w-4 text-[#2b8cee]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
            <div className="space-y-3">
              <Badge className="w-fit rounded-full bg-[#2b8cee]/10 px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-[#2b8cee] hover:bg-[#2b8cee]/10">
                Error 403
              </Badge>

              <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl">
                Oops! This area <br className="hidden md:block" />
                is restricted.
              </h1>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300">
                Access Denied
              </h2>
              <p className="text-lg leading-relaxed text-slate-500 dark:text-slate-400">
                It looks like your account doesn&apos;t have the necessary
                permissions to view this medical resource. To protect your
                privacy and security, certain areas of MyMeds are restricted to
                authorized personnel or specific account types.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Button
                asChild
                className="h-14 w-full rounded-2xl bg-[#2b8cee] font-bold shadow-lg shadow-[#2b8cee]/30 hover:bg-[#2b8cee]/90 sm:w-auto"
              >
                <Link href="/" className="gap-2">
                  <ArrowLeft className="h-5 w-5" />
                  Back to Home
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-14 w-full rounded-2xl border-2 border-[#2b8cee]/20 font-bold text-[#2b8cee] hover:bg-[#2b8cee]/5 sm:w-auto"
              >
                <Link href="#" className="gap-2">
                  <Headset className="h-5 w-5" />
                  Contact Support
                </Link>
              </Button>
            </div>

            <div className="pt-8">
              <div className="flex items-center gap-3 border-t border-slate-200 pt-6 text-sm text-slate-400 dark:border-slate-800">
                <Info className="h-4 w-4" />
                <span>Reference ID: #MED-403-992-SEC</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
