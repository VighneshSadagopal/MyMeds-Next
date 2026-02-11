"use client";

import * as React from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/account";

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const [remember, setRemember] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl,
    });
    console.log("signIn result:", res);

    setIsLoading(false);

    if (!res) {
      setError("Login failed. Please try again.");
      return;
    }

    if (res.error) {
      setError(res.error);
      return;
    }

    // NextAuth returns a URL when successful
    router.push(res.url || callbackUrl);
    router.refresh();
  }

  return (
    <div>
      <form className="space-y-5" onSubmit={onSubmit}>
        {/* Email */}
        <div>
          <label
            className="mb-2 block text-sm font-bold text-[#0d141b] dark:text-slate-200"
            htmlFor="email"
          >
            Email Address
          </label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="e.g., name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="h-14 rounded-xl border-slate-200 bg-slate-50 px-4 text-[#0d141b] placeholder:text-slate-400 outline-none transition-all focus-visible:ring-4 focus-visible:ring-[#2b8cee]/10 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              className="block text-sm font-bold text-[#0d141b] dark:text-slate-200"
              htmlFor="password"
            >
              Password
            </label>
            <a
              className="text-sm font-bold text-[#2b8cee] hover:underline"
              href="#"
            >
              Forgot Password?
            </a>
          </div>

          <div className="relative flex items-stretch">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="h-14 rounded-xl rounded-r-none border border-slate-200 border-r-0 bg-slate-50 px-4 text-[#0d141b] placeholder:text-slate-400 outline-none transition-all focus-visible:ring-0 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white"
            />
            <button
              type="button"
              className="flex items-center justify-center rounded-xl rounded-l-none border border-l-0 border-slate-200 bg-slate-50 px-4 text-slate-400 dark:border-slate-700 dark:bg-slate-800/50"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <span className="material-symbols-outlined text-xl">
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>

        {/* Remember */}
        <div className="flex items-center pt-2">
          <Checkbox
            id="remember"
            checked={remember}
            onCheckedChange={(v) => setRemember(Boolean(v))}
            className="h-5 w-5 rounded border-slate-300 data-[state=checked]:bg-[#2b8cee] data-[state=checked]:border-[#2b8cee] dark:border-slate-700"
          />
          <label
            className="ml-3 text-sm font-medium text-slate-600 dark:text-slate-400"
            htmlFor="remember"
          >
            Stay logged in for 30 days
          </label>
        </div>

        {/* Error */}
        {error ? (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-200">
            {error}
          </div>
        ) : null}

        {/* Submit */}
        <Button
          type="submit"
          disabled={isLoading}
          className="h-14 w-full gap-2 rounded-xl bg-[#2b8cee] font-bold text-white shadow-lg shadow-[#2b8cee]/20 hover:bg-[#2b8cee]/90 disabled:opacity-60"
        >
          <span>{isLoading ? "Logging in..." : "Login to Account"}</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </Button>
      </form>
    </div>
  );
}
