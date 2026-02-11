import Logo from "@/components/Logo";
import LoginForm from "@/components/login/LoginForm";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = getServerSession();

  if (await session) redirect("/account");
  return (
    <div className="bg-background-light text-[#0d141b] transition-colors duration-300 dark:bg-background-dark dark:text-slate-100">
      <div className="flex min-h-screen w-full flex-col lg:flex-row">
        {/* Left Side Image */}
        <div className="relative hidden overflow-hidden bg-[#2b8cee] lg:flex lg:w-1/2">
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-60"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBLkAfhbmS1TeyZ5tDiSXoAoD6AZQ4-Ac5tPeThj5QhFfooc2cI3sSUTPx8LG1VUWMjtUOpIiHL53mrmzxROy_WzrZ2hJG-UYH_DPk6jdmD_oh5h9HrEsV2p3cd6mLkt5K3ecpmgOfbuXHXr2SmYJAjyN34zUtkwcgTYVE0qSSIZ9J6Gq1pxkvcQh2EbfXXewJvAo35LLg8l4yxFQmRh3AaBv-VqpJ-MdVQs6-NJJ1Os3JmZ42f6vpjAVLH4vtMzlMyHMdAWB186E')",
            }}
            aria-label="Modern high-tech pharmacy interior with clean white shelves"
            role="img"
          />

          <div className="relative z-10 flex flex-col justify-center px-20 text-white">
            <div className="mb-8 flex size-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md">
              <span className="material-symbols-outlined text-3xl text-white">
                medical_services
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight">
              Better health starts <br /> with a click.
            </h1>

            <p className="max-w-md text-xl font-medium leading-relaxed text-white/90">
              Access your prescriptions, manage medical supplies, and connect
              with healthcare experts all in one place.
            </p>

            <div className="mt-12 flex gap-4">
              <div className="flex -space-x-3">
                <img
                  className="h-10 w-10 rounded-full border-2 border-[#2b8cee] object-cover"
                  alt="Female doctor headshot"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbYxS-lROrQIf-BOzcILyBrqNXuFQYFpBBq1hZqs4Em85pbUfSsZbWdVN_S9R1LhnRBLRCOMtV-baFVuRzSf2fKvsVw33iklTBXg2b5gSPAfi1CbwVvcg_dY7vRXHprR_AaCSvI5eGjPBQTiijq6MGx3g6JidcnonHbBMndUvsO1V4YatfCZ5lwqWYPjYbeKm4pg-cme2n3_4GJiul3aqxaH8yw34reT0eQ4Z643yKFj0_A4Yjh-wXBnL54WLlbIoEhMWIjLuYoy8"
                />
                <img
                  className="h-10 w-10 rounded-full border-2 border-[#2b8cee] object-cover"
                  alt="Male doctor headshot"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwZBxBzGhrm1kRRFd3dsN4j74sloiZk67IjSVEl0WVAaNamlir_PhDdvJHWF0W0P17xFpl9sthcCvUVLMeKrY5FvGa3vzv3RQtgTK1sRBcnZgj3Azpv_rCcpgBhBKqCSPDlRlMV4MUIh62FqGZ-t7-nm9DfLhLi897Eah5xjU7nblw1kduJEgzDpEEMbYQQWfJnarqnvANqJHJTS4DUaB7VEazZieY2ckFtZfqVAMQ0JNSgtGlc4kB8gDxMBb3RTvhosniU89gCGo"
                />
                <img
                  className="h-10 w-10 rounded-full border-2 border-[#2b8cee] object-cover"
                  alt="Pharmacist headshot"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs0gQ_07dWKXuTUlU-eMA1HmYkJ5YCb1WfRd54r2T-5Pf0WHXWqD1NBeW_0-QWqIxxaQg6l1mw9Jgzp3zzkaWfKzAkrd7hbzwx9Q-Z8EwEDthDp4En7PTBbQFhBmkkMcIP-F0Uz2AD8BIxORvyEmMLecsq9cHBntdq5AagogUdMxy3PBqtTQC3X9WLkAbB02I8i5OXCngyhwsV-Q2jtAEI7dhji7pZf0snE7CvjbmJ2P0IwD_GZ-9E0t_LjH3XvM73UoVo2yuZuJA"
                />
              </div>

              <div className="text-sm">
                <p className="font-bold">Trusted by 10k+ patients</p>
                <p className="text-white/70">Verified healthcare network</p>
              </div>
            </div>
          </div>

          {/* Decorative circle */}
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        </div>

        {/* Right Side Form */}
        <div className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-12 dark:bg-[#111922] lg:px-24">
          <div className="w-full max-w-[440px]">
            {/* Logo & Mobile Branding */}
            <div className="mb-10 flex items-center gap-2 lg:absolute lg:right-10 lg:top-10">
              <Logo />
            </div>

            <div className="mb-10 text-left">
              <h2 className="text-3xl font-extrabold text-[#0d141b] dark:text-white lg:text-4xl">
                Welcome Back
              </h2>
              <p className="mt-3 font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                Please enter your details to access your health profile and
                prescriptions.
              </p>
            </div>

            {/* Login Form */}
            <LoginForm />

            {/* Divider */}
            <div className="relative my-10">
              <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-800" />
              </div>
              <div className="relative flex justify-center text-sm font-bold uppercase tracking-wider">
                <span className="bg-white px-4 text-slate-500 dark:bg-[#111922] dark:text-slate-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex h-12 items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white font-bold text-[#0d141b] transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-transparent dark:text-white dark:hover:bg-slate-800"
              >
                <img
                  alt="Google Logo"
                  className="size-5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy_oMsgyC5NZgh5VjgKPC698112g9S9k49g4w16aWeukxEBrQCHt7ujtPTTaVRXDFv39Hih9FcaawoZfS8dKw7jlYLTY5uOuJgU63FjkG4m4l5vHUVNYDl51ugC64JysKIyZ0LGHOtJJRtrUMyP_pIh9iRAaFTDefK-NPXeuekVHFCtVcIQEd8qJ6MwxGSjzky9L4nrSV-Vg34MQuuLlKW9BIY1uvW8aYGUeJh9IDkyUBWqsB1F5Fe5sjBbf9SrfJzmiURFHolxP4"
                />
                <span>Google</span>
              </button>

              <button
                type="button"
                className="flex h-12 items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white font-bold text-[#0d141b] transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-transparent dark:text-white dark:hover:bg-slate-800"
              >
                <img
                  alt="Apple Logo"
                  className="size-5 dark:invert"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVXjnXHRM_6sVupMrTD4Jp940CC3U3QglFSKbEiu4ybFLKsEMTxqhe_aQoHWmCxUijpspOtMeCxB1zLyRyGkH8ZmfWkXz8paSfyqckrfxht1RCLJ5r6usJSGXO2BC4-JfdbrkZS4RehVa8L9HIE5tKTen0oKAFib6806k9j5VeRexSMjY_proAmqXhNiNqY22Fn_JoV2GRDUSytsd6s0vVjXL5jQ9u8VLhQnm_iSRaNa6a49GO5bOqKaZ9SlhETjkWd6J_rU35puk"
                />
                <span>Apple</span>
              </button>
            </div>

            {/* Signup */}
            <p className="mt-10 text-center font-medium text-slate-500 dark:text-slate-400">
              New to MyMeds?{" "}
              <Link className="font-bold text-[#2b8cee] hover:underline" href="/signup">
                Create an account
              </Link>
            </p>

            {/* Links */}
            <div className="mt-12 flex justify-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-400">
              <a className="transition-colors hover:text-[#2b8cee]" href="#">
                Privacy Policy
              </a>
              <a className="transition-colors hover:text-[#2b8cee]" href="#">
                Terms of Service
              </a>
              <a className="transition-colors hover:text-[#2b8cee]" href="#">
                Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
