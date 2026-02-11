export default function Hero() {
    return (
        <section className="py-10">
            <div className="flex flex-col items-center gap-10 overflow-hidden rounded-3xl border border-[#e7edf3] bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 lg:flex-row lg:p-12">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:w-1/2">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                <div
                  className="h-full w-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRmAKS8Urjp440IhVyVNYQMOHrulsTLPVbPUqgnJNPGTy0EbPpAp6rW9KmmtpOQzSQk-l8Y8q56ElPr4maoDzdSpbNdTUxagONNBy6tPu62VZc0rnrrhqWKDB5IqoQab3r4njx996q0vF7LrdlSh6-0LNV1bZxWUx_3cItIAIqL-VE0-MP66BctAw4UZ55yDtb49EwZ6RFS8iuwGak_ZrvC87XoANqXCGyEMIWS7UkejaW8fIdfKmPq5TYyoDvkVHL87w87DeFB7A")',
                  }}
                  aria-label="Happy family outdoors representing a healthy active lifestyle"
                  role="img"
                />
              </div>
  
              <div className="flex w-full flex-col gap-8 lg:w-1/2">
                <div className="flex flex-col gap-4">
                  <span className="text-sm font-bold uppercase tracking-widest text-[#2b8cee]">
                    Welcome to MyMeds
                  </span>
  
                  <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-[#0d141b] dark:text-slate-50 lg:text-6xl">
                    Your Health, <br />
                    <span className="text-[#2b8cee]">Our Priority.</span>
                  </h1>
  
                  <p className="max-w-lg text-lg leading-relaxed text-[#4c739a] dark:text-slate-400">
                    Fast, reliable, and friendly pharmacy services delivered right to your doorstep. Get your medicines and supplies within hours.
                  </p>
                </div>
  
                <div className="flex flex-wrap gap-4">
                  <button className="flex h-14 min-w-[160px] items-center justify-center rounded-xl bg-[#2b8cee] px-8 text-base font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02]">
                    Shop Now
                  </button>
                  <button className="flex h-14 min-w-[160px] items-center justify-center rounded-xl border-2 border-[#e7edf3] bg-white px-8 text-base font-bold text-[#0d141b] transition-all hover:bg-[#f6f7f8] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700">
                    Learn More
                  </button>
                </div>
  
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-[#0d141b] dark:text-slate-50">10k+</span>
                    <span className="text-sm text-[#4c739a]">Happy Users</span>
                  </div>
                  <div className="h-10 w-px bg-[#e7edf3] dark:bg-slate-800"></div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-[#0d141b] dark:text-slate-50">24/7</span>
                    <span className="text-sm text-[#4c739a]">Expert Support</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
};