import { News } from "@/types/content";

interface LatestNewsProps {
    news: News;
}


export default function LatestNews({ news }: LatestNewsProps) {
    return (
           <div className="flex gap-6 rounded-2xl border border-primary/20 bg-[#2b8cee]/5 p-6 dark:bg-[#2b8cee]/10">
             <div className="hidden h-[120px] min-w-[120px] flex-col items-center justify-center rounded-xl border border-primary/20 bg-white text-[#2b8cee] shadow-sm dark:bg-slate-800 sm:flex">
               <span className="text-3xl font-extrabold"> {news.date} </span>
               <span className="text-xs font-bold uppercase tracking-widest">{news.month} {news.year}</span>
             </div>
             <div className="flex flex-col justify-center">
               <h4 className="mb-2 text-lg font-bold text-[#0d141b] dark:text-slate-50">{news.title}</h4>
               <p className="mb-3 line-clamp-2 text-sm text-[#4c739a] dark:text-slate-400">
                 {news.description}
               </p>
               <a className="flex items-center gap-1 text-sm font-bold text-[#2b8cee] hover:underline" href="#">
                 Full Article <span className="material-symbols-outlined text-sm">arrow_forward</span>
               </a>
             </div>
           </div>
    );
}