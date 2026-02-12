import Link from "next/link";
import Navigation from "./Navigation";
import Hero from "./sections/Hero";
import BlogCard from "./sections/BlogCard";
import LatestNews from "./sections/LatestNews";
import { newsMockData } from "@/Mockdata";
import { fetchBlogs } from "@/utils/drupal-api";
import { Blogs } from "@/types/content";




export default async function HomePage() {
const blogsData = await fetchBlogs();


    return (
       <main className="mx-auto max-w-[1280px] px-6 pb-20 lg:px-10">

       {/* Hero Section */}
         <Hero />

       {/* Featured Blogs */}
       <section className="py-12">
         <div className="mb-8 flex items-end justify-between px-2">
           <div>
             <h2 className="mb-2 text-3xl font-bold text-[#0d141b] dark:text-slate-50">Healthcare Tips & Blogs</h2>
             <p className="text-[#4c739a] dark:text-slate-400">Expert advice for your daily wellness journey.</p>
           </div>
           <a className="flex items-center gap-1 font-bold text-[#2b8cee] hover:underline" href="#">
             View All <span className="material-symbols-outlined">arrow_forward</span>
           </a>
         </div>

         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
           {blogsData.map((blog) => (

                <BlogCard key={blog.id} blog={blog} />
           ))}
         </div>
       </section>

       {/* Latest Medical News */}
       <section className="py-12">
         <div className="mb-8 px-2">
           <h2 className="mb-2 text-3xl font-bold text-[#0d141b] dark:text-slate-50">Latest Medical News</h2>
           <p className="text-[#4c739a] dark:text-slate-400">Stay informed about medical advancements and pharmacy updates.</p>
         </div>

         <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {newsMockData.map((news, index) => (
                <LatestNews key={index} news={news} />
            ))}
           
         </div>
       </section>

       {/* Testimonials */}
       <section className="my-10 rounded-[3rem] bg-[#2b8cee]/5 px-8 py-12 dark:bg-slate-900/30 lg:px-16">
         <div className="mb-12 text-center">
           <h2 className="mb-3 text-3xl font-bold text-[#0d141b] dark:text-slate-50">What Our Customers Say</h2>
           <p className="text-[#4c739a] dark:text-slate-400">Trusted by thousands of families for their health needs.</p>
         </div>

         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
           {/* Testimonial 1 */}
           <div className="rounded-2xl border border-[#e7edf3] bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
             <div className="mb-4 flex text-amber-400">
               <span className="material-symbols-outlined">star</span>
               <span className="material-symbols-outlined">star</span>
               <span className="material-symbols-outlined">star</span>
               <span className="material-symbols-outlined">star</span>
               <span className="material-symbols-outlined">star</span>
             </div>
             <p className="mb-6 italic leading-relaxed text-[#4c739a] dark:text-slate-300">
               "MyMeds has been a lifesaver. Their delivery is incredibly fast, and the app is so easy to use for monthly prescriptions."
             </p>
             <div className="flex items-center gap-4">
               <div className="flex size-12 items-center justify-center rounded-full bg-[#2b8cee]/10 font-bold text-[#2b8cee]">
                 SM
               </div>
               <div>
                 <p className="font-bold text-[#0d141b] dark:text-slate-50">Sarah M.</p>
                 <p className="text-xs text-[#4c739a]">Verified Customer</p>
               </div>
             </div>
           </div>

           {/* Testimonial 2 */}
           <div className="rounded-2xl border border-[#e7edf3] bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
             <div className="mb-4 flex text-amber-400">
               <span className="material-symbols-outlined">star</span>
               <span className="material-symbols-outlined">star</span>
               <span className="material-symbols-outlined">star</span>
               <span className="material-symbols-outlined">star</span>
               <span className="material-symbols-outlined">star</span>
             </div>
             <p className="mb-6 italic leading-relaxed text-[#4c739a] dark:text-slate-300">
               "The pharmacist consultations are helpful. They answered all my questions about side effects within minutes."
             </p>
             <div className="flex items-center gap-4">
               <div className="flex size-12 items-center justify-center rounded-full bg-[#2b8cee]/10 font-bold text-[#2b8cee]">
                 DK
               </div>
               <div>
                 <p className="font-bold text-[#0d141b] dark:text-slate-50">David K.</p>
                 <p className="text-xs text-[#4c739a]">Verified Customer</p>
               </div>
             </div>
           </div>

           {/* Testimonial 3 */}
           <div className="rounded-2xl border border-[#e7edf3] bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
             <div className="mb-4 flex text-amber-400">
               <span className="material-symbols-outlined">star</span>
               <span className="material-symbols-outlined">star</span>
               <span className="material-symbols-outlined">star</span>
               <span className="material-symbols-outlined">star</span>
               <span className="material-symbols-outlined">star</span>
             </div>
             <p className="mb-6 italic leading-relaxed text-[#4c739a] dark:text-slate-300">
               "Prices are competitive and I love the 'subscription' feature. I never run out of my vitamins anymore."
             </p>
             <div className="flex items-center gap-4">
               <div className="flex size-12 items-center justify-center rounded-full bg-[#2b8cee]/10 font-bold text-[#2b8cee]">
                 AL
               </div>
               <div>
                 <p className="font-bold text-[#0d141b] dark:text-slate-50">Amanda L.</p>
                 <p className="text-xs text-[#4c739a]">Verified Customer</p>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Contact */}
       <section className="py-12">
         <div className="flex flex-col gap-12 rounded-[3rem] border border-[#e7edf3] bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:flex-row lg:p-16" id="contact">
           <div className="flex w-full flex-col gap-6 lg:w-1/2">
             <h2 className="text-4xl font-bold text-[#0d141b] dark:text-slate-50">Get in Touch</h2>
             <p className="text-lg text-[#4c739a] dark:text-slate-400">
               Have questions about your order or need medical advice? Our team of pharmacists is here to help.
             </p>

             <div className="mt-4 flex flex-col gap-6">
               <div className="flex items-center gap-4">
                 <div className="flex size-12 items-center justify-center rounded-xl bg-[#2b8cee]/10 text-[#2b8cee]">
                   <span className="material-symbols-outlined">call</span>
                 </div>
                 <div>
                   <p className="text-sm font-semibold text-[#4c739a]">Call us at</p>
                   <p className="text-lg font-bold text-[#0d141b] dark:text-slate-50">+1 (800) MY-MEDS</p>
                 </div>
               </div>

               <div className="flex items-center gap-4">
                 <div className="flex size-12 items-center justify-center rounded-xl bg-[#2b8cee]/10 text-[#2b8cee]">
                   <span className="material-symbols-outlined">mail</span>
                 </div>
                 <div>
                   <p className="text-sm font-semibold text-[#4c739a]">Email us at</p>
                   <p className="text-lg font-bold text-[#0d141b] dark:text-slate-50">support@mymeds.com</p>
                 </div>
               </div>

               <div className="flex items-center gap-4">
                 <div className="flex size-12 items-center justify-center rounded-xl bg-[#2b8cee]/10 text-[#2b8cee]">
                   <span className="material-symbols-outlined">location_on</span>
                 </div>
                 <div>
                   <p className="text-sm font-semibold text-[#4c739a]">Visit us</p>
                   <p className="text-lg font-bold text-[#0d141b] dark:text-slate-50">123 Health Ave, Medical City</p>
                 </div>
               </div>
             </div>
           </div>

           <div className="w-full lg:w-1/2">
             <form className="flex flex-col gap-4">
               <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                 <div className="flex flex-col gap-1">
                   <label className="ml-1 text-sm font-bold text-[#0d141b] dark:text-slate-300">Name</label>
                   <input
                     className="h-12 rounded-xl border-none bg-[#f6f7f8] text-[#0d141b] focus:ring-2 focus:ring-primary/50 dark:bg-slate-800 dark:text-slate-50"
                     placeholder="Your full name"
                     type="text"
                   />
                 </div>
                 <div className="flex flex-col gap-1">
                   <label className="ml-1 text-sm font-bold text-[#0d141b] dark:text-slate-300">Email</label>
                   <input
                     className="h-12 rounded-xl border-none bg-[#f6f7f8] text-[#0d141b] focus:ring-2 focus:ring-primary/50 dark:bg-slate-800 dark:text-slate-50"
                     placeholder="you@example.com"
                     type="email"
                   />
                 </div>
               </div>

               <div className="flex flex-col gap-1">
                 <label className="ml-1 text-sm font-bold text-[#0d141b] dark:text-slate-300">Subject</label>
                 <input
                   className="h-12 rounded-xl border-none bg-[#f6f7f8] text-[#0d141b] focus:ring-2 focus:ring-primary/50 dark:bg-slate-800 dark:text-slate-50"
                   placeholder="How can we help?"
                   type="text"
                 />
               </div>

               <div className="flex flex-col gap-1">
                 <label className="ml-1 text-sm font-bold text-[#0d141b] dark:text-slate-300">Message</label>
                 <textarea
                   className="rounded-xl border-none bg-[#f6f7f8] text-[#0d141b] focus:ring-2 focus:ring-primary/50 dark:bg-slate-800 dark:text-slate-50"
                   placeholder="Write your message here..."
                   rows={4}
                 />
               </div>

               <button
                 className="mt-4 h-14 rounded-xl bg-[#2b8cee] font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-[#2b8cee]/90"
                 type="submit"
               >
                 Send Message
               </button>
             </form>
           </div>
         </div>
       </section>
        </main>
    );
  }
  