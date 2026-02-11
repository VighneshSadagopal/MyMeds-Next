"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function SignupForm() {
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [accepted, setAccepted] = React.useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    if (!accepted) {
      alert("Please accept terms");
      return;
    }

    // TODO: call signup API (Drupal / Node / Auth)
  }

  const strengthBars = Math.min(
    3,
    [/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/]
      .filter((r) => r.test(password)).length
  );

  return (
    <div className="w-[100%] max-w-[480px]">
      <header className="mb-10">
        <h2 className="mb-2 text-3xl font-bold">Create your account</h2>
        <p className="text-slate-500 dark:text-slate-400">
          Fill in your details below to get started with MyMeds.
        </p>
      </header>

      <form className="space-y-5" onSubmit={onSubmit}>
        {/* Full Name */}
        <Field icon="person" placeholder="John Doe" label="Full Name" />

        {/* Email */}
        <Field icon="mail" placeholder="name@example.com" label="Email Address" type="email" />

        {/* Passwords */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field
            icon="lock"
            placeholder="••••••••"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Field
            icon="lock_reset"
            placeholder="••••••••"
            label="Confirm Password"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>

        {/* Strength */}
        <div className="flex items-center gap-1 px-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full ${
                i < strengthBars ? "bg-[#2b8cee]" : "bg-slate-200 dark:bg-slate-800"
              }`}
            />
          ))}
          <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-[#2b8cee]">
            {strengthBars >= 2 ? "Strong" : "Weak"}
          </span>
        </div>

        {/* Terms */}
        <div className="flex items-center gap-3 py-2">
          <Checkbox
            id="terms"
            checked={accepted}
            onCheckedChange={(v) => setAccepted(Boolean(v))}
          />
          <label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-400">
            I agree to the{" "}
            <a className="font-semibold text-[#2b8cee] hover:underline">Terms</a> &{" "}
            <a className="font-semibold text-[#2b8cee] hover:underline">Privacy Policy</a>
          </label>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="h-14 w-full rounded-xl bg-[#2b8cee] text-lg font-bold text-white shadow-lg shadow-[#2b8cee]/20 hover:bg-[#2b8cee]/90"
        >
          Create Account
        </Button>
      </form>

      <p className="pt-8 text-center text-sm text-slate-600 dark:text-slate-400">
        Already a member?{" "}
        <Link href="/login" className="font-bold text-[#2b8cee] hover:underline">Sign In</Link>
      </p>
    </div>
  );
}

function Field({
  label,
  icon,
  ...props
}: {
  label: string;
  icon: string;
} & React.ComponentProps<typeof Input>) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <div className="group relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#2b8cee]">
          {icon}
        </span>
        <Input
          {...props}
          className="h-14 rounded-xl border-slate-200 bg-slate-50 pl-12 dark:border-slate-800 dark:bg-slate-900"
        />
      </div>
    </div>
  );
}
