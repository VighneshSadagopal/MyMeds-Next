import SignupForm from "@/components/login/SignupForm";
import Logo from "@/components/Logo";

export default function SignupPage() {
  return (
    <div className="bg-background-light font-display min-h-screen overflow-x-hidden text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <main className="flex min-h-screen flex-col md:flex-row">
        {/* LEFT PANEL */}
        <section className="relative flex w-full min-h-[50vh] md:min-h-screen md:w-1/2 bg-[#2b8cee]/10 dark:bg-[#2b8cee]/5 overflow-hidden">
          {/* Glow background */}
          <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
            <div className="absolute top-0 -left-20 w-40 h-40 bg-[#2b8cee] rounded-full blur-3xl" />
            <div className="absolute bottom-0 -right-20 w-48 h-48 bg-[#2b8cee] rounded-full blur-3xl" />
          </div>

          {/* Brand */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20 flex items-center gap-3">
           <Logo />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col justify-center px-8 md:px-20 w-full">
            <div className="max-w-lg">
              {/* Icon */}
              <div className="mb-8 w-fit p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
                <span className="material-symbols-outlined text-[#2b8cee] text-4xl">
                  health_and_safety
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                Start Your <span className="text-[#2b8cee]">Wellness</span>{" "}
                Journey.
              </h1>

              {/* Description */}
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                Join thousands of families who trust MyMeds for their healthcare
                essentials. Manage prescriptions, track wellness, and shop with
                confidence.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-6">
                <Feature
                  icon="verified"
                  title="Certified Pharmacy"
                  subtitle="100% Genuine Medicines"
                />
                <Feature
                  icon="local_shipping"
                  title="Fast Delivery"
                  subtitle="To your doorstep"
                />
              </div>

              {/* Testimonial */}
              <div className="mt-12 p-6 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white dark:border-slate-700 shadow-xl shadow-[#2b8cee]/5">
                <div className="flex -space-x-3 mb-4">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9cRm3povdwT7dN_42qL_B0LcDkd-mGK5lHS5reSb7fU6-CdmMmLEba3IkBSdvF4OaJrofOHZlprtkYByWuios2fsAcCD-QWGaD6qLTB1ZnGXKEkoU_1vvxu0vWxm-4LB78SeWFAjBwCrf28w8yIBJjdCofsT3_ANYRp9kL6CxGscSVlhomYPFqMRtew9ILZB6XRcneMY2PPjDxXQybA44t8ePvr9_Aa8z4cblnUEUiJFGfULFq7LCfMeJElnk_U8k_-pc0uB4Rmo"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYBvgfU3HZCjvR-3Duo4XiqrKJWxhyB9XpiCkqWaIW68D-eXkDG9lcf3jFzr3rbcWnCr-tWX1Rk-EzhwEv60GvwzvaVQBvt0BlOER6mdPF8sO2RVwLaHcEl0n2ZnMWqYGTv4tv09drIVp8HSdG9xngEOPuxoZg-duXD5wpCdI0icjPTfxCpe9_uTUcswF6dRKFq1isHZTHbtO_8aEE5h6EP5puf9ML2cYbhLUV8vPyqyuQCcpTyD7MF-kvRd0dMHCTQY8Pl8KKuyo"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBxH0JELYRIN2CT0BgNBtEahL9OxZyMe3_E_FoTs3unSvIZqJBE0I5yXt5-HtRiPYa9KFAYStfMrwqGwJjpPlLanJ4hib10qcpWsX-ZmADwhLd0ClvCUeMgfyvytAgbjVB1COOuT3TSJWUVwRSomADfhcf-p_2z4nGG3IVwT_BdtsD4mHiN0BeWzFeu9ivUa51uzYU_tESc2pS-FhJQPZaeH_eWCC_6205OlfEWNKdmLwwK5stSjwZS2sQUBaBYdPXQekNRqEE69U"
                  />
                  <div className="w-10 h-10 rounded-full bg-[#2b8cee] text-white flex items-center justify-center text-xs font-bold border-2 border-white dark:border-slate-800">
                    +5k
                  </div>
                </div>

                <p className="text-sm italic text-slate-600 dark:text-slate-400">
                  “MyMeds made managing my family&apos;s prescriptions so much
                  easier.”
                </p>
                <p className="text-xs font-bold mt-2 text-slate-900 dark:text-white">
                  — Sarah J., Verified Member
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT PANEL (FORM) */}
        <section className="flex min-h-screen w-full items-center justify-center bg-white p-8 dark:bg-background-dark md:w-1/2 md:p-16">
          <SignupForm />
        </section>
      </main>
    </div>
  );
}

function Feature({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="material-symbols-outlined text-[#2b8cee]">{icon}</span>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
}
